# 🛒 Supermercado - Loja Online (Desafio Frontend)

Este é um projeto desenvolvido como parte de um desafio para uma vaga de estágio de **Desenvolvedor Frontend** na empresa tgid, cujo objetivo era simular uma loja online com funcionalidades de listagem de produtos e carrinho de compras.

---

## 🚀 Objetivo

Desenvolver uma aplicação simulando uma loja online com as seguintes funcionalidades:

- Listagem de produtos consumindo uma API REST (simulada com JSON Server)
- Página individual para o carrinho de compras
- Adição e remoção de produtos no carrinho
- Resumo da compra com cálculo do valor total

---

## 🧠 Escolhas Técnicas

Embora o desafio sugerisse o uso de React, optei por implementar a aplicação com **JavaScript puro**, pois tenho uma base mais sólida e conseguiria entregar um resultado mais sofisticado dentro do prazo, além de destacar melhor minhas habilidades com HTML, CSS e JavaScript.

---

## 🧩 Funcionalidades

- ✅ Listagem de produtos (com imagem, marca, preço e unidade)
- ✅ Botão "Comprar" para adicionar ao carrinho
- ✅ Carrinho com listagem dinâmica dos produtos adicionados
- ✅ Possibilidade de:
  - Adicionar múltiplos itens iguais
  - Remover itens individualmente
  - Esvaziar o carrinho
- ✅ Página de confirmação da compra com:
  - Produtos comprados
  - Valor unitário
  - Total por produto
  - Valor total da compra

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- [JSON Server](https://www.npmjs.com/package/json-server) para simular API REST
- Visual Studio Code (como ambiente de desenvolvimento)
- Live Server (para rodar localmente)

---

## 📦 Como Executar o Projeto

1. Clone o repositório:

   git clone https://github.com/OtavioGrassi/Teste-Front-Tgid.git

2. Instale o JSON Server (caso ainda não tenha):

   npm install -g json-server
   
3. Rode o servidor com o JSON:
   json-server --watch dbTeste.json

   O servidor irá rodar em http://localhost:3000/produtos por padrão.

⚠️ Se o endpoint gerado for diferente, copie a nova URL e substitua no arquivo scripts.js na chamada do fetch.

4. Abra o projeto com Live Server ou outro servidor local:
   Acesse o arquivo produtos.html no navegador usando o Live Server.
   
 
