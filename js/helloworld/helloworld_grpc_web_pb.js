/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.helloworld = require('./helloworld_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.MntrAppClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.MntrAppPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.MntrRequest,
 *   !proto.helloworld.Mntrs>}
 */
const methodDescriptor_MntrApp_Get = new grpc.web.MethodDescriptor(
  '/helloworld.MntrApp/Get',
  grpc.web.MethodType.UNARY,
  proto.helloworld.MntrRequest,
  proto.helloworld.Mntrs,
  /** @param {!proto.helloworld.MntrRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.Mntrs.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.MntrRequest,
 *   !proto.helloworld.Mntrs>}
 */
const methodInfo_MntrApp_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.Mntrs,
  /** @param {!proto.helloworld.MntrRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.Mntrs.deserializeBinary
);


/**
 * @param {!proto.helloworld.MntrRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.helloworld.Mntrs)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.Mntrs>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.MntrAppClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.MntrApp/Get',
      request,
      metadata || {},
      methodDescriptor_MntrApp_Get,
      callback);
};


/**
 * @param {!proto.helloworld.MntrRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.Mntrs>}
 *     A native promise that resolves to the response
 */
proto.helloworld.MntrAppPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.MntrApp/Get',
      request,
      metadata || {},
      methodDescriptor_MntrApp_Get);
};


module.exports = proto.helloworld;

