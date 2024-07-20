import styled from '@emotion/styled';
import Register from '../components/Register';
import Login from '../components/Login';

const Registration = ({ Component, pageProps }) => {
  return (
    <RegistrationStyled>
      <h1>Faça seu login ou cadastre-se para continuar</h1>
        <div>
          <Register/>
          <Login/>
        </div>
    </RegistrationStyled>
  )
}

export default Registration

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
    @media (max-width: 1250px) {
       
       flex-direction: column;
    }
    @media (max-width: 768px) {
      div{
        flex-direction: column;
       }
    }
    `