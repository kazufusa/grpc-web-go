import axios from 'axios';
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
            <button onClick={this.onClick}>MessagePack</button>{this.state.messagepackTime}
          </div>
          <div className="span4 text-left">
            <button onClick={this.onClick}>JSON</button>{this.state.jsonTime}
          </div>
        </div>
      </div>
    );
  }

  private onGRPC = () => {
    const request = new MntrRequest();
    // request.setName(this.state.inputText);

    const client = new MntrAppClient("http://192.168.11.30:8080/grpc", {}, {});

    const start = new Date()
    client.get(request, {}, (err, ret) => {
      if (err || ret === null) {
        throw err;
      }
      console.log(ret.getMntrList().length)
      this.setState({ grpcTime: String(new Date().getTime() - start.getTime()) });
    });
  };

  private onClick = () => {this.setState({})}

  private onProtobuf = () => {
    const start = new Date()
    axios.get("http://192.168.11.30:8080/protobuf")
    .then((resp) => {
      const mntrs = Mntrs.deserializeBinary(resp.data)
      console.log(mntrs.getMntrList().length)
      this.setState({ protobufTime: String(new Date().getTime() - start.getTime()) });
    })
  }

}

export default App;
