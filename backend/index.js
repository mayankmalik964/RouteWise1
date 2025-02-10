const app=require('./app');
const config=require('./config/config');
const port=config.port;
const URL_DB=config.URL_DB;
const mongoose=require('mongoose');
mongoose.connect(URL_DB).then(()=>{
    console.log('Connected to database');
}).catch((error)=>{
    console.log('Error connecting to database',error);
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

