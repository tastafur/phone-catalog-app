const express = require('express');
const rp = require('request-promise');

const app = express();

app.get('/phones', (req, res) => {
  Promise.all([
    rp({
      method: 'POST',
      uri: 'https://fonoapi.freshpixl.com/v1/getdevice?token=3fc5d3ffa63b685e24ad1f9c4d272ee893b3edbbc62651da&device=Samsung Galaxy S7'
    }),
    rp({
      method: 'POST',
      uri: 'https://fonoapi.freshpixl.com/v1/getdevice?token=3fc5d3ffa63b685e24ad1f9c4d272ee893b3edbbc62651da&device=Apple Iphone 7'
    })
  ])
  .then( (repos) =>
    res.send(
      repos
        .map((mobs) => JSON.parse(mobs))
        .map((mobs) => mobs.filter(mob => mob.DeviceName === 'Samsung Galaxy S7' || mob.DeviceName === 'Apple iPhone 7'))))

  .catch((err) =>
    res.status(500, {
      error: err
    })
  );
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
