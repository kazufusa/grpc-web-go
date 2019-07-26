package main

import (
	b64 "encoding/base64"
	"net/http"

	"github.com/golang/protobuf/proto"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/kazufusa/grpc-web-go/server/helloworld"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

var (
	mntrs   pb.Mntrs
	Headers = []string{""}
	Origins = make(map[string]struct{})
)

func init() {
	s := pb.Mntr{
		V1:  1,
		V2:  2,
		V3:  3,
		V4:  4,
		V5:  5,
		V6:  6,
		V7:  7,
		V8:  8,
		V9:  9,
		V10: 10,
		V11: 11,
		V12: 12,
		V13: 13,
		V14: 14,
		V15: 15,
		V16: 16,
		V17: 17,
		V18: 18,
		V19: 19,
		V20: 20,
		V21: 21,
		V22: 22,
		V23: 23,
		V24: 24,
		V25: 25,
		V26: 26,
		V27: 27,
		V28: 28,
		V29: 29,
		V30: 30,
		V31: 31,
		V32: 32,
		V33: 33,
		V34: 34,
		V35: 35,
		V36: 36,
		V37: 37,
		V38: 38,
		V39: 39,
		V40: 40,
	}
	for i := 0; i < 10000; i++ {
		b := s
		mntrs.Mntr = append(mntrs.Mntr, &b)
	}
}

type server struct{}

func (s *server) Get(ctx context.Context, in *pb.MntrRequest) (*pb.Mntrs, error) {
	return &mntrs, nil
}

func HandleProtobuf(w http.ResponseWriter, req *http.Request) {
	res, err := proto.Marshal(&mntrs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Header().Set("Content-Type", "application/protobuf")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(b64.StdEncoding.EncodeToString(res)))
}

func main() {
	grpcServer := grpc.NewServer()
	pb.RegisterMntrAppServer(grpcServer, &server{})
	wrappedServer := grpcweb.WrapServer(grpcServer)

	r := mux.NewRouter()
	r.PathPrefix("/grpc").Handler(http.StripPrefix("/grpc", wrappedServer))
	r.HandleFunc("/protobuf", HandleProtobuf)

	rr := handlers.CORS(
		handlers.AllowedMethods([]string{"GET", "POST", "OPTIONS", "PUT", "DELETE"}),
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedHeaders([]string{
			// "Accept",
			"Content-Type",
			"Content-Length",
			// "Accept-Encoding",
			// "X-CSRF-Token",
			// "Authorization",
			// "XMLHttpRequest",
			"x-user-agent",
			"x-grpc-web",
			// "grpc-status",
			// "grpc-message",
		}),
		// handlers.ExposedHeaders([]string{"grpc-status", "grpc-message"}),
	)(r)
	httpServer := http.Server{Addr: ":8080", Handler: rr}
	httpServer.ListenAndServe()
}
