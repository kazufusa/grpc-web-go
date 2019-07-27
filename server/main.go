package main

import (
	"bytes"
	"compress/gzip"
	"encoding/json"
	"net/http"
	"strings"
	"time"

	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/ptypes"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	pb "github.com/kazufusa/grpc-web-go/server/helloworld"
	"github.com/shamaton/msgpack"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

var (
	pbmntrs pb.Mntrs
	mntrs   = []Mntr{}
	Headers = []string{""}
	Origins = make(map[string]struct{})
)

type Mntr struct {
	MeasuredAt time.Time `json:"MeasuredAt"`
	V1         float32   `json:"V1"`
	V2         float32   `json:"V2"`
	V3         float32   `json:"V3"`
	V4         float32   `json:"V4"`
	V5         float32   `json:"V5"`
	V6         float32   `json:"V6"`
	V7         float32   `json:"V7"`
	V8         float32   `json:"V8"`
	V9         float32   `json:"V9"`
	V10        float32   `json:"V10"`
	V11        float32   `json:"V11"`
	V12        float32   `json:"V12"`
	V13        float32   `json:"V13"`
	V14        float32   `json:"V14"`
	V15        float32   `json:"V15"`
	V16        float32   `json:"V16"`
	V17        float32   `json:"V17"`
	V18        float32   `json:"V18"`
	V19        float32   `json:"V19"`
	V20        float32   `json:"V20"`
	V21        float32   `json:"V21"`
	V22        float32   `json:"V22"`
	V23        float32   `json:"V23"`
	V24        float32   `json:"V24"`
	V25        float32   `json:"V25"`
	V26        float32   `json:"V26"`
	V27        float32   `json:"V27"`
	V28        float32   `json:"V28"`
	V29        float32   `json:"V29"`
	V30        float32   `json:"V30"`
	V31        float32   `json:"V31"`
	V32        float32   `json:"V32"`
	V33        float32   `json:"V33"`
	V34        float32   `json:"V34"`
	V35        float32   `json:"V35"`
	V36        float32   `json:"V36"`
	V37        float32   `json:"V37"`
	V38        float32   `json:"V38"`
	V39        float32   `json:"V39"`
	V40        float32   `json:"V40"`
}

func CopyFrom(pbmntr *pb.Mntr) (mntr Mntr) {
	mntr.MeasuredAt, _ = ptypes.Timestamp(pbmntr.MeasuredAt)
	mntr.V1 = pbmntr.V1
	mntr.V2 = pbmntr.V2
	mntr.V3 = pbmntr.V3
	mntr.V4 = pbmntr.V4
	mntr.V5 = pbmntr.V5
	mntr.V6 = pbmntr.V6
	mntr.V7 = pbmntr.V7
	mntr.V8 = pbmntr.V8
	mntr.V9 = pbmntr.V9
	mntr.V10 = pbmntr.V10
	mntr.V11 = pbmntr.V11
	mntr.V12 = pbmntr.V12
	mntr.V13 = pbmntr.V13
	mntr.V14 = pbmntr.V14
	mntr.V15 = pbmntr.V15
	mntr.V16 = pbmntr.V16
	mntr.V17 = pbmntr.V17
	mntr.V18 = pbmntr.V18
	mntr.V19 = pbmntr.V19
	mntr.V20 = pbmntr.V20
	mntr.V21 = pbmntr.V21
	mntr.V22 = pbmntr.V22
	mntr.V23 = pbmntr.V23
	mntr.V24 = pbmntr.V24
	mntr.V25 = pbmntr.V25
	mntr.V26 = pbmntr.V26
	mntr.V27 = pbmntr.V27
	mntr.V28 = pbmntr.V28
	mntr.V29 = pbmntr.V29
	mntr.V30 = pbmntr.V30
	mntr.V31 = pbmntr.V31
	mntr.V32 = pbmntr.V32
	mntr.V33 = pbmntr.V33
	mntr.V34 = pbmntr.V34
	mntr.V35 = pbmntr.V35
	mntr.V36 = pbmntr.V36
	mntr.V37 = pbmntr.V37
	mntr.V38 = pbmntr.V38
	mntr.V39 = pbmntr.V39
	mntr.V40 = pbmntr.V40

	return mntr
}

func init() {
	s := pb.Mntr{
		MeasuredAt: ptypes.TimestampNow(),
		V1:         1.11233,
		V2:         2.11233,
		V3:         3.11233,
		V4:         4.11233,
		V5:         5.11233,
		V6:         6.11233,
		V7:         7.11233,
		V8:         8.11233,
		V9:         9.11233,
		V10:        10.11233,
		V11:        11.11233,
		V12:        12.11233,
		V13:        13.11233,
		V14:        14.11233,
		V15:        15.11233,
		V16:        16.11233,
		V17:        17.11233,
		V18:        18.11233,
		V19:        19.11233,
		V20:        20.11233,
		V21:        21.11233,
		V22:        22.11233,
		V23:        23.11233,
		V24:        24.11233,
		V25:        25.11233,
		V26:        26.11233,
		V27:        27.11233,
		V28:        28.11233,
		V29:        29.11233,
		V30:        30.11233,
		V31:        31.11233,
		V32:        32.11233,
		V33:        33.11233,
		V34:        34.11233,
		V35:        35.11233,
		V36:        36.11233,
		V37:        37.11233,
		V38:        38.11233,
		V39:        39.11233,
		V40:        40.11233,
	}
	for i := 0; i < 10000; i++ {
		b := s
		pbmntrs.Mntr = append(pbmntrs.Mntr, &b)
		mntrs = append(mntrs, CopyFrom(&b))
	}
}

type server struct{}

func (s *server) Get(ctx context.Context, in *pb.MntrRequest) (*pb.Mntrs, error) {
	return &pbmntrs, nil
}

func HandleJson(w http.ResponseWriter, r *http.Request) {
	buf, err := json.Marshal(mntrs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
		gz := new(bytes.Buffer)
		ww := gzip.NewWriter(gz)
		defer ww.Close()
		if _, err := ww.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if err := ww.Close(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Encoding", "gzip")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		if _, err := gz.WriteTo(w); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	} else {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}

func HandleProtobuf(w http.ResponseWriter, r *http.Request) {
	buf, err := proto.Marshal(&pbmntrs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
		gz := new(bytes.Buffer)
		ww := gzip.NewWriter(gz)
		defer ww.Close()
		if _, err := ww.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if err := ww.Close(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Encoding", "gzip")
		w.Header().Set("Content-Type", "application/x-protobuf")
		w.WriteHeader(http.StatusOK)
		if _, err := gz.WriteTo(w); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	} else {
		w.Header().Set("Content-Type", "application/x-protobuf")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}

func HandleMessagepack(w http.ResponseWriter, r *http.Request) {
	buf, err := msgpack.Encode(mntrs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
		gz := new(bytes.Buffer)
		ww := gzip.NewWriter(gz)
		defer ww.Close()
		if _, err := ww.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if err := ww.Close(); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Encoding", "gzip")
		w.Header().Set("Content-Type", "application/x-msgpack")
		w.WriteHeader(http.StatusOK)
		if _, err := gz.WriteTo(w); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	} else {
		w.Header().Set("Content-Type", "application/x-msgpack")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write(buf); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}

func main() {
	grpcServer := grpc.NewServer()
	pb.RegisterMntrAppServer(grpcServer, &server{})
	wrappedServer := grpcweb.WrapServer(grpcServer)

	r := mux.NewRouter()
	r.PathPrefix("/grpc").Handler(http.StripPrefix("/grpc", wrappedServer))
	r.HandleFunc("/protobuf", HandleProtobuf)
	r.HandleFunc("/messagepack", HandleMessagepack)
	r.HandleFunc("/json", HandleJson)

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
