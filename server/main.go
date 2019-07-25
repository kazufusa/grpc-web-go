package main

import (
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/kazufusa/grpc-web-go/server/helloworld"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

const (
	port = 8080
)

var message []string

func init() {
	for i := 0; i < 100000; i++ {
		message = append(message, "hello")
	}
}

type server struct{}

func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	// return &pb.HelloReply{Message: "Hello " + in.Name}, nil
	return &pb.HelloReply{Message: message}, nil
}

func main() {
	grpcServer := grpc.NewServer()
	pb.RegisterGreeterServer(grpcServer, &server{})
	wrappedServer := grpcweb.WrapServer(grpcServer)

	handler := func(resp http.ResponseWriter, req *http.Request) {
		allowCors(resp, req)
		wrappedServer.ServeHTTP(resp, req)
	}
	httpServer := http.Server{
		Addr:    ":8080",
		Handler: http.HandlerFunc(handler),
	}
	if err := httpServer.ListenAndServe(); err != nil {
		grpclog.Fatalf("failed starting http server: %v", err)
	}
}

func allowCors(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Expose-Headers", "grpc-status, grpc-message")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, XMLHttpRequest, x-user-agent, x-grpc-web, grpc-status, grpc-message")
	w.Header().Set("Cache-Control", "no-cache")
}
