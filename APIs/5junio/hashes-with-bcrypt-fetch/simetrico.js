import express from 'express';
import crypto from 'crypto';

const app = express();

app.use(express.json());

const clave = crypto.randomBytes(32);

app.post('/cifrar', (req, res) => {

   const iv = crypto.randomBytes(16);

   const cipher =
       crypto.createCipheriv(
           'aes-256-cbc',
           clave,
           iv
       );

   let cifrado =
       cipher.update(req.body.texto,
       'utf8',
       'hex');

   cifrado += cipher.final('hex');

   res.json({
       iv: iv.toString('hex'),
       cifrado
   });

});

app.listen(3000);


