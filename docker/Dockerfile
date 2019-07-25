FROM golang:1.12.7

ARG protov="3.9.0"
ARG webv="1.0.5"

RUN apt-get update -qq \
  && apt-get install -y unzip \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && wget -q https://github.com/protocolbuffers/protobuf/releases/download/\
v${protov}/protoc-${protov}-linux-x86_64.zip \
  && unzip -q protoc-${protov}-linux-x86_64.zip -d protoc \
  && mv protoc/bin/protoc /usr/local/bin/protoc \
  && rm -rf protoc-${protov}-linux-x86_64.zip protoc

RUN wget -q https://github.com/grpc/grpc-web/releases/download/${webv}/\
protoc-gen-grpc-web-${webv}-linux-x86_64 \
  && chmod +x ./protoc-gen-grpc-web-${webv}-linux-x86_64 \
  && mv ./protoc-gen-grpc-web-${webv}-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web

RUN go get -u github.com/golang/protobuf/protoc-gen-go
