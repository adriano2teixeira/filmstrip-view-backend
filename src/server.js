const http = require("http")
const api = require("./app")

const server = http.createServer(api)
const PORT = process.env.PORT | 3001

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
