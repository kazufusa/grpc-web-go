import * as jspb from "google-protobuf"

import * as timestamp_pb from './timestamp_pb';

export class MntrRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MntrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MntrRequest): MntrRequest.AsObject;
  static serializeBinaryToWriter(message: MntrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MntrRequest;
  static deserializeBinaryFromReader(message: MntrRequest, reader: jspb.BinaryReader): MntrRequest;
}

export namespace MntrRequest {
  export type AsObject = {
  }
}

export class Mntrs extends jspb.Message {
  getMntrList(): Array<Mntr>;
  setMntrList(value: Array<Mntr>): void;
  clearMntrList(): void;
  addMntr(value?: Mntr, index?: number): Mntr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mntrs.AsObject;
  static toObject(includeInstance: boolean, msg: Mntrs): Mntrs.AsObject;
  static serializeBinaryToWriter(message: Mntrs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mntrs;
  static deserializeBinaryFromReader(message: Mntrs, reader: jspb.BinaryReader): Mntrs;
}

export namespace Mntrs {
  export type AsObject = {
    mntrList: Array<Mntr.AsObject>,
  }
}

export class Mntr extends jspb.Message {
  getMeasuredAt(): timestamp_pb.Timestamp | undefined;
  setMeasuredAt(value?: timestamp_pb.Timestamp): void;
  hasMeasuredAt(): boolean;
  clearMeasuredAt(): void;

  getV1(): number;
  setV1(value: number): void;

  getV2(): number;
  setV2(value: number): void;

  getV3(): number;
  setV3(value: number): void;

  getV4(): number;
  setV4(value: number): void;

  getV5(): number;
  setV5(value: number): void;

  getV6(): number;
  setV6(value: number): void;

  getV7(): number;
  setV7(value: number): void;

  getV8(): number;
  setV8(value: number): void;

  getV9(): number;
  setV9(value: number): void;

  getV10(): number;
  setV10(value: number): void;

  getV11(): number;
  setV11(value: number): void;

  getV12(): number;
  setV12(value: number): void;

  getV13(): number;
  setV13(value: number): void;

  getV14(): number;
  setV14(value: number): void;

  getV15(): number;
  setV15(value: number): void;

  getV16(): number;
  setV16(value: number): void;

  getV17(): number;
  setV17(value: number): void;

  getV18(): number;
  setV18(value: number): void;

  getV19(): number;
  setV19(value: number): void;

  getV20(): number;
  setV20(value: number): void;

  getV21(): number;
  setV21(value: number): void;

  getV22(): number;
  setV22(value: number): void;

  getV23(): number;
  setV23(value: number): void;

  getV24(): number;
  setV24(value: number): void;

  getV25(): number;
  setV25(value: number): void;

  getV26(): number;
  setV26(value: number): void;

  getV27(): number;
  setV27(value: number): void;

  getV28(): number;
  setV28(value: number): void;

  getV29(): number;
  setV29(value: number): void;

  getV30(): number;
  setV30(value: number): void;

  getV31(): number;
  setV31(value: number): void;

  getV32(): number;
  setV32(value: number): void;

  getV33(): number;
  setV33(value: number): void;

  getV34(): number;
  setV34(value: number): void;

  getV35(): number;
  setV35(value: number): void;

  getV36(): number;
  setV36(value: number): void;

  getV37(): number;
  setV37(value: number): void;

  getV38(): number;
  setV38(value: number): void;

  getV39(): number;
  setV39(value: number): void;

  getV40(): number;
  setV40(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mntr.AsObject;
  static toObject(includeInstance: boolean, msg: Mntr): Mntr.AsObject;
  static serializeBinaryToWriter(message: Mntr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mntr;
  static deserializeBinaryFromReader(message: Mntr, reader: jspb.BinaryReader): Mntr;
}

export namespace Mntr {
  export type AsObject = {
    measuredAt?: timestamp_pb.Timestamp.AsObject,
    v1: number,
    v2: number,
    v3: number,
    v4: number,
    v5: number,
    v6: number,
    v7: number,
    v8: number,
    v9: number,
    v10: number,
    v11: number,
    v12: number,
    v13: number,
    v14: number,
    v15: number,
    v16: number,
    v17: number,
    v18: number,
    v19: number,
    v20: number,
    v21: number,
    v22: number,
    v23: number,
    v24: number,
    v25: number,
    v26: number,
    v27: number,
    v28: number,
    v29: number,
    v30: number,
    v31: number,
    v32: number,
    v33: number,
    v34: number,
    v35: number,
    v36: number,
    v37: number,
    v38: number,
    v39: number,
    v40: number,
  }
}

