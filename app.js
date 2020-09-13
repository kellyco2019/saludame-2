const express = require('express');
const app = express();

function capitalize (string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/makers/:name', (req, res) => {
    const { name } = req.params;
      let template = " Hola ";

      template += capitalize (name) + "!";

      res.send(`<h1> ${template}</h1>`);
  });
  

app.listen(3000, () => console.log('Listening on port 3000!'));
