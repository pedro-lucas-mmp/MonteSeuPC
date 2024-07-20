import styled from '@emotion/styled';

const Home = ({userData}) => {
 const firstNameUsername = userData?.username.split(' ')[0];
  return (
    <HomePage>
      <div><a className='go-top' href='#header'><i className="fa-solid fa-arrow-up"></i></a></div>
      <div className='container'>
        <div className="cover">
          <div className='cover-display'>
            <div className='text-box'>
              <h1>Monte seu PC!</h1>
              <p>Bem vindo(a){!userData ? " ao Monte seu PC" : ", " + firstNameUsername.substring(0, 15)}!</p>
            </div>
            <div className='buttons'>
              <button onClick={() => window.location.href="/MonteSeuPC"}>Quero Montar meu PC ↪</button>
            </div>
          </div>
        </div>
        <section>
          <article className='card'>
            <div className='conteudo'>
              <h2>Como Funciona</h2>
              <p>A seleção de Peças seu PC é um processo intenso e preciso, 
                mas com a ajuda de nossos especialistas, você conseguirá 
                um PC confiável e funcionando perfeitamente.</p>
              <p>Através da seleção de peças pelo usuário, o sistema
                do Monte seu PC verifica características e possíveis incompatibilidades
                entre as peças selecionadas, identificando com antecedência problemas de compatibilidade 
                e apontando-os para que o usuário possa realizar as alterações necessárias.</p>
            </div>
            <div id="figure-bk-1" className='figure-bk' alt='Como Funciona'>
              {/* <img src='/images/equipe.jpg' alt='Como Funciona' /> */}
            </div>
          </article>
        
          <article className='card'>
            <div id="figure-bk-2" className='figure-bk' alt='Seleção de Peças'>
              {/* <img src='/images/pecas-sobre-mesa.jpg' alt='Como Funciona' /> */}
            </div>
            <div className='conteudo'>
              <h2>Seleção de Peças</h2>
              <p>O processo de seleção de peças é simples e intuitivo. O usuário escolhe os 
                componentes desejados, como processador, placa-mãe, memória RAM, placa de vídeo, 
                armazenamento, entre outros.</p>
              <p>Nosso sistema oferece uma vasta gama de opções, permitindo ao usuário escolher 
                peças que melhor atendam às suas necessidades e orçamento.</p>
            </div>
          </article>

          <article className='card'>
            <div className='conteudo'>
              <h2>Verificação de Compatibilidade</h2>
              <p>Cada peça selecionada passa por uma verificação rigorosa de compatibilidade. 
                Isso inclui verificar se o processador é compatível com a placa-mãe, se a memória 
                RAM é suportada pelo processador, entre outros.</p>
              <p>O sistema identifica automaticamente qualquer incompatibilidade e notifica o usuário, 
                permitindo ajustes antes de finalizar a montagem da composição.</p>
            </div>
            <div id="figure-bk-3" className='figure-bk' alt='Verificação de Compatibilidade'>
              {/* <img src='/images/processador-para-pc.jpg' alt='Como Funciona' /> */}
            </div>
          </article>

          <article className='card'>
            <div id="figure-bk-4" className='figure-bk' alt='Vantagens do Monte seu PC'>
              {/* <img src='/images/maquina-montagem.jpg' alt='Como Funciona' /> */}
            </div>
            <div className='conteudo'>
              <h2>Vantagens do Monte seu PC</h2>
              <p><strong>Personalização Total: </strong>Escolha cada componente do seu PC conforme 
              suas necessidades.</p>
              <p><strong>Compatibilidade Garantida: </strong>Verificações automáticas para evitar 
              problemas de compatibilidade.</p>
              <p><strong>Especialistas à Disposição: </strong>Suporte de especialistas em todas as 
              etapas.</p>
              <p><strong>Máquina dos Seus Sonhos sem Complicações: </strong>Através das etapas de 
              seleção percorridas, você terá acesso ao melhor de sua máquina sem problemas e incompatibilidades.</p>
            </div>
            
          </article>
        </section>
      </div>
    </HomePage>
  )
}
export default Home;

const HomePage = styled.div`

position: sticky;
background: url('/images/home-background.jpg') repeat center center;
overflow: hidden;
.container{
  backdrop-filter: blur(8px);
}

.cover{
  background-image: url('/images/melhor-pc-gamer.jpg');
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  text-shadow: black 1px 0 50px;
  box-shadow: black 0 0 10px;
}

section{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  text-align: center;
}
  
    #figure-bk-1{
      background-image: url("/images/equipe.jpg");
      background-position: center;
      background-size: cover;
    }
    #figure-bk-2{
      background-image: url("/images/pecas-sobre-mesa.jpg");
      background-position: center;
      background-size: cover;
    }
    #figure-bk-3{
      background-image: url("/images/processador-para-pc.jpg");
      background-position: center;
      background-size: cover;
    }
    #figure-bk-4{
      background-image: url("/images/maquina-montagem.jpg");
      background-position: center;
      background-size: cover;
    }

  .card{
    display: flex;
    min-height: 400px;
    width: 90%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 50px 0;
    box-shadow: black 0 0 50px;
    font-size: 1.5rem;
    .figure-bk{
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      margin: 10px;
      box-shadow: black 0 0 10px;
      border-radius: 4px;
      min-height: 500px;
      img{
        width: 100%;
        border-radius: 4px;
        box-shadow: black 0 0 10px;
      }
    }
  }

  .conteudo{
    background-color: rgba(255, 255, 255, 0.9);
    padding: 40px;
    height: auto;
    width:50%;
    border-radius: 4px;
    h2{
      margin-bottom: 40px;
    }
    p{
      margin: 10px auto;
      text-align: justify;
      line-height: 1.8;
      font-size: 1.2rem;
      width: 90%;
      padding-bottom: 10px
    }
  }

.buttons{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover{
    background-color: #45a049;
  }
}

.cover{
  h1{
    font-size: 3rem;
    font-weight: bold;
  }
  p{
    font-size: 1.5rem;
  }
  .text-box{
    border-width:2px;
    padding: 20px;
    transition: background-color 0.5s ease;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .text-box:hover{
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}

@media screen and (max-width: 550px){
  .conteudo{
    padding: 40px 10px;
  }
}

@media screen and (max-width: 1260px){
  .card{
    flex-direction: column;
    font-size: 100%;
    
    .conteudo{
      width: 100%;
      order: 2;
      p{
        font-size: 100%;
      }
    }
    .figure-bk{
      order: 1;
      width: auto;
      min-height: 400px;
      height: 400px;
    }
  }
}


`