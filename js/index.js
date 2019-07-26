global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const MntrRequest = require("./helloworld/helloworld_pb").MntrRequest;
const MntrAppClient = require("./helloworld/helloworld_grpc_web_pb").MntrAppClient;

const request = new MntrRequest();
// request.setName("test");

const client = new MntrAppClient("http://localhost:8080", {}, {});
var start = new Date()
client.get(request, {}, (err, ret) => {
  if (err || ret === null) {
    throw err;
  }
  console.info(new Date() - start)
});
