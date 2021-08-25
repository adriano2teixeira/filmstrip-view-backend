const http = require("http")
const api = require("./app")

const server = http.createServer(api)
const PORT = process.env.PORT | 3001

server.listen(PORT, () => console.log(`Server Listeing to http://localhost:3001`))