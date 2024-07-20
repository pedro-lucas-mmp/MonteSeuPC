import styled from '@emotion/styled';
import { useState, useEffect} from 'react'
import {returnIncompatibilidadesText} from './indexScripts/returnCompatibilityTests'


export default function Cart({ hardware, tipo, isCompatible, cartData, itemTittle, cartAdd, setSelectedCategory}) {
  const {info, valorEmBRL} = require('./infoModule');
  const API_URL_IMAGE = process.env['NEXT_PUBLIC_API_URL_IMAGE'];
  const [compatible, setCompatible] = useState(null)
  const [incompatibilidades, setIncompatibilidades] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const colorCompatible = 'rgba(255, 0, 0, 0.8)';
  const backgroundColor = incompatibilidades.length > 0 ? colorCompatible : '';
  const style = {...(backgroundColor && { backgroundColor })};

  const togglePopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setShowPopup(!showPopup);
  };
  
  useEffect(() => {
    async function checkCompatibility() {
      if (!hardware?.data || Object.keys(hardware.data).length === 0) {
        setCompatible(false);
        setIncompatibilidades(["Peça de hardware não encontrada"]);
        return;
      }
      const isCompat = await isCompatible(hardware.data, tipo, cartData);
      setCompatible(isCompat.length === 0);
      setIncompatibilidades(isCompat);
    }
    checkCompatibility();
  }, [hardware, tipo, isCompatible, cartData]);

 
  try {
    const hardware_url = hardware.data.attributes.imagem.data.attributes.url;
    
    return (
      <CartStyled >
        <div className='cart'>
          {/* <div className='header' style={!compatible ? { backgroundColor: colorCompatible } : {}}> */}
          <div className='header'>
            <strong >{itemTittle}</strong>
            <span>{hardware.data.attributes.nome}</span>
          </div>
          <div className='poster' >
          {!compatible ?  (
            <div className='cart-exclamation'>
              <i className="fa-solid fa-exclamation"></i>
            </div> 
            ) : null}
            <i className="fa-solid fa-x deleteX" onClick={() => cartAdd(tipo, 0, 'delete')}></i>
            <img onClick={() => togglePopup(API_URL_IMAGE + hardware_url)} src={API_URL_IMAGE + hardware_url} alt={hardware.data.attributes.nome} />
          </div>
          <div className='details'>
          <span>{valorEmBRL(hardware.data.attributes.preco)}</span>
          </div>
        </div>

        {showPopup && (
          <ImagePopup onClick={togglePopup}>
            <div className='popup-content'>
            <div className='popup-content-image'>
              <img src={popupImage} alt={hardware.data.attributes.nome} />
            </div>
              <div className='details-popup'>
                <div className='popup-info'>
                  <h2>{hardware.data.attributes.nome}</h2>
                  {info(hardware.data, "-pop")}
                </div>
                {returnIncompatibilidadesText(incompatibilidades, style)}
                {
                <button type="button" className="btn-delete" onClick={() => cartAdd(tipo, 0, 'delete')}>
                  Excluir do Carrinho
                </button>
              }
                {/* */}
              </div>
            </div>
          </ImagePopup>
      )}
      </CartStyled>
    );
  } catch (error) {
    return (
      <CartStyled className='cartError' onClick={() => setSelectedCategory(tipo)}>
        <p>Nenhum(a) {itemTittle} selecionado(a).</p>
      </CartStyled>
    );
  }
}



const CartStyled = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  text-align: center;
  min-width: 150px;
  min-height: 200px;
  justify-content: space-between;
  height: 92%;
  transition: all 0.3s ease-in-out;


  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px;
    cursor: pointer;
    .deleteX{
      opacity: 1;
    }
  }

  ul {
  list-style-type: none;
  padding-left: 0; 
  }

  .cart {
    width: 100%;
    display: contents;
    flex-direction: column;
    align-items: center;
  }

  .header {
    position: relative;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    background-color: #f8f8f8e0;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

    span{
      display: block;
      margin-top: 5px;
    }
  }
  .cart-exclamation{
    border-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.60) 0px 0px 8px;
    position: absolute;
    margin: -10px -10px;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    border-radius: 50%;
    align-content: center;
    text-align: center;
    font-weight: bold;
    z-index: 2;
    cursor: pointer;
  }
  .deleteX{
    position: absolute;
    margin: -10px 0 0 70px;
    width: 20px;
    height: 20px;
    background-color: white;
    color: red;
    border-radius: 50%;
    align-content: center;
    text-align: center;
    font-weight: bold;
    z-index: 2;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  .poster {
    position: relative;
    width: 100%;
    max-width: 80px;
    height: auto;
    border-radius: 10px;
    cursor: pointer;
    
  }

  .poster img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .details {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  }

  .details p {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }

  @media (max-width: 600px) {
    /* .poster img {
      max-width: 30%;
    } */

    .details p {
      font-size: 0.9rem;
    }
  }
`;
const ImagePopup = styled.div`
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


.btn-delete {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.40) 0px 0px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
    background-color: #d32f2f;
    }      
}
`;