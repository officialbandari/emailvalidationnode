const mongoose = require('mongoose');


mongoose
.connect("mongodb://localhost:27017/people",
{
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlParser:true, 
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>{
    console.log('mongodb connected successfully...')
})
.catch((e)=>{
    console.log(e)
})

