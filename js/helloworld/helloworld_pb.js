// source: helloworld.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var timestamp_pb = require('./timestamp_pb.js');
goog.object.extend(proto, timestamp_pb);
goog.exportSymbol('proto.helloworld.Mntr', null, global);
goog.exportSymbol('proto.helloworld.MntrRequest', null, global);
goog.exportSymbol('proto.helloworld.Mntrs', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.helloworld.MntrRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.helloworld.MntrRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.helloworld.MntrRequest.displayName = 'proto.helloworld.MntrRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.helloworld.Mntrs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.helloworld.Mntrs.repeatedFields_, null);
};
goog.inherits(proto.helloworld.Mntrs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.helloworld.Mntrs.displayName = 'proto.helloworld.Mntrs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.helloworld.Mntr = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.helloworld.Mntr, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.helloworld.Mntr.displayName = 'proto.helloworld.Mntr';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.helloworld.MntrRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.helloworld.MntrRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.helloworld.MntrRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.MntrRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.helloworld.MntrRequest}
 */
proto.helloworld.MntrRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.helloworld.MntrRequest;
  return proto.helloworld.MntrRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.helloworld.MntrRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.helloworld.MntrRequest}
 */
proto.helloworld.MntrRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.helloworld.MntrRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.helloworld.MntrRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.helloworld.MntrRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.MntrRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.helloworld.Mntrs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.helloworld.Mntrs.prototype.toObject = function(opt_includeInstance) {
  return proto.helloworld.Mntrs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.helloworld.Mntrs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.Mntrs.toObject = function(includeInstance, msg) {
  var f, obj = {
    mntrList: jspb.Message.toObjectList(msg.getMntrList(),
    proto.helloworld.Mntr.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.helloworld.Mntrs}
 */
proto.helloworld.Mntrs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.helloworld.Mntrs;
  return proto.helloworld.Mntrs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.helloworld.Mntrs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.helloworld.Mntrs}
 */
proto.helloworld.Mntrs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.helloworld.Mntr;
      reader.readMessage(value,proto.helloworld.Mntr.deserializeBinaryFromReader);
      msg.addMntr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.helloworld.Mntrs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.helloworld.Mntrs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.helloworld.Mntrs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.Mntrs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMntrList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.helloworld.Mntr.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Mntr mntr = 1;
 * @return {!Array<!proto.helloworld.Mntr>}
 */
proto.helloworld.Mntrs.prototype.getMntrList = function() {
  return /** @type{!Array<!proto.helloworld.Mntr>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.helloworld.Mntr, 1));
};


/** @param {!Array<!proto.helloworld.Mntr>} value */
proto.helloworld.Mntrs.prototype.setMntrList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.helloworld.Mntr=} opt_value
 * @param {number=} opt_index
 * @return {!proto.helloworld.Mntr}
 */
proto.helloworld.Mntrs.prototype.addMntr = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.helloworld.Mntr, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.helloworld.Mntrs.prototype.clearMntrList = function() {
  this.setMntrList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.helloworld.Mntr.prototype.toObject = function(opt_includeInstance) {
  return proto.helloworld.Mntr.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.helloworld.Mntr} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.Mntr.toObject = function(includeInstance, msg) {
  var f, obj = {
    measuredAt: (f = msg.getMeasuredAt()) && timestamp_pb.Timestamp.toObject(includeInstance, f),
    v1: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    v2: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    v3: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    v4: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    v5: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    v6: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    v7: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    v8: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    v9: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    v10: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    v11: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    v12: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    v13: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    v14: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    v15: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    v16: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    v17: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    v18: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    v19: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    v20: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    v21: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    v22: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    v23: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
    v24: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
    v25: jspb.Message.getFloatingPointFieldWithDefault(msg, 26, 0.0),
    v26: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
    v27: jspb.Message.getFloatingPointFieldWithDefault(msg, 28, 0.0),
    v28: jspb.Message.getFloatingPointFieldWithDefault(msg, 29, 0.0),
    v29: jspb.Message.getFloatingPointFieldWithDefault(msg, 30, 0.0),
    v30: jspb.Message.getFloatingPointFieldWithDefault(msg, 31, 0.0),
    v31: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
    v32: jspb.Message.getFloatingPointFieldWithDefault(msg, 33, 0.0),
    v33: jspb.Message.getFloatingPointFieldWithDefault(msg, 34, 0.0),
    v34: jspb.Message.getFloatingPointFieldWithDefault(msg, 35, 0.0),
    v35: jspb.Message.getFloatingPointFieldWithDefault(msg, 36, 0.0),
    v36: jspb.Message.getFloatingPointFieldWithDefault(msg, 37, 0.0),
    v37: jspb.Message.getFloatingPointFieldWithDefault(msg, 38, 0.0),
    v38: jspb.Message.getFloatingPointFieldWithDefault(msg, 39, 0.0),
    v39: jspb.Message.getFloatingPointFieldWithDefault(msg, 40, 0.0),
    v40: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.helloworld.Mntr}
 */
proto.helloworld.Mntr.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.helloworld.Mntr;
  return proto.helloworld.Mntr.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.helloworld.Mntr} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.helloworld.Mntr}
 */
proto.helloworld.Mntr.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new timestamp_pb.Timestamp;
      reader.readMessage(value,timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMeasuredAt(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV3(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV4(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV5(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV6(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV7(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV8(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV9(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV10(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV11(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV12(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV13(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV14(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV15(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV16(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV17(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV18(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV19(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV20(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV21(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV22(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV23(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV24(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV25(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV26(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV27(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV28(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV29(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV30(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV31(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV32(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV33(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV34(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV35(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV36(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV37(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV38(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV39(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setV40(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.helloworld.Mntr.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.helloworld.Mntr.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.helloworld.Mntr} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.helloworld.Mntr.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeasuredAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getV1();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getV2();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getV3();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getV4();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getV5();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getV6();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getV7();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getV8();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getV9();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getV10();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getV11();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getV12();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getV13();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getV14();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getV15();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getV16();
  if (f !== 0.0) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = message.getV17();
  if (f !== 0.0) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = message.getV18();
  if (f !== 0.0) {
    writer.writeFloat(
      19,
      f
    );
  }
  f = message.getV19();
  if (f !== 0.0) {
    writer.writeFloat(
      20,
      f
    );
  }
  f = message.getV20();
  if (f !== 0.0) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = message.getV21();
  if (f !== 0.0) {
    writer.writeFloat(
      22,
      f
    );
  }
  f = message.getV22();
  if (f !== 0.0) {
    writer.writeFloat(
      23,
      f
    );
  }
  f = message.getV23();
  if (f !== 0.0) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = message.getV24();
  if (f !== 0.0) {
    writer.writeFloat(
      25,
      f
    );
  }
  f = message.getV25();
  if (f !== 0.0) {
    writer.writeFloat(
      26,
      f
    );
  }
  f = message.getV26();
  if (f !== 0.0) {
    writer.writeFloat(
      27,
      f
    );
  }
  f = message.getV27();
  if (f !== 0.0) {
    writer.writeFloat(
      28,
      f
    );
  }
  f = message.getV28();
  if (f !== 0.0) {
    writer.writeFloat(
      29,
      f
    );
  }
  f = message.getV29();
  if (f !== 0.0) {
    writer.writeFloat(
      30,
      f
    );
  }
  f = message.getV30();
  if (f !== 0.0) {
    writer.writeFloat(
      31,
      f
    );
  }
  f = message.getV31();
  if (f !== 0.0) {
    writer.writeFloat(
      32,
      f
    );
  }
  f = message.getV32();
  if (f !== 0.0) {
    writer.writeFloat(
      33,
      f
    );
  }
  f = message.getV33();
  if (f !== 0.0) {
    writer.writeFloat(
      34,
      f
    );
  }
  f = message.getV34();
  if (f !== 0.0) {
    writer.writeFloat(
      35,
      f
    );
  }
  f = message.getV35();
  if (f !== 0.0) {
    writer.writeFloat(
      36,
      f
    );
  }
  f = message.getV36();
  if (f !== 0.0) {
    writer.writeFloat(
      37,
      f
    );
  }
  f = message.getV37();
  if (f !== 0.0) {
    writer.writeFloat(
      38,
      f
    );
  }
  f = message.getV38();
  if (f !== 0.0) {
    writer.writeFloat(
      39,
      f
    );
  }
  f = message.getV39();
  if (f !== 0.0) {
    writer.writeFloat(
      40,
      f
    );
  }
  f = message.getV40();
  if (f !== 0.0) {
    writer.writeFloat(
      41,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp measured_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.helloworld.Mntr.prototype.getMeasuredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.helloworld.Mntr.prototype.setMeasuredAt = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.helloworld.Mntr.prototype.clearMeasuredAt = function() {
  this.setMeasuredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.helloworld.Mntr.prototype.hasMeasuredAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float v1 = 2;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV1 = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float v2 = 3;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV2 = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float v3 = 4;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV3 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV3 = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float v4 = 5;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV4 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV4 = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float v5 = 6;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV5 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV5 = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float v6 = 7;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV6 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV6 = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float v7 = 8;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV7 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV7 = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float v8 = 9;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV8 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV8 = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float v9 = 10;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV9 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV9 = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float v10 = 11;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV10 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV10 = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float v11 = 12;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV11 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV11 = function(value) {
  jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float v12 = 13;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV12 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV12 = function(value) {
  jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float v13 = 14;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV13 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV13 = function(value) {
  jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional float v14 = 15;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV14 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV14 = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional float v15 = 16;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV15 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV15 = function(value) {
  jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional float v16 = 17;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV16 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV16 = function(value) {
  jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional float v17 = 18;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV17 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV17 = function(value) {
  jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional float v18 = 19;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV18 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV18 = function(value) {
  jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional float v19 = 20;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV19 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV19 = function(value) {
  jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional float v20 = 21;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV20 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV20 = function(value) {
  jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional float v21 = 22;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV21 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV21 = function(value) {
  jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional float v22 = 23;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV22 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV22 = function(value) {
  jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional float v23 = 24;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV23 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV23 = function(value) {
  jspb.Message.setProto3FloatField(this, 24, value);
};


/**
 * optional float v24 = 25;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV24 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV24 = function(value) {
  jspb.Message.setProto3FloatField(this, 25, value);
};


/**
 * optional float v25 = 26;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV25 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 26, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV25 = function(value) {
  jspb.Message.setProto3FloatField(this, 26, value);
};


/**
 * optional float v26 = 27;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV26 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV26 = function(value) {
  jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional float v27 = 28;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV27 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV27 = function(value) {
  jspb.Message.setProto3FloatField(this, 28, value);
};


/**
 * optional float v28 = 29;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV28 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV28 = function(value) {
  jspb.Message.setProto3FloatField(this, 29, value);
};


/**
 * optional float v29 = 30;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV29 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV29 = function(value) {
  jspb.Message.setProto3FloatField(this, 30, value);
};


/**
 * optional float v30 = 31;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV30 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 31, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV30 = function(value) {
  jspb.Message.setProto3FloatField(this, 31, value);
};


/**
 * optional float v31 = 32;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV31 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV31 = function(value) {
  jspb.Message.setProto3FloatField(this, 32, value);
};


/**
 * optional float v32 = 33;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV32 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV32 = function(value) {
  jspb.Message.setProto3FloatField(this, 33, value);
};


/**
 * optional float v33 = 34;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV33 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 34, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV33 = function(value) {
  jspb.Message.setProto3FloatField(this, 34, value);
};


/**
 * optional float v34 = 35;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV34 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 35, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV34 = function(value) {
  jspb.Message.setProto3FloatField(this, 35, value);
};


/**
 * optional float v35 = 36;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV35 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 36, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV35 = function(value) {
  jspb.Message.setProto3FloatField(this, 36, value);
};


/**
 * optional float v36 = 37;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV36 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 37, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV36 = function(value) {
  jspb.Message.setProto3FloatField(this, 37, value);
};


/**
 * optional float v37 = 38;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV37 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 38, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV37 = function(value) {
  jspb.Message.setProto3FloatField(this, 38, value);
};


/**
 * optional float v38 = 39;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV38 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV38 = function(value) {
  jspb.Message.setProto3FloatField(this, 39, value);
};


/**
 * optional float v39 = 40;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV39 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 40, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV39 = function(value) {
  jspb.Message.setProto3FloatField(this, 40, value);
};


/**
 * optional float v40 = 41;
 * @return {number}
 */
proto.helloworld.Mntr.prototype.getV40 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/** @param {number} value */
proto.helloworld.Mntr.prototype.setV40 = function(value) {
  jspb.Message.setProto3FloatField(this, 41, value);
};


goog.object.extend(exports, proto.helloworld);