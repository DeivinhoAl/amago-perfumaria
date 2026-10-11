# Âmago · Perfumaria de presença

Protótipo de loja de perfumes feito em **HTML, CSS e JavaScript**, sem framework ou dependências de instalação. Identidade visual em vinho e tons claros, navegação inspirada na estrutura de e-commerce da referência Zayara e direção editorial própria.

## Executar

Requer Node.js 20 ou superior.

```sh
npm start
```

Abra `http://localhost:4175`. Para conferir JavaScript, caminhos locais e cadastro dos produtos:

```sh
npm run check
```

O conteúdo estático completo está em `dist/` e pode ser servido por qualquer servidor HTTP. Os arquivos JavaScript usam módulos, portanto abra pelo servidor em vez de clicar diretamente no HTML.

## Páginas e recursos

- `dist/index.html`: loja, banners alternáveis, busca por perfume/marca/notas, filtros, ordenação, favoritos, detalhes do produto, seleção de volume e guia de fragrâncias.
- `dist/carrinho.html`: carrinho dedicado, quantidades, remoção, cupom `PRIMEIRO10`, simulação de entrega por CEP, checkout e confirmação de pedido.
- `dist/admin.html`: cadastro, edição e remoção de produtos, imagens, preços, estoque e consulta de pedidos de teste.
- Animações de entrada ao rolar, transições do carrossel, navegação por teclado e adaptação para celular. A preferência por movimento reduzido é respeitada.

## Escopo da demonstração

Os perfumes do catálogo são reais. Os preços, estoques, descontos, fretes e pedidos são **ilustrativos**. O estoque é compartilhado entre os volumes do mesmo perfume nesta versão.

Não existe integração com pagamentos, transportadoras, e-mail, contas de clientes ou redes sociais. Não há cobrança, envio de mensagens nem entrega de produtos. Os canais sociais são identificados como demonstração.

O painel de gestão **não possui autenticação**. Produtos, carrinho, favoritos e pedidos ficam no `localStorage` do navegador. Use dados fictícios no checkout. Este projeto não é um backend de e-commerce pronto para produção.

## Estrutura

```text
dist/
  index.html          Loja
  carrinho.html       Carrinho e checkout
  admin.html          Gestão demonstrativa
  styles.css          Identidade, componentes e responsividade
  admin.css           Layout da gestão
  app.js              Catálogo, busca, favoritos e guia
  carousel.js         Carrossel acessível
  cart-page.js        Carrinho, checkout e pedidos
  admin.js            Gestão de produtos e estoque
  data.js             Catálogo e armazenamento local
  assets/             Imagens locais otimizadas
server.mjs            Servidor local sem dependências
scripts/check.mjs     Verificações estáticas
```

## Próxima etapa: WordPress

A interface pode ser adaptada para um tema WordPress com WooCommerce. Nessa etapa, os dados locais devem ser substituídos pelo catálogo e pelos endpoints do WooCommerce; autenticação, frete, pagamento, estoque por variação e políticas da loja precisam de integrações reais e validação no servidor. A adaptação ainda não faz parte deste repositório.

## Imagens e referências

Imagens de produtos e campanhas pertencem às respectivas marcas. Consulte `ASSETS.md` para fontes e créditos. O uso aqui é de apresentação de um protótipo; a publicação comercial requer conferir os direitos de uso dos materiais.
