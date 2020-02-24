# :robot: Amcom Challenge - Teste de seleção Mobile Developer

<p align="center">
  <img style="max-width:70%; height: 130px;" src="https://www.amcom.com.br/wp-content/uploads/2019/11/amcom-logotipo-topo-site.png">
</p>

## Desafio

Desenvolver um aplicativo para um E-commerce.

## Features

- Dependências mais recentes e atualizadas

## :heavy_check_mark: Itens do desafio cumpridos

#### 1. Tela de Listagem de Produtos

- [x] Será possível ver os produtos da loja
- Campo que aparecerão em cada item

  - [x] Imagem do principal produto
  - [x] Nome do Produto
  - [x] Preço do Produto
  - [x] Desconto (se houver)
  - [x] Média das avaliações de quem consumiu
  - [x] Botão de Compra (redireciona para o carrinho de compra)
  - [x] Botão de Adicionar ao Carrinho de Compras
  - [x] Se já tiver no carrinho de compras terá o botão de remover do
        carrinho

- [ ] Haverá um filtro por nome do produto
- [ ] Haverá ordenação por preço
- [ ] Haverá paginação dos produtos (usuário verá no máximo 10 produtos em
      cada página)
- [x] Disponha os componentes de maneira que melhore a experiência do
      usuário
- [x] Ao selecionar um produto o usuário irá para tela de detalhes do Produto

#### 2. Tela de Detalhe do Pedido

- O usuário irá ver

  - [ ] Imagem do principal produto
  - [ ] Outra imagens do produto
  - [ ] Nome do Produto
  - [ ] Descrição do Produto
  - [ ] Preço do Produto
  - [ ] Desconto (se houver)
  - [ ] Média das avaliações de quem consumiu
  - [ ] Botão de Compra (redireciona para o carrinho de compra)
  - [ ] Botão de Adicionar ao Carrinho de Compras
  - [ ] Se já tiver no carrinho de compras terá o botão de remover do
        carrinho
  - [ ] Verá os comentários sobre aquele produto de outros usuários

#### 3. Tela de Carrinho de Compra

- [x] O usuário verá todos os itens do adicionados ao carrinho de compras
- Cada item terá

  - [x] Imagem do principal produto
  - [x] Nome do Produto
  - [x] Preço do Produto
  - [x] Desconto (se houver)
  - [x] Média das avaliações de quem consumiu
  - [x] Botão para remover do carrinho

- [x] Haverá no footer um somatório do total para pagar (considerando os
      descontos de cada produto)

## Outras melhorias

- [x] Linguagem de programação: Javascript usando React Native
- [x] Versões mais atualizadas
- [x] Instruções detalhadas de Readme

## Instalação

Clone este repositório, e na pasta raiz execute o comando abaixo para baixar as dependências

```
yarn
```

ou

```
npm install
```

## Iniciar API (Caso habilitado)

Basta rodar o script abaixo para habilitar o serviço básico de REST.

```
json-server db.json
```

Do contrario, o arquivo database.js já provê de modo facilitado a lista de produtos

## Teste

O aplicativo foi desenvolvido com foco no Android, sendo assim conecte um celular no seu computador, ou use um simulador de Android, em seguida rode o comando abaixo:

```bash
react-native run-android
```

Para instruções de como preparar seu ambiente de testes, segui o link abaixo:
[Configuração de Ambiente](https://facebook.github.io/react-native/docs/getting-started)

## Passos

Você também pode conferir todo o passo a passo de desenvolvimento no link a seguir.
[Passo a Passo](https://github.com/leandrochavesf/crawler-challenge/blob/master/STEPS.md)

ou mesmo conferir alguns insights e problemas durante o desenvolvimento.
[Problemas](https://github.com/leandrochavesf/crawler-challenge/blob/master/TIPS.md)
