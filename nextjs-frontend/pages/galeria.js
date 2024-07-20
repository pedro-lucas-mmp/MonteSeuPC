import styled from '@emotion/styled';
import React, { useState } from 'react';

const Galeria = ({userJwt, userData, usersData}) => {
    const API_URL = process.env['API_URL'];
    const API_URL_IMAGE = process.env['NEXT_PUBLIC_API_URL_IMAGE'];
    const [showInput, setShowInput] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePostButtonClick = () => {
        setShowInput(true);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const postImage = async (event) => {
        event.preventDefault();
    
        if (!selectedImage) {
            alert('Por favor, selecione uma imagem.');
            return;
        }
        
        try {
            const formData = new FormData();
            formData.append('files', selectedImage);
            //console.log(selectedImage);
    
            const responseUploadImage = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${userJwt}`,
                },
                body: formData,
            });
            const responseData = await responseUploadImage.json();

            const envioBody = JSON.stringify({ postImagem: responseData[0].id })
            //console.log(envioBody);
            const responseSetUserImage = await fetch(`${API_URL}/api/users/${userData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userJwt}`,
                },
                body: envioBody,
            });
            window.location.href = '/galeria';
            if (!responseUploadImage.ok) {
                throw new Error('Erro ao enviar a imagem para o servidor.');
            }
    
            
            console.log('Imagem enviada com sucesso:', responseData);
    
                
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
        }
    };

    if(usersData){
        return (
            <GaleriaStyled>
                <div><a className='go-top' href='#header'><i className="fa-solid fa-arrow-up"></i></a></div>
                <div className='container'>
                    <h1>Bem vindo(a) à Galeria dos Usuários!</h1>
                    <div className='galeria'>
                        {usersData.map((user, index) => (
                            user.postImagem ? (
                                <figure className='galeria-figure' key={index}>
                                    {API_URL_IMAGE == process.env.API_URL ? <img className='galeria-imagem' src={`${API_URL_IMAGE}${user.postImagem.url}`} alt={`Post de ${user.username}`} /> : <img className='galeria-imagem' src={`${user.postImagem.url}`} alt={`Post de ${user.username}`} />}
                                    {/* <img className='galeria-imagem' src={`${API_URL_IMAGE}${user.postImagem.url}`} alt={`Post de ${user.username}`} /> */}
                                    <figcaption className='galeria-caption'>
                                        Máquina de {user.username.split(' ')[0].substring(0, 15)}
                                    </figcaption>
                                </figure>
                            ) : null
                        ))}
                    </div>
                    {!!userData ? (
                        <>
                            <div className='user-post'>
                                <label htmlFor='input-selection' className='post-btn' onClick={handlePostButtonClick}>Quero Postar! </label>
                            </div>
                            <form onSubmit={postImage}>
                                <input id='input-selection' type='file' className='post-input' accept='image/*' onChange={handleImageChange}/>
                                {selectedImage && (
                                    <div className='envio-div'>
                                        <h2 className='envio-caption'>Imagem Selecionada:</h2>
                                        <img className='envio-imagem' src={URL.createObjectURL(selectedImage)} alt='Imagem Selecionada' style={{ maxWidth: '400px' }} />
                                        <button type='submit' className='post-btn'>Enviar!</button>
                                        {/* <button className='post-btn' onClick={() => setSelectedImage(null)}>Cancelar</button> */}
                                    </div>
                                )}
                            </form>
                        </>
                    ) : (<div className='user-post'>
                     <a href="/registration"><button className='post-btn' >Efetue seu Login para participar! </button></a>
                </div>)}
                </div>
            </GaleriaStyled>
        );
    }
};

export default Galeria;

const GaleriaStyled = styled.div`
    background: url('/images/teste_bk2_1.5_2000x1333_compressed.jpg') repeat center center;
    overflow: hidden;
    height: 100%;
    


    .container{
        backdrop-filter: blur(8px);
        height: 100%;
        display: flow-root;

        #input-selection{
            display: none;
        }

        h1{
            background-color: rgba(0, 0, 0, 0.30);
            min-height: 200px;
            padding: 40px 40px;
            align-content: center;
            color: white;
            text-align: center;
            font-size: 3em;
            font-weight: bold;
            margin-top: 100px;
            margin-bottom: 100px;
        }
        .galeria {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin: 100px auto;
            width: 70%;
    
            .galeria-figure {
                flex: 1 1 350px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 350px */
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 20px;
            
            .galeria-caption {
                color: white;
                font-size: 1.2rem;
                padding: 10px;
                text-align: center;
            }

            .galeria-imagem {
                width: 100%;
                display: block;
                border-radius: 20px;
            }
            }
        }
        .envio-div{
            width: fit-content;
            margin: 40px auto;
        }
        .envio-caption{
            color: white;
            font-size: 1.2rem;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 10px;
            text-align: center;
            width: auto;
        }
        .envio-imagem{
            width: 100%;
            display: block;
        }
        
        .user-post{
            margin-bottom: 100px;
        }
        .post-btn{
                background-color: rgba(69, 160, 73, 0.4);
                padding: 10px 20px;
                color: white;
                border: none;
                font-size: 1.2rem;
                margin-top: 40px;
                cursor: pointer;
                transition: background-color 0.3s;
                &:hover {
                    background-color: rgba(69, 160, 73, 1.0);
                }
            }
    }


`