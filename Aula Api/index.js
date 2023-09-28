import 'dotenv/config';
import express, { request, response } from "express";
import cors from 'cors';

const servidor = express();
servidor.use(express.json());

servidor.get('/somar/:n1/:n2', (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);

  let r = n1 + n2;

  resp.send({
    soma: r
  });

})

servidor.get('/subtrair', (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let r = n1 - n2;

  resp.send({
    subtracao: r
  })
})

servidor.get('/multiplicar', (req, resp) => {
  let n1 = req.body.n1;
  let n2 = req.body.n2;

  let r = n1 * n2;

  resp.send({
    multiplicacao: r
  })

})

servidor.get('/dividir', (request, response) => {
    let n1 = Number(request.query.n1)
    let n2 = Number(request.query.n2)

    if (n2 != 0) {
        response.send({
            "resposta": n1/n2
        })
    }
    else{
        response.send({
            "resposta": "Não é possível dividir por 0"
        })
    }
    
})

servidor.get('/retangulo/area', (request, response) => {
    let base = Number(request.query.base)
    let altura = Number(request.query.altura)

    response.send({
        "área": base*altura
    })
})

servidor.get('/retangulo/perimetro', (request, response) => {
    let base = Number(request.query.base)
    let altura = Number(request.query.altura)

    response.send({
        "perimetro":2*base + 2*altura
    })
    

})




servidor.listen(process.env.PORT, () => console.log(`API subiu na porta ${process.env.PORT}!`));