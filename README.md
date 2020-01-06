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

### OBS: o aplicativo mobile foi desenvolvido para iOS!!! Não garantimos o funcionamento em ambiente Andorid!!!

## 📥 Instalação

Primeiramente, clone esse repositório em uma pasta.

```bash
  $ git clone https://github.com/bernardoamim/gympoint.git
```

### Backend

1. A partir da raiz do projeto, entre na pasta `./backend` executando `cd backend`;
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
12. `yarn dev` para iniciar o servidor node na rota `http://localhost:3333`.
13. Em outra aba do termal, execute `yarn queue` para inicializar as filas em background.

- <strong>O arquivo exportado do Insomnia com as rotas e requisições configuradas pode ser acessado em:</strong> 
[insomnia-config.json](https://github.com/bernardoamim/gympoint/blob/master/.github/GympointInsomnia-BernardoAmim.json)

### Frontend

1. A partir da raiz do projeto, entre na pasta `./frontend` executando `cd frontend`;
2. Uma vez conectado ao banco e com o backend em execução, digite os seguintes comandos no seu terminal:
3. `yarn` para instalar as dependências;
4. `yarn start` para iniciar o servidor de desenvolvimento;
5. Uma janela do seu navegador abrirá com a aplicação. Caso contrário, digite `http://localhost:3000` no navegador.

### Mobile

#### O aplicativo mobile foi desenvolvido para iOS com as seguintes especificações:

- NPM: `6.9.0`
- Xcode: `11.3`
- MacOS: `Catalina 10.15.2`
- Node: `v11.11.0`
- Yarn: `1.13.0`
- Docker: `19.03.5`
- ReactJS: `16.12.0`
- React Native: `0.61.5`, react na versão `16.9.0` no mobile

### Você deve estar em um ambiente macOS para poder executar corretamente o aplicativo

1. A partir da raiz do projeto, entre na pasta `./mobile` executando `cd mobile`;
2. Digite os seguintes comandos no seu terminal:
3. `sudo gem install cocoapods` para instalar o gerenciador de pacotes [Cocoapods](https://cocoapods.org)
4. `yarn` para instalar as dependências
5. Entre na pasta `ios` com `cd ios`
6. `pod install` para atualizar os pacotes
7. `cd ..` para voltar para a pasta `./mobile`
7. `npx react-native run-ios` para iniciar o servidor de desenvolvimento;

<i>Obs.:</i> Projeto mobile desenvolvido apenas para a plataforma <strong>iOS</strong>.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
