const express = require('express');
const app = express();

function capitalize(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/makers/:nombre', (req, res) => {
    const {nombre} = req.params;
      let template = "Hola ";

      template += capitalize (nombre) + "!";

      res.send(`<h1>${template}</h1>`);
  });
  

app.listen(3000, () => console.log('Listening on port 3000!'));
