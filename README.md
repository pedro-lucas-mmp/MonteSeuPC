Bem vindo ao Projeto MonteSeuPC!
Acesso ao Deploy: https://monte-seu-pc-qrxb4jdda-plankitos-projects.vercel.app

Para mais informações da proposta do projeto, acesse: https://medium.com/@Plankito/meu-projeto-monteseupc-306932087af8

Para iniciar, será necessário baixar o projeto e executar os seguintes processos:

- BANCO DE DADOS:
  - Primeiramente, será necessário a criação de um Banco de Dados através do PpAdmin ou equivalente.
  - Após criação do Banco de Dados, deverá substituir informações para acesso do Banco de Dados em strapi-backend/.env com as informações do seu Banco de Dados recém criado.


- APLICAÇÃO:
  - Em strapi-backend, deverá executar (em caso de WARN, ignorar e seguir):
    - npm install
    - npm run develop

  - Em nextjs-frontend, deverá executar:
    - npm install
    - npm run dev

- CRIAÇÃO DE ENTIDADES:
  - Após inicialização do o comando npm run develop em strapi-backend, será possível o acesso ao painel administrativo do Strapi, devidamente com a URL(http://localhost:1337/admin).
    - Email do Backend(Strapi): admin@admin.com
    - Senha do Backend(Strapi): Admin123