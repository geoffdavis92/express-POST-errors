const hbs = require("hbs");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.engine('html',hbs.__express)
server.set("view engine", "html");

server.use(bodyParser.json());

console.log('listening on 4004')
server.listen(4004);

server.get('/', (req,res) => {
	res.send(`<!DOCTYPE html>
	<head>
		<title>Express Errors</title>
	</head>
	<body>
		<h1>Express POST Errors</h1>
	</body>
`)
})

server.post('/postendpoint', (req,res) => {
	console.log(req.body)
	res.end()
})