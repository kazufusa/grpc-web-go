#!/bin/bash
set -Ceux

cd $(dirname $0)/..

CLIENT_OUTDIR=client/src/helloworld
SERVER_OUTPUT_DIR=server/helloworld
CLIENT_JS_OUTDIR=js/helloworld

mkdir -p ${CLIENT_OUTDIR} ${SERVER_OUTPUT_DIR} ${CLIENT_JS_OUTDIR}

sudo docker build -t protoc ./docker
# protocol/helloworld.proto
#  --js_out => helloworld_pb.js
#  --grpc-web_out => helloworld_pb.d.ts
#  --grpc-web_out => HelloworldServiceClientPb.ts
#  --go_out => helloworld.pb.go
sudo docker run -u $(id -u):$(id -g) -w /prtoc -v $PWD:/prtoc --rm -it protoc bash -c "\
protoc --proto_path=proto helloworld.proto \
  --js_out=import_style=commonjs:${CLIENT_OUTDIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTDIR} \
  --go_out=plugins=grpc:${SERVER_OUTPUT_DIR} \
"

sudo docker run -u $(id -u):$(id -g) -w /prtoc -v $PWD:/prtoc --rm -it protoc bash -c "\
protoc --proto_path=proto helloworld.proto \
  --js_out=import_style=commonjs:${CLIENT_JS_OUTDIR} \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${CLIENT_JS_OUTDIR} \
  --go_out=plugins=grpc:${SERVER_OUTPUT_DIR} \
"
