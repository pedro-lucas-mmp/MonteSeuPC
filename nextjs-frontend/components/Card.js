import styled from '@emotion/styled';
import { useEffect, useState } from 'react'
import {returnIncompatibilidadesText} from './indexScripts/returnCompatibilityTests'

export default function Card({ hardware, tipo, cartAdd, isCompatible, cartData, justCompatible}) {
  const {info, valorEmBRL} = require('./infoModule')
  const [incompatibilidades, setIncompatibilidades] = useState([]);
  const [blocked, setBlocked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const colorCompatible = 'rgba(255, 0, 0, 0.8)';
  const API_URL = process.env['API_URL'];
  const isSelected = cartData[tipo]?.data?.id === hardware.id;
  const borderColor = isSelected ? 'black' : '';
  const boxShadow = isSelected
  ? '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
  : '0 6px 20px 0 rgba(0,0,0,0.12)'
  const selected = {...(borderColor && { borderColor }), ...(boxShadow && { boxShadow })}
  const backgroundColor = incompatibilidades.length > 0 ? colorCompatible : '';
  const style = {...(backgroundColor && { backgroundColor })};
  
  const togglePopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    async function checkCompatibility() {
      const incompat = await isCompatible(hardware, tipo, cartData);
      setIncompatibilidades(incompat);
      setBlocked(false);
      //setBlocked(incompat.length > 0);
    }
    checkCompatibility();
  }, [hardware, tipo, isCompatible, cartData]);

  if (justCompatible && !incompatibilidades.length < 1) {return; }
  return (
    <CardStyled style={selected}>
      <div className='item-card' >
        <div className='info-container'>
        <div>
          <div className='imagem-card'>
          {returnIncompatibilidadesText(incompatibilidades, style) ?  (
            <div className='card-exclamation'>
              <i className="fa-solid fa-exclamation custom-size"></i>
            </div> 
            ) : null}
            <img onClick={() => togglePopup(API_URL + hardware.attributes.imagem.data.attributes.url)} src={API_URL + hardware.attributes.imagem.data.attributes.url} />
          </div>
          <div className='item-nome'>
              <strong >{hardware.attributes.nome}</strong>
          </div>
        </div>

        <div className='table-card'>
            {info(hardware)}
        </div>
        </div>
        <div className='btn-select-div'>
          <button type='button' className='btn-select' onClick={() => { if (!blocked) cartAdd(tipo, hardware.id); }} disabled={blocked}>
            {isSelected ? (<strong>Selecionado</strong>) : "Selecionar"}<br></br><strong>{valorEmBRL(hardware.attributes.preco)}</strong>
          </button>
        </div>
      </div>
      {showPopup && (
        <ImagePopup onClick={togglePopup}>
          <div className='popup-content'>
            <div className='popup-content-image'>
              <img src={popupImage} alt={hardware.attributes.nome} />
            </div>
            <div className='details-popup'>
              <div className='popup-info'>
                <h2>{hardware.attributes.nome}</h2>
                {info(hardware, "-pop")}
              </div>
              {returnIncompatibilidadesText(incompatibilidades, style)}
              {cartData[tipo]?.data?.id === hardware.id && (
                <button type="button" className="btn-delete" onClick={() => cartAdd(tipo, 0, 'delete')}>
                  Excluir do Carrinho
                </button>
              )}
              {/*  */}
            </div>
          </div>
        </ImagePopup>
      )}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: white;
  padding: 10px;
  margin: 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  border-radius: 5px;
  border-color: lightgray;
  transition: 0.3s ease-in-out;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  


  &:hover {
    cursor: pointer;
  }
  
  .selecionado{
    background-color: rgb(230, 230, 230);
  }
  .card-exclamation{
    border-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.60) 0px 0px 8px;
    position: absolute;
    margin: -20px -20px;
    width: 30px;
    height: 30px;
    background-color: red;
    color: white;
    border-radius: 50%;
    align-content: center;
    text-align: center;
    z-index: 2;
    cursor: pointer;
    i{
      font-size: 25px;
    }
  }
  
  ul {
  list-style-type: none;
  padding-left: 0; 
  }

  li {
    margin-bottom: 0px; 
  }

  .returns{
    min-height: 84px;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px 10px 0 10px;
    width: auto;
    margin-bottom: auto;
  }

  

  .info-container{
    display:inline-block;
    overflow: hidden;
    margin-top: 10px;
  }

  .item-card {
    display: inline-grid;
    align-items: center;
    width: 100%;
    height: 100%;

  }

  .imagem-card {
    margin: 0px auto 10px auto;
    max-width: 200px;
    padding: 5px;
    background-color: white;
    border-radius: 8px;
    border-width: 1px;
    border-color: lightgray;
    align-content: center;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 8px;
    cursor: pointer;
    
    
  }

  .imagem-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  .table-card {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0 10px;
    flex-direction: row;
    text-align: left;
    width: 100%;
    height: fit-content;
  }

  .item-table-card {
    display: flex;
    margin-top: 10px;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    justify-content: space-between;
  }

  
  .value {
      flex: 1;
    }

  .item-nome{
    margin-bottom: 5px;
  }
  @media (max-width: 2000px) {
    .info-container{
      display:inline-block;
    }
    
  }
  .btn-select-div{
    margin-top: auto;
  }
  .btn-select {
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    padding: 10px 20px;
    margin-top: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #e0e0e0;
    }
  }
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
const ImagePopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  z-index: 999;
  


  .btn-delete {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
    background-color: #d32f2f;
    }      
  }
`;
