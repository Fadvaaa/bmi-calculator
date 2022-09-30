const express=require('express')
const app=express()

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('welcome......')
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/static/index.html')
})

app.post('/home',(req,res)=>{
 let hgt =parseFloat(req.body.hgt)
 hgt/=100
 let wgt =parseFloat(req.body.wgt)
    let bmi =(wgt)/((hgt)*(hgt))
    console.log(wgt)
    console.log(hgt)
     console.log(bmi)
    if(bmi<18.6){
        res.send('Under Weight!')
    }else if(bmi >=18.6 && bmi<24.9){
        res.send('<p style="color:yellow">Normal Weight!</P>')
    }else{
        res.send('<p style="color:Red">Over Weight!</p>')
    }
  

})
app.listen(7070,(req,res)=>{
    console.log('your app runs on port 7070')
})
