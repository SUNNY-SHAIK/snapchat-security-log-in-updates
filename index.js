const express= require("express")
const app= express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port= 4000
const studentDetails={name:"sunny ",age:19,gender:"male"}
const produtsDetails=require("./product")
const mongoose=require("mongoose")


app.use(cors())
app.use(bodyparser.urlencoded({
	extended:true
}))

app.use(bodyparser.json())
mongoose.connect("mongodb+srv://sunnyshaik637:sunnyshaik@cluster0.kmcdjnu.mongodb.net/?retryWrites=true&w=majority")
	.then(()=>{
		console.log("database connected successfully")
	})
	app.post("/add",(req,res)=>{
		console.log(req.body)
		
		})
		

	app.get("/users",(req,res)=>{
		return Content.find()
				.then((values)=>res.json(values))
	})

app.get("/",(req,res)=>{
	res.send("it is")
})


app.get("/student",(req,res)=>{
	res.json(studentDetails)
})

app.get("/products",(req,res)=>{ 
	res.json(produtsDetails)
})




app.listen(port,()=>console.log("started"))
	