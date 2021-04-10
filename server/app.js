const express = require("express");
const app = express();
const router = require('./router/router.js')
require('./model/model.people.js')
require('./model/model.schema.js')

const PORT = process.env.PORT ||3000;


app.use(express.json());


app.use('/people',router)




app.listen(PORT, () =>{
    console.log(`The server is running on: localhost:${PORT}`);
})


