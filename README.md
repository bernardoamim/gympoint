<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Backend, Frontend e Mobile (iOS).
</h3>

<blockquote align="center">“Pequenas ações, se acompanhadas de disciplina e constância, revolucionam!”!</blockquote>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/bernardoamim/gympoint?color=%2304D361" />

  <a href="https://github.com/bernardoamim">
    <img alt="Made by Bernardo Amim" src="https://img.shields.io/badge/madeby-Bernardo-blueviolet" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-10/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-10?style=social" />
  </a>
</p>

<br>

<p align="center">
  <img alt="Telas" src=".github/screens.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as tecnologias [NodeJS](https://nodejs.org/en/), [ReactJS](https://reactjs.org) e [React Native](https://facebook.github.io/react-native/)

<br>
<p align="center">
  <a href="https://nodejs.org/en/"><img alt="Nodejs" src=".github/node-logo.svg" width="10%"></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://reactjs.org"><img alt="React" src=".github/react-logo.svg" width="10%"></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://facebook.github.io/react-native/"><img alt="React Native" src=".github/react-native-logo.svg" width="10%"></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## 💻 Descrição do Projeto

### Esse projeto foi o desafio final do Bootcamp 9 da RocketSeat para obtenção do certificado

Gympoint é um software para controle e gestão de academias e está dividido em três partes. O backend está estruturado em NodeJS e é responsável por disponibilizar uma API para que o frontend e o mobile possam consumr e exibir as informações para o usuário.

A parte WEB foi construída com as tecnologias ReactJs + Redux. Nela, os administradores da academia podem fazer a gestão de alunos, planos, matrículas e pedidos de ajuda.

Já o aplicativo mobile foi desenvolvido em React Native e tem a função de dar ao aluno a possibilidade de fazer Checkins na academia, enviar pedidos de ajuda e acompanhar as respostas de cada um.

### OBS: O APLICATIVO MOBILE FOI CONSTRUÍDO PARA iOS!!! NÃO GARANTIMOS O FUNCIONAMENTO EM AMBIENTE ANDROID!!!

## 📥 Instalação

Primeiramente, clone esse repositório em uma pasta.

```bash
  $ git clone https://github.com/bernardoamim/gympoint.git
```

### Backend

1. A partir da raiz do projeto, entre na pasta `./backend` rodando `cd backend`;
2. Para rodar a aplicação na sua máquina você vai precisar de inicializar as imagens dos bancos de dados [PostgreSQL](https://www.postgresql.org/) e [Redis](https://redis.io/) utilizando [Docker](https://www.docker.com/) e criar o banco `gympoint` no PostgreSQL. Para isso, sugerimos instalar a ferramenta [Postbird GUI](https://electronjs.org/apps/postbird) para manipulação do banco de dados. 
3. Instale o Docker na sua máquina, inicialize-o e rode os seguintes comandos:

```bash
  $ docker run --name postgresdb -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres:11
  $ docker run --name redisgym -p 6379:6379 -d -t redis:alpine
```

4. Feito isso, você já deve ser capaz de vizualizar as imagens disponíveis executando `docker ps -a` e as imagens que estão ativas com `docker ps`.
5. Incialize as imagens criadas com:

```
  docker start postgresdb
  docker start redisgym
```

6. Em seguida, vá até o Postbird e conecte-se ao banco criado com as devidas credenciais.
7. Crie um arquivo `.env` a partir do arquivo `.env.example` preenchendo todas as variáveis pedidas.

8. Execute os seguintes comandos no seu terminal:
9. `yarn` para instalar todas as dependências.
10. `yarn sequelize db:migrate` para criar as migrations.
11. `npx sequelize db:seed:all` para popular o banco.
12. `yarn dev` para iniciar o servidor node.
13. Em outra aba do termal, execute `yarn queue` para inicializar as filas em background.

### Frontend

1. A partir da raiz do projeto, entre na pasta rodando `cd frontend`;
2. Rode `npm install` para instalar as dependências;
3. Rode `npm run start` para iniciar o servidor de desenvolvimento;
4. Abra `http://localhost:3000` para ver o projeto no navegador.

### Mobile

1. A partir da raiz do projeto, entre na pasta rodando `cd mobile`;
2. Rode `npm install` para instalar as dependências;
3. Rode `npm run start` para iniciar o servidor de desenvolvimento;
4. Cheque o ip do servidor e substitua `localhost` do atributo `baseURL` no arquivo `src > services > api.js`;
5. Rode `npm run android` para iniciar a instalação no smartphone;

<i>Obs.:</i> Projeto mobile desenvolvido apenas para a plataforma <strong>android</strong>.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
