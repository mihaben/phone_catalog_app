var express = require('express');
var app = express();

// Use the /public directory to show static files
app.use(express.static('public'));

// Allow cross origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/phones', function (req, res) {

  // Static folder
  const BASE_IMAGES = `${req.protocol}://${req.get('Host')}/images`;

  // Mock data
  const phones = [
    {
      id: 1,
      model: 'Iphone X',
      price: 1329,
      description: ['iOS 11', '256GB disco duro', '5.8" de pantalla', 'Cámara dual de 12MP'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/iphonex_black.png`
        }
      ]
    },
    {
      id: 2,
      model: 'Samsung S8+',
      price: 849,
      description: ['SO Android', '64GB de disco duro', '6.2" de pantalla', 'Cobertura 5G'],
      versions: [
        {
          selected: true,
          color: 'gray',
          image: `${BASE_IMAGES}/galaxys8_gray.png`
        }
      ]
    },
    {
      id: 3,
      model: 'Huawei Mate 10',
      price: 699,
      description: ['SO Android 8', '64GB de disco duro', '5.9" de pantalla', 'Cámara de 20MP + 12px'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/huawei_black.png`
        },
        {
          selected: false,
          color: 'moka',
          image: `${BASE_IMAGES}/huawei_moka.png`
        }
      ]
    },
    {
      id: 4,
      model: 'Iphone 8',
      price: 779,
      description: ['iOS 11', '64GB disco duro', '4.7" de pantalla', 'Cámara de 12MP'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/iphone8_black.png`
        },
        {
          selected: false,
          color: 'white',
          image: `${BASE_IMAGES}/iphone8_white.png`
        }
      ]
    },
    {
      id: 5,
      model: 'Huawei P10',
      price: 449,
      description: ['SO Android', '64GB de disco duro', 'Cobertura 4G+', '4GB memoria RAM'],
      versions: [
        {
          selected: false,
          color: 'black',
          image: `${BASE_IMAGES}/huaweip10_black.png`
        },
        {
          selected: true,
          color: 'white',
          image: `${BASE_IMAGES}/huaweip10_white.png`
        }
      ]
    },
    {
      id: 6,
      model: 'Samsung Galaxy Note 8',
      price: 999,
      description: ['SO Android 7.1', '64GB de disco duro', '6.3" de pantalla', 'Cámara dual de 12MP'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/samsungnote8_black.png`
        }
      ]
    }
  ]

  // We apply a setTimeout to see the spinner in the front
  setTimeout(() => {
    res.json(phones);
  }, 3000);
  
});

app.listen(3000, function () {
  console.log('Backend test listening on port 3000!');
});