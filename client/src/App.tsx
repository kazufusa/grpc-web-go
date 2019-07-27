import { decode } from "@msgpack/msgpack";
import axios from 'axios';
// import { decode } from "msgpack-lite";
import * as React from "react";

import "./App.css";
import { MntrRequest, Mntrs } from "./helloworld/helloworld_pb";
import { MntrAppClient } from "./helloworld/HelloworldServiceClientPb";

const initialState = {
  grpcTime: "",
  jsonTime: "",
  messagepackTime: "",
  protobufTime: "",
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {
  public readonly state: State = initialState;

  public render() {
    return (
      <div className="App">
        <div className="row-fluid">
          <div className="span4 text-left">
            <button onClick={this.onGRPC}>gRPC</button>{this.state.grpcTime}
          </div>
          <div className="span4 text-left">
            <button onClick={this.onProtobuf}>protobuf</button>{this.state.protobufTime}
          </div>
          <div className="span4 text-left">
            <button onClick={this.onMessagepack}>MessagePack</button>{this.state.messagepackTime}
          </div>
          <div className="span4 text-left">
            <button onClick={this.onJson}>JSON</button>{this.state.jsonTime}
          </div>
        </div>
      </div>
    );
  }

  private onGRPC = () => {
    const request = new MntrRequest();
    // request.setName(this.state.inputText);

    const client = new MntrAppClient("http://10.0.1.8:8080/grpc", {}, {});

    const start = new Date()
    client.get(request, {}, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      console.log(ret.getMntrList().length)
      this.setState({ grpcTime: String(new Date().getTime() - start.getTime()) });
    });
  };

  private onJson = () => {
    const start = new Date()
    axios({
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'get',
      'url': "http://10.0.1.8:8080/json",
    }).then((resp) => {
      this.setState({ jsonTime: String(new Date().getTime() - start.getTime()) });
      console.log(resp.data.length)
      console.log(resp.data[0])
    })
  }

  private onProtobuf = () => {
    const start = new Date()
    axios({
      'headers': {
        'Content-Type': 'application/x-protobuf'
      },
      'method': 'get',
      'responseType': 'arraybuffer',
      'url': "http://10.0.1.8:8080/protobuf",
    }).then((resp) => {
      const mntrs = Mntrs.deserializeBinary(resp.data)
      this.setState({ protobufTime: String(new Date().getTime() - start.getTime()) });
      console.log(mntrs.getMntrList().length)
    })
  }

  private onMessagepack = () => {
    const start = new Date()
    axios({
      'headers': {
        'Content-Type': 'application/x-msgpack'
      },
      'method': 'get',
      'responseType': 'arraybuffer',
      "url": "http://10.0.1.8:8080/messagepack",
    }).then((resp) => {
      const mntrs: any = decode(resp.data)
      this.setState({ messagepackTime: String(new Date().getTime() - start.getTime()) });
      console.log(mntrs.length)
    })
  }

}

export default App;
