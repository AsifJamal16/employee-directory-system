const http=require('http');
const app=require('./app');
const port=3003;
const server=http.createServer(app);
function reqLis(){
  console.log(`server is running at the address http://localhost:${port}`);
}
server.listen(port,reqLis);