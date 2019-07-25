global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const HelloRequest = require("./helloworld/helloworld_pb").HelloRequest;
const GreeterClient = require("./helloworld/helloworld_grpc_web_pb").GreeterClient;

const request = new HelloRequest();
request.setName("test");

const client = new GreeterClient("http://localhost:8080", {}, {});
var start = new Date()
client.sayHello(request, {}, (err, ret) => {
  if (err || ret === null) {
    throw err;
  }
  console.info('Execution time: %dms', new Date() - start)
});
