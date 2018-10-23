// const images = require('../assets')


// const imagesFiles= ["BTCUSDT.png", "EOSUSDT.png", "ETHUSDT.png", "BNBUSDT.png", "ONTUSDT.png", "BCCUSDT.png", "ADAUSDT.png", "XRPUSDT.png", "TUSDUSDT.png", "TRXUSDT.png", "LTCUSDT.png", "IOTAUSDT.png", "ICXUSDT.png", "NEOUSDT.png", "VENUSDT.png", "XLMUSDT.png", "QTUMUSDT.png"]

document.addEventListener('DOMContentLoaded', () => {
 const cryptoList = document.getElementById("stock-list")
 fetch('http://localhost:3000/api/v1/stocks')
 .then(res => res.json())
 .then(response => createCryptoListingFromJSON(response))

 const createCryptoListingFromJSON = (jsonList) =>{
   jsonList.forEach((cryptoObj) => {
     const cryptoElement = createHTMLForCryptoObj(cryptoObj)
     cryptoList.appendChild(cryptoElement)
   })
 }

 const createHTMLForCryptoObj = (cryptoObj) => {
   const li = document.createElement('li')
   const div = document.createElement('div')
   const h1 = document.createElement('h1')
   const h2 = document.createElement('h2')
   const img = document.createElement('img')
   const symbol = cryptoObj.symbol

   // img.src = '../assets/BCCUSDT.png'

   h1.innerText = symbol
   h2.innterText = cryptoObj.askPrice

   div.appendChild(h1)
   div.appendChild(h2)
   div.appendChild(img)
   li.appendChild(div)
   return li
 }
})

``
const images = [
{ id: 1, img_url: "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"},
{ id: 2, img_url: "https://steemitimages.com/DQmeY3HLRU3Q2dhKgdqcuj52sbw7wdQdBvzzCjP2s2izNdU/2017-05-11%20(2).png"
},
{ id: 3, img_url: "https://seeklogo.com/images/E/ethereum-logo-1C9A722BB1-seeklogo.com.png"
},
{ id: 4, img_url: "https://www.worldcryptoindex.com/wp-content/uploads/2018/01/binance-coin-logo.png"},
{ id: 5, img_url: "https://cdn-images-1.medium.com/max/300/0*KXDXDENuBK8Lzd9b.jpg"},
{ id: 6, img_url: "https://cryptonewsmagnet.com/wp-content/uploads/2018/02/what-is-bitcoin-cash1.png"},
{ id: 7, img_url: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/r3NpKei5gizy8iatz/videoblocks-cardano-symbol-ada-blockchain-cryptocurrency-animation-digital-currency-cardano-a-logo-with-an-abstract-dots_rnqm5nt8g_thumbnail-full01.png"
},{ id: 8, img_url: "https://ripple.com/wp-content/themes/ripple-beta/assets/img/styleguide/logo1@2x.png"},
{ id: 9, img_url: "https://cdn-images-1.medium.com/max/300/0*T-eeRKZq2TzhSX68.png"},
{ id: 10, img_url: "https://res.cloudinary.com/teepublic/image/private/s---PER8YxZ--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1514908004/production/designs/2247231_1.jpg"},
{ id: 11, img_url: "https://i.imgur.com/N8cDobt_d.jpg?maxwidt: 800&shap: thumb&fidelit: high"},
{ id: 12, img_url: "https://i.imgur.com/wZIJe9n.jpg"},
{ id: 13, img_url: "https://cdn5.vectorstock.com/i/1000x1000/45/09/iota-coin-symbol-logo-vector-19194509.jpg"},
{ id: 14, img_url: "https://cryptoslate.com/wp-content/themes/cryptoslate-2017/imgresize/timthumb.php?sr: https://cryptoslate.com/wp-content/uploads/2018/01/icon-intro-cover.jpg&: 824&: 298&: 75"},
{ id: 15, img_url: "https://upload.wikimedia.org/wikipedia/commons/0/07/NEO_%28cryptocurrency%29_logo.svg"},
{ id: 16, img_url: "https://d3npzzrehyahmo.cloudfront.net/images/b2/1f/b21f386ca8d0139fd901d45f76adf3a0_90697ca1033_t.png"},
{ id: 17, img_url: "https://www.stellar.org/wp-content/themes/stellar/images/stellar-rocket-300.png"
},
{ id: 18, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qtum_logo.svg/1135px-Qtum_logo.svg.png"
}]

const compareImages = (images) => {
  images.forEach((image) => {if (image.id === stock.id //stock["id"]/
 ) {
    console.log(image.url)
    
    }
  })
}




document.addEventListener('DOMContentLoaded', () => {
 const cryptoList = document.getElementById("crypto-list")
debugger
 fetch('https://api.iextrading.com/1.0/stock/market/crypto')
 .then(res => res.json())
 .then(response => createCryptoListingFromJSON(response))

 const createCryptoListingFromJSON = (jsonList) =>{
   jsonList.forEach((cryptoObj) => {
     const cryptoElement = createHTMLForCryptoObj(cryptoObj)
     cryptoList.appendChild(cryptoElement)
   })
 }
debugger
 const createHTMLForCryptoObj = (cryptoObj) => {
   const li = document.createElement('li')
   const div = document.createElement('div')
   const h1 = document.createElement('h1')
   const h2 = document.createElement('h2')
   const img = document.createElement('img')
   const symbol = cryptoObj.symbol

   // img.src = '../assets/BCCUSDT.png'

   h1.innerText = symbol
   h2.innterText = cryptoObj.askPrice

   div.appendChild(h1)
   div.appendChild(h2)
   div.appendChild(img)
   li.appendChild(div)
   return li
 }
