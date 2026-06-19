import express from 'express';
import bcrypt from 'bcrypt';
import crypto from "crypto";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/registro', async (req, res) => {

   const { password } = req.body;

   const hash = await bcrypt.hash(password, 10);

   res.json({
       passwordOriginal: password,
       hash
   });

});

app.post('/login', async (req, res) => {

   const hashGuardado =
   '$2b$10$FLQzIKwZ89CAnR21qtfUJu7gpdBpapnfSpQgocaxjMkRJj1oNn3q6';

   const valido = await bcrypt.compare(
       req.body.password,
       hashGuardado
   );

   res.json({ valido });

});


app.listen(3000);
