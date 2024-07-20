import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import NavHardware from 'components/NavHardware';
import { useRouter } from 'next/router';
import { returnCards } from './indexScripts/returnCards.js'
import { returnCart } from './indexScripts/returnCart.js'
import styled from '@emotion/styled';
import Cookies from 'js-cookie';
import fetchUserData from '/components/returnUserData';
import Register from '../components/Register';
import Login from '../components/Login';

const EnvioCarrinho = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  `
  
const MonteSeuPC = ({ processadorData, placa_maeData, cart, memoria_ramData, placa_de_videoData, gabineteData, fonteData, cpu_coolerData, armazenamentoData, }) => {
  const {valorEmBRL} = require('/components/infoModule');
  const [cartData, setCartData] = useState(null)
  const [cartId, setCartId] = useState(null)
  const [renderKey, setRenderKey] = useState(0)
  const [url, setUrl] = useState('')
  const router = useRouter();
  const API_URL = process.env['API_URL'];
  ///USERDATA\\\
  const [jwt, setJwt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  ///USERDATA\\\
  // const { pathname, asPath, query } = router;
  // console.log(asPath)
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [guiado, setGuiado] = useState(false)
  const [popupEnvio, setPopupenvio] = useState(false)
  const [justCompatible, setJustCompatible] = useState(false);
  const [toggleCompatible, setToggleCompatible] = useState(true);
  
  function valorCart(cartData) {
    let valorTotal = 0;
    for (const key in cartData) {
      if (cartData.hasOwnProperty(key)) {
        const hardware = cartData[key];
        if (hardware.data) {
          const preco = parseFloat(hardware.data.attributes.preco || 0);
          valorTotal += preco;
        }
      }
    }
    return valorEmBRL(valorTotal);
  }
  

  
  const borderColor = guiado ? 'black' : '';
  const backgroundColor = guiado
    ? 'linear-gradient(180deg, rgba(233,236,239,1) 0%, rgba(0,0,0,0.1) 100%)'
    : '';

  const selected = {
    ...(borderColor && { borderColor }),
    ...(backgroundColor && { backgroundImage: backgroundColor }),
  };

  const enviarCarrinho = () => {
    setPopupenvio(!popupEnvio)
  }

  const toggleJustCompatible = () => {
    if(!!toggleCompatible){setJustCompatible(false)}
    setToggleCompatible(!toggleCompatible)
    setJustCompatible(toggleCompatible);
  };

  const toggleGuiado = () => {
    if(!guiado){setSelectedCategory('processador')}
    setGuiado(!guiado);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = Cookies.get('jwt');
      setJwt(token);

      if (token) {
        await fetchUserData(token, setUserData, setLoading, "/me/?populate=cart");
      } else {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchCartInfo = async () => {
      if (userData) {
        const cartInfo = await returnCartTable(userData.cart.id);
        setCartId(cartInfo.data.id);
        setCartData(cartInfo.data.attributes);
      }
    };

    fetchCartInfo();
  }, [userData]);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  
  const forceUpdateCard = () => {
    setRenderKey(prevKey => prevKey + 1)
  };

  const cartAdd = async (tipo, valor, Delete) => {
    let insert = {
      data: {
        [tipo]: {
          id: valor
        }
      }
    };
    
    if (Delete == 'delete') {
      insert = {
        data: {
          [tipo]: null
        }
      };
    };

    const tiposValidos = ["processador", "placa_mae", "memoria_ram", 'cpu_cooler', 'placa_de_video', 'armazenamento', 'fonte', 'gabinete']
    if (tiposValidos.includes(tipo)) {
      try {
        if (cartData[tipo]?.data?.id !== valor || guiado){
        const response = await fetch(`${API_URL}/api/carts/${cartId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(insert)
        });
        if (!response.ok) {
          throw new Error('Problema na função cartAdd()');
        }
        const updatedCartResponse = await fetch(`${process.env.API_URL}/api/carts/${cartId}?${returnPopulateCartFields()}`);
        const updatedCartData = await updatedCartResponse.json();
        setCartData(updatedCartData.data.attributes);
        if(guiado){
          if(selectedCategory === 'processador'){
            setSelectedCategory('placa_mae')}
          if(selectedCategory === 'placa_mae'){
            setSelectedCategory('memoria_ram')}
          if(selectedCategory === 'memoria_ram'){
            setSelectedCategory('cpu_cooler')}
          if(selectedCategory === 'cpu_cooler'){
            setSelectedCategory('placa_de_video')}
          if(selectedCategory === 'placa_de_video'){
            setSelectedCategory('armazenamento')}
          if(selectedCategory === 'armazenamento'){
            setSelectedCategory('fonte')}
          if(selectedCategory === 'fonte'){
            setSelectedCategory('gabinete')}
          if(selectedCategory === 'gabinete'){
            toggleGuiado()
            setSelectedCategory('todos')}
          if(selectedCategory === 'todos'){
            toggleGuiado()}
        }
      }} catch (error) {
        console.log(error);
      }
    }
  };
  
  if(cartData){
  return (
  <>
  {popupEnvio && (
    <EnvioCarrinho onClick={enviarCarrinho}>
    <div className={`popup-envio ${popupEnvio ? 'show' : ''}`}>
      <div className='popup-envio-imagem'>
        <img src={'/images/envioCarrinho.jpg'} alt='Felicidade!' />
      </div>
        <div className='details-popup-envio'>
          <span>Parabéns! Suas peças foram encaminhadas para o carrinho do E-Commerce especializado nesta área!</span>
          <br></br>
          <br></br>
          <div>
            <span>Itens enviados:</span>
            {!!cartData?.processador?.data?.attributes && (<p><strong>Processador: </strong>{cartData?.processador?.data?.attributes?.nome} - ({valorEmBRL(cartData?.processador?.data?.attributes?.preco)})</p>)}
            {!!cartData?.placa_mae?.data?.attributes && (<p><strong>Placa mãe: </strong>{cartData?.placa_mae?.data?.attributes?.nome} - ({valorEmBRL(cartData?.placa_mae?.data?.attributes?.preco)})</p>)}
            {!!cartData?.memoria_ram?.data?.attributes && (<p><strong>Memória Ram: </strong>{cartData?.memoria_ram?.data?.attributes?.nome} - ({valorEmBRL(cartData?.memoria_ram?.data?.attributes?.preco)})</p>)}
            {!!cartData?.cpu_cooler?.data?.attributes && (<p><strong>CPU Cooler: </strong>{cartData?.cpu_cooler?.data?.attributes?.nome} - ({valorEmBRL(cartData?.cpu_cooler?.data?.attributes?.preco)})</p>)}
            {!!cartData?.placa_de_video?.data?.attributes && (<p><strong>Placa de Vídeo: </strong>{cartData?.placa_de_video?.data?.attributes?.nome} - ({valorEmBRL(cartData?.placa_de_video?.data?.attributes?.preco)})</p>)}
            {!!cartData?.armazenamento?.data?.attributes && (<p><strong>Armazenamento: </strong>{cartData?.armazenamento?.data?.attributes?.nome} - ({valorEmBRL(cartData?.armazenamento?.data?.attributes?.preco)})</p>)}
            {!!cartData?.fonte?.data?.attributes && (<p><strong>Fonte: </strong>{cartData?.fonte?.data?.attributes?.nome} - ({valorEmBRL(cartData?.fonte?.data?.attributes?.preco)})</p>)}
            {!!cartData?.gabinete?.data?.attributes && (<p><strong>Gabinete: </strong>{cartData?.gabinete?.data?.attributes?.nome} - ({valorEmBRL(cartData?.gabinete?.data?.attributes?.preco)})</p>)}
          </div>
          <br/>
          <strong>Valor total do Carrinho:</strong><span> {valorCart(cartData)}</span>
          
        </div>
      </div>
    </EnvioCarrinho>)}
    
    <div id='main' className={`main ${popupEnvio ? 'blur' : ''}`}>
      <div><a className='go-top' href='#header'><i className="fa-solid fa-arrow-up"></i></a></div>
      <div className='container-navhardware'>
        <NavHardware onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} setGuiado={setGuiado}/>
      </div>
      <div className='sub-main'>
        <div className="container-card">
          <div className='toggle-guiado'>
            <div className='buttons'>
              <button style={selected} onClick={toggleGuiado}>Seleção Guiada: <strong>{guiado ? "Ligada" : "Desligada"}</strong></button>
            </div>
            <div className='buttons'>
              <button onClick={enviarCarrinho}>Enviar Carrinho</button>
            </div>
            <div className='buttons'>
              <button onClick={toggleJustCompatible}>Somente Compatíveis: <strong>{justCompatible ? "Ligado" : "Desligado"}</strong></button>
            </div>
          </div>
          <h2 className='tittle-card'>Produtos à Selecionar</h2> 
        <div className='cards'>{selectedCategory === 'todos' ?(
        <>
          <h4 className="call-card" id='processador'>Processadores</h4><div className='grid-cards'>{returnCards(processadorData, renderKey, "processador", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='placa_mae'>Placas Mãe</h4><div className='grid-cards'>{returnCards(placa_maeData, renderKey, "placa_mae", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='memoria_ram'>Memórias Ram</h4><div className='grid-cards'>{returnCards(memoria_ramData, renderKey, "memoria_ram", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='cpu_cooler'>CPU Coolers</h4><div className='grid-cards'>{returnCards(cpu_coolerData, renderKey, "cpu_cooler", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='placa_de_video'>Placas de Vídeo</h4><div className='grid-cards'>{returnCards(placa_de_videoData, renderKey, "placa_de_video", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='armazenamento'>Armazenamentos</h4><div className='grid-cards'>{returnCards(armazenamentoData, renderKey, "armazenamento", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card" id='fonte'>Fontes</h4><div className='grid-cards'>{returnCards(fonteData, renderKey, "fonte", cartAdd, cartData, justCompatible)}</div>
          <h4 className="call-card"id='gabinete'>Gabinetes</h4><div className='grid-cards'>{returnCards(gabineteData, renderKey, "gabinete", cartAdd, cartData, justCompatible)}</div>
        </>
      ) : (
        <>
          {selectedCategory === 'processador' && (
            <><h4 className="call-card" id="processador">Processadores</h4>
              <div className='grid-cards'>{returnCards(processadorData, renderKey, 'processador', cartAdd, cartData, justCompatible)}</div>
            </>
          )}
          {selectedCategory === 'placa_mae' && (
            <><h4 className="call-card" id="placa_mae">Placas Mãe</h4>
              <div className='grid-cards'>{returnCards(placa_maeData, renderKey, 'placa_mae', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'memoria_ram' && (
            <><h4 className="call-card" id="memoria_ram">Memórias Ram</h4>
              <div className='grid-cards'>{returnCards(memoria_ramData, renderKey, 'memoria_ram', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'cpu_cooler' && (
            <><h4 className="call-card" id="cpu_cooler">CPU Coolers</h4>
              <div className='grid-cards'>{returnCards(cpu_coolerData, renderKey, 'cpu_cooler', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'placa_de_video' && (
            <><h4 className="call-card" id="placa_de_video">Placas de Vídeo</h4>
              <div className='grid-cards'>{returnCards(placa_de_videoData, renderKey, 'placa_de_video', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'armazenamento' && (
            <><h4 className="call-card" id="armazenamento">Armazenamentos</h4>
              <div className='grid-cards'>{returnCards(armazenamentoData, renderKey, 'armazenamento', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'fonte' && (
            <><h4 className="call-card" id="fonte">Fontes</h4>
              <div className='grid-cards'>{returnCards(fonteData, renderKey, 'fonte', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
          {selectedCategory === 'gabinete' && (
            <><h4 className="call-card" id="gabinete">Gabinetes</h4>
              <div className='grid-cards'>{returnCards(gabineteData, renderKey, 'gabinete', cartAdd, cartData, justCompatible)}</div>
              </>
          )}
        </>
      )}
        </div>
        
        </div>
        <div className='container-cart'>
        <h2 className='tittle-cart'>Produtos Selecionados</h2>
        <h3 className='subtittle-cart'>Valor do Carrinho: {valorCart(cartData)}</h3>
          <div className='cart-items'>
            <div className='call-cart'>
              {returnCart(cartData, "processador", "Processador", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "placa_mae", "Placa mãe", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "memoria_ram", "Memória ram", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "cpu_cooler", "CPU Cooler", cartAdd, setSelectedCategory)}
            </div>
            <div>
              {returnCart(cartData, "placa_de_video", "Placa de vídeo", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "armazenamento", "Armazenamento", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "fonte", "Fonte", cartAdd, setSelectedCategory)}
            </div>
            <div className='call-cart'>
              {returnCart(cartData, "gabinete", "Gabinete", cartAdd, setSelectedCategory)}
            </div>
          </div>
        </div>
      </div>
    </div></>
  );}else{
    return(<>
      
    <RegistrationStyled>
        <h1>Faça seu login ou cadastre-se para continuar</h1>
        <div>
        <Register route="/MonteSeuPC"/>
        <Login route="/MonteSeuPC"/>
        </div>
    </RegistrationStyled></>)
    
  }
};
const RegistrationStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin:33vh 0;
    div{
      display: flex;

    }
    h1{
      margin: 0 40px 40px 40px;
      max-width: 492px;
    }
    @media screen and (max-width: 1250px) {
       
       flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      div{
        flex-direction: column;
       }
    }
    
    `

function returnPopulateCartFields(){
  const populateFields = ['placa_mae.imagem', 'processador.imagem', 'placa_mae.dimensao', 'placa_mae.conectores_alimentacao', 'placa_mae.geracoes_compativeis',
    'memoria_ram.imagem', 'placa_de_video.imagem', 'placa_de_video.dimensao', 'placa_de_video.conectores_alimentacao', 'cpu_cooler.imagem', 'cpu_cooler.socket_compatibility',
    'cpu_cooler.dimensao_radiador_dissipador', 'armazenamento.imagem', 'fonte.imagem', 'fonte.dimensao', 'fonte.conectores_alimentacao',
    'gabinete.imagem', 'gabinete.dimensao', 'gabinete.placa_mae_compatibility', 'gabinete.radiador_compatibility'];
  const populateQuery = populateFields.map(field => `populate[]=${field}`).join('&');
  return populateQuery
}

async function returnCartTable(userCartId){
  const API_URL = process.env['API_URL'];
  if (!userCartId){
    const cartResponse = await fetch(`${API_URL}/api/carts/?${returnPopulateCartFields()}`);
    return await cartResponse.json();
  }else {
    const cartResponse = await fetch(`${API_URL}/api/carts/${userCartId}?${returnPopulateCartFields()}`);
    return await cartResponse.json();
  }
  
}

function returnTablesUrls(){
  const { API_URL } = process.env;
  const tableUrls = [
    `${API_URL}/api/processadores/?populate=*`,
    `${API_URL}/api/placa-maes/?populate=*`,
    `${API_URL}/api/memoria-rams/?populate=*`,
    `${API_URL}/api/placa-de-videos/?populate=*`,
    `${API_URL}/api/gabinetes/?populate=*`,
    `${API_URL}/api/fontes/?populate=*`,
    `${API_URL}/api/cpu-coolers/?populate=*`,
    `${API_URL}/api/armazenamentos/?populate=*`,
  ];

  return tableUrls
}

export async function getServerSideProps() {
  
  const fetchTableData = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const tableData = await Promise.all(returnTablesUrls().map(url => fetchTableData(url)));
  const [processadorData, placamaeData, memoriaramData, placadevideoData, gabineteData, fonteData, cpucoolerData, armazenamentoData] = tableData;
  return {
    props: {
      // cart: await returnCartTable(),
      processadorData: processadorData.data,
      placa_maeData: placamaeData.data,
      memoria_ramData: memoriaramData.data,
      placa_de_videoData: placadevideoData.data,
      gabineteData: gabineteData.data,
      fonteData: fonteData.data,
      cpu_coolerData: cpucoolerData.data,
      armazenamentoData: armazenamentoData.data
    }
  };
}

export default MonteSeuPC;