var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/phones', function (req, res) {

  const BASE_IMAGES = `${req.protocol}://${req.get('Host')}/images`;

  const phones = [
    {
      id: 1,
      model: 'Iphone X',
      price: 999,
      description: ['potente', 'versatil', '64gb disco duro'],
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
      model: 'Samsung S8',
      price: 800,
      description: ['potente', 'versatil', '64gb disco duro'],
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
      model: 'Huawei Mate',
      price: 800,
      description: ['potente', 'versatil', '64gb disco duro'],
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
      price: 800,
      description: ['potente', 'versatil', '64gb disco duro'],
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
      price: 800,
      description: ['potente', 'versatil', '64gb disco duro'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/huawei_black.png`
        },
        {
          selected: false,
          color: 'white',
          image: `${BASE_IMAGES}/huawei_white.png`
        }
      ]
    },
    {
      id: 6,
      model: 'Samsung Galaxy Note 8',
      price: 800,
      description: ['potente', 'versatil', '64gb disco duro'],
      versions: [
        {
          selected: true,
          color: 'black',
          image: `${BASE_IMAGES}/samsungnote8_black.png`
        }
      ]
    }
  ]

  res.json(phones);

});

app.listen(3000, function () {
  console.log('Backend test listening on port 3000!');
});