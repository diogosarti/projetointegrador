<h1 align="center"> Projeto Integrador - ONG For All </h1>
<p align="center">Uma aplicação em nodeJS puro com integração de APIs e microsserviços</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,html,css,nodejs,tailwind,prisma,&theme=light" />
  </a>
</p>

## Introdução
O Projeto Integrador - ONG For All visa conectar potenciais doadores a ONGs que necessitam de apoio, enfrentando desafios como a baixa visibilidade das ONGs e a dificuldade dos doadores em encontrar organizações confiáveis. A solução proposta é uma plataforma digital que facilita as doações, promovendo transparência e facilitando a escolha de organizações alinhadas aos interesses dos doadores. Este projeto busca fomentar a solidariedade e aumentar o impacto social das ONGs.

## Requisitos
Antes de iniciar o projeto, você precisa ter os seguintes requisitos:

>- [MySQL](https://www.youtube.com/watch?v=a5ul8o76Hqw&t=273s)
>- [NodeJS v20.11](https://nodejs.org/en)

Certifique-se de que tudo esta instalado corretamente, estude sobre [Docker](https://youtube.com/playlist?list=PLViOsriojeLrdw5VByn96gphHFxqH3O_N&si=ESyfJ9zKaBnLt46F) pois será útil futuramente.

**Verficação**
```bash
node -v

npm -v
```

## Primeiros passos
Após criar um clone do repositório, instale as dependencias necessárias

```bash
npm install
```

Crie a database no seu banco de dados usando o MySQL Workmbench com o nome "ongforall":

<picture align="center">
 <img align="center" alt="YOUR-ALT-TEXT" src="docs/images/create_database.png">
</picture>

```SQL
CREATE database ongforall;
USE ongforall;
```

Com as dependencias intaladas, **RENOMEIE** o arquivo [.env-template](.env-template) para apenas `.env`. Dentro dele, configure as variáveis de ambiente de acordo com seu computador.

`DATABASE_URL="mysql://NOME:SENHA@localhost:3306/ongforall"`

Tudo certo para iniciar! 🫡

## Rodando o projeto em modo de desenvolvimento

Digite no seu terminal:
```bash
npm run dev
```
Pronto, seu servidor ficará disponível em [`http://localhost:3000`](http://localhost:3000)

# [Esturua de pastas](/docs/estrutura/esturuaDePastas.md)

As pastas estão estruturadas seguindo o padrão MVC:



# Em construção ⚙️
>Esta é apenas uma prévia da documentação. Em breve uma mais detalhada estará disponível.