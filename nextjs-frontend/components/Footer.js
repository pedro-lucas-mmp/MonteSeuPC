import styled from '@emotion/styled'

export default function Footer({isDark}){
    return (
        <FooterStyled isDark={isDark}>
            <div className="container-footer">
                <div className='row'>
                    <div className='footer-col'>
                        <h4>MonteSeuPC</h4>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/MonteSeuPC">MonteSeuPC</a></li>
                                <li><a href="/galeria">Galeria</a></li>
                                <li><a href="/registration">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer-col'>
                        <h4>Sobre</h4>
                        <nav>
                            <ul>
                                <li><a href="#">Projeto</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Responsável</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer-col'>
                        <h4>Links Úteis</h4>
                        <nav>
                            <ul>
                                <li><a href="#">Contato</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Politica de Privacidade</a></li>
                                <li><a href="#">Termos e Condições</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer-col'>
                        <h4>Redes Sociais</h4>
                        <nav>
                            <div className='social-links'>
                                <a href='https://www.facebook.com/' target="_blank"><i className='fab fa-facebook-f'></i></a>
                                <a href='https://x.com/' target="_blank"><i className='fab fa-twitter'></i></a>
                                <a href='https://www.instagram.com/' target="_blank"><i className='fab fa-instagram'></i></a>
                                <a href='https://www.linkedin.com/in/plankito/' target="_blank"><i className='fab fa-linkedin-in'></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background: ${props => props.isDark ? '#000000' : '#24262b'};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 8px;
    text-align: center;
    max-width: 2000px;
    padding: 70px 0;
    position: static;
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container-footer {
        max-width: 1600px;
        margin: auto;
    }
    .row{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    
    .footer-col {
        width: 25%;
        padding: 0 15px;

        h4{
            font-size: 1.12rem;
            text-align: left;
            color: ${props => props.isDark ? '#ffffff' : '#ffffff'};
            text-transform: capitalize;
            margin-bottom: 30px;
            position: relative; 
            font-weight: 500;
        }
        h4::before {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            height: 2px;
            background-color: #e91e63;
            box-sizing: border-box;
            width: 100px;
        }
        ul{
            text-align: left;
            list-style: none;
        }
        ul li:not(:last-child){
            margin-bottom: 10px;
        }
        ul li a{
            font-size: 1rem;
            text-transform: capitalize;
            text-decoration: none;
            color: #bbbbbb;
            display: block;
            transition: all 0.3s ease;
        }
        ul li a:hover{
            color: #ffffff;
            padding-left: 8px;
        }
        .social-links{
            text-align: left;
        }
        .social-links a{
            display: inline-block;
            height: 40px;
            width: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            margin: 0 10px 10px 0;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.5s ease;
        }
        .social-links a:hover{
            
            color: #e91e63;
            background-color: rgba(255, 255, 255, 0.5);
            transform: scale(1.2);

        }
    }
    @media screen and (max-width: 992px){
        .footer-col{
            width: 50%;
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 350px){
       .footer-col{
            width: 100%;
        }
    }

    
`