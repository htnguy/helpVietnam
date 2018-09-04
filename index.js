var express = require("express"),
	app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/public"));

app.get("/", function(req,res){
	 res.render("index/index");
});
app.get("/about", function(req,res){
	res.render("index/about");
});
app.get("/contact", function(req,res){
	res.render("index/contact");
});
app.get("/founder", function(req,res){
	res.render("index/founder");
})

app.get("/learnmore", function(req,res){
	res.render("index/learnmore");
});


app.listen(process.env.PORT|| 3000);