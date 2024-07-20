import styled from '@emotion/styled'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'

export default function Header({isDark}){
    const [jwt, setJwt] = useState(null);

    const logout = () => {
        Cookies.remove('jwt');
        setJwt(null);
        window.location.reload();
    }

    useEffect(() => {
        const fetchUserInfo = async () => {
        const token = Cookies.get('jwt');
        setJwt(token);
        };
        
        fetchUserInfo();
    }, []);
    return (
        <HeaderStyled isDark={isDark}>
            <title>MonteSeuPC</title>
            <div  id="header" className="container-header">
                <div className="logo">
                <img className="logo-imagem" src="/images/generic-logo.png" alt="Logo do Site"/>
                    <div className='text-wrapper'>
                        <span className="logo-text">Monte seu PC!</span>
                        <p className='text-text'>Construa a Máquina dos Seus Sonhos com Peças Compatíveis e Sem Estresse</p>
                    </div>
                </div>
                <nav>
                <input type="checkbox" id="check" />
                <label htmlFor='check' className='mobile-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </label>
                
                    <ul className='paginas'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/MonteSeuPC">MonteSeuPC</a></li>
                        <li><a href="/galeria">Galeria</a></li>
                        <li><a href="/contato">Contato</a></li>
                        {!jwt ? <><li><a href="/registration">Login</a></li>
                        <li><a href="/registration">Cadastrar</a></li></>
                        : <li className='user-sign'><a onClick={logout} href="/"><i id="user-logo" className="fa-solid fa-user"></i> Logout</a></li>}
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#efefef'};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px;
    text-align: center;
    max-width: 2000px;
    padding: 10px;

    
    #user-logo{
        font-size: 20px;
        margin-right: 10px;
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        align-content: center;
        transition: all 0.3s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px
    }
    .user-sign{
        transition: all 0.3s ease-in-out;
    }
    .user-sign:hover{
        transform: scale(1.05);
    }
    .user-sign a{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;
    }

    .logo{
        display: flex;
        align-items: center;
    }
    .logo-imagem{
        margin-right: 20px;
        width: 80px;
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .logo-text{
        color: #333333;
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 5px;
        text-decoration: underline;
    }
    .text-text{
        color: #666666;
        font-size: 18px;
        margin-top: 5px;
        text-align: left;
    }
    
    .paginas{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 15px;
        margin: 0 10px;
    }
    .paginas li{
        align-content: center;
    }
    .paginas li a{
        color: #333333;
        text-decoration: none;
        transition: background-color 0.3s, color 0.3s, transform 0.2s;
        font-size: 1.05rem;
    }
    .paginas li a:hover,
    .paginas li a:focus{
        color: #495057;
        transform: scale(1.05);
    }

    #check{
        display: none;
    }
    .mobile-menu{
        display: none;
        right: 0;
        margin: 0 30px;
        cursor: pointer;

    }
    .mobile-menu div{
        width: 30px;
        height: 3px;
        background-color: #333333;
        margin: 5px 0;  
    }
    @media screen and (max-width: 450px) {
            .text-text{
            display: none;
            }
            .logo-imagem{
                margin-right: 0;
            }
        
        }
    @media screen and (max-width: 1500px){
        .paginas li{
            height: 100%;
            width: 100%;
            background: #efefef;
        }
        
        .mobile-menu{
            display: block;

        }
        .paginas{
            position: absolute;
            top: 100%;       
            right: 0;
            width: 60%;
            height: 0;
            background: ${props => props.isDark ? '#000000' : '#efefef'};
            flex-direction: column;
            justify-content: space-around;
            margin: 0;
            transition: 0.2s ease-in-out;
            overflow: auto;
            border-radius: 0  0 4px 4px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 8px;
        }
        .paginas::-webkit-scrollbar {
            display: none;
        }
        #check:checked~.paginas{
            height: 60vh;
            padding: 10px;
            overflow: auto;
    
        }

        .paginas li:hover{

            color: red;
        }
        .paginas li a{
            border-radius: 4px;
            font-size: 1.2rem;
            transform: translateY(-50%);
            opacity: 0;
            transition: .2s ease-in-out;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        .paginas li a:hover,
        .paginas li a:focus{
            color: #ffffff;
            background-color: #495057;
            #user-logo{
                color: black;
            }
            
        }
        #check:checked~.paginas li a{
            transform: translateY(0);
            opacity: 1;
        }
    }
`