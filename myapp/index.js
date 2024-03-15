/*create a directory to hold your application, and make that working directory.
	1. Use the npm init command to create a package.json file
		you can simply hit RETURN to accept the defaults.
		
			Example package.json file
	{
		"name": "myapp",
		"version": "1.0.0",
		"description": "",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"author": "",
		"license": "ISC",
		"dependencies": {
			"express": "^4.18.3"
		}
	}
		
	2. Run npm install express
	3. Run the app with node index.js
	
	Displays "Example app listening on port 3000" when endpoint is hit
	
	`these quotes are necessary for interpolation`

*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`)
})