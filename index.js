const express = require ('express');
const app = express();
const multer = require ('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname+Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage}) 


app.set('view engine', 'ejs');

app.get ('/', (req,res)=>{
    res.render('index');
})

app.get ('/uploads', (req,res)=>{
    res.render(file.filename);
})

app.post('/upload',upload.single('file'), (req, res)=>{
    res.send('Arquivo recebido')
})

app.listen(8080,()=>{
    console.log('Server ok');
})