/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  MntrRequest,
  Mntrs} from './helloworld_pb';

export class MntrAppClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    Mntrs,
    (request: MntrRequest) => {
      return request.serializeBinary();
    },
    Mntrs.deserializeBinary
  );

  get(
    request: MntrRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Mntrs) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/helloworld.MntrApp/Get',
      request,
      metadata || {},
      this.methodInfoGet,
      callback);
  }

}

