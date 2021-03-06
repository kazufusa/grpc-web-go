// Code generated by protoc-gen-go. DO NOT EDIT.
// source: helloworld.proto

package helloworld

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type MntrRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MntrRequest) Reset()         { *m = MntrRequest{} }
func (m *MntrRequest) String() string { return proto.CompactTextString(m) }
func (*MntrRequest) ProtoMessage()    {}
func (*MntrRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_17b8c58d586b62f2, []int{0}
}

func (m *MntrRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MntrRequest.Unmarshal(m, b)
}
func (m *MntrRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MntrRequest.Marshal(b, m, deterministic)
}
func (m *MntrRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MntrRequest.Merge(m, src)
}
func (m *MntrRequest) XXX_Size() int {
	return xxx_messageInfo_MntrRequest.Size(m)
}
func (m *MntrRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_MntrRequest.DiscardUnknown(m)
}

var xxx_messageInfo_MntrRequest proto.InternalMessageInfo

type Mntrs struct {
	Mntr                 []*Mntr  `protobuf:"bytes,1,rep,name=mntr,proto3" json:"mntr,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Mntrs) Reset()         { *m = Mntrs{} }
func (m *Mntrs) String() string { return proto.CompactTextString(m) }
func (*Mntrs) ProtoMessage()    {}
func (*Mntrs) Descriptor() ([]byte, []int) {
	return fileDescriptor_17b8c58d586b62f2, []int{1}
}

func (m *Mntrs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Mntrs.Unmarshal(m, b)
}
func (m *Mntrs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Mntrs.Marshal(b, m, deterministic)
}
func (m *Mntrs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Mntrs.Merge(m, src)
}
func (m *Mntrs) XXX_Size() int {
	return xxx_messageInfo_Mntrs.Size(m)
}
func (m *Mntrs) XXX_DiscardUnknown() {
	xxx_messageInfo_Mntrs.DiscardUnknown(m)
}

var xxx_messageInfo_Mntrs proto.InternalMessageInfo

func (m *Mntrs) GetMntr() []*Mntr {
	if m != nil {
		return m.Mntr
	}
	return nil
}

type Mntr struct {
	MeasuredAt           *timestamp.Timestamp `protobuf:"bytes,1,opt,name=measured_at,json=measuredAt,proto3" json:"measured_at,omitempty"`
	V1                   float32              `protobuf:"fixed32,2,opt,name=v1,proto3" json:"v1,omitempty"`
	V2                   float32              `protobuf:"fixed32,3,opt,name=v2,proto3" json:"v2,omitempty"`
	V3                   float32              `protobuf:"fixed32,4,opt,name=v3,proto3" json:"v3,omitempty"`
	V4                   float32              `protobuf:"fixed32,5,opt,name=v4,proto3" json:"v4,omitempty"`
	V5                   float32              `protobuf:"fixed32,6,opt,name=v5,proto3" json:"v5,omitempty"`
	V6                   float32              `protobuf:"fixed32,7,opt,name=v6,proto3" json:"v6,omitempty"`
	V7                   float32              `protobuf:"fixed32,8,opt,name=v7,proto3" json:"v7,omitempty"`
	V8                   float32              `protobuf:"fixed32,9,opt,name=v8,proto3" json:"v8,omitempty"`
	V9                   float32              `protobuf:"fixed32,10,opt,name=v9,proto3" json:"v9,omitempty"`
	V10                  float32              `protobuf:"fixed32,11,opt,name=v10,proto3" json:"v10,omitempty"`
	V11                  float32              `protobuf:"fixed32,12,opt,name=v11,proto3" json:"v11,omitempty"`
	V12                  float32              `protobuf:"fixed32,13,opt,name=v12,proto3" json:"v12,omitempty"`
	V13                  float32              `protobuf:"fixed32,14,opt,name=v13,proto3" json:"v13,omitempty"`
	V14                  float32              `protobuf:"fixed32,15,opt,name=v14,proto3" json:"v14,omitempty"`
	V15                  float32              `protobuf:"fixed32,16,opt,name=v15,proto3" json:"v15,omitempty"`
	V16                  float32              `protobuf:"fixed32,17,opt,name=v16,proto3" json:"v16,omitempty"`
	V17                  float32              `protobuf:"fixed32,18,opt,name=v17,proto3" json:"v17,omitempty"`
	V18                  float32              `protobuf:"fixed32,19,opt,name=v18,proto3" json:"v18,omitempty"`
	V19                  float32              `protobuf:"fixed32,20,opt,name=v19,proto3" json:"v19,omitempty"`
	V20                  float32              `protobuf:"fixed32,21,opt,name=v20,proto3" json:"v20,omitempty"`
	V21                  float32              `protobuf:"fixed32,22,opt,name=v21,proto3" json:"v21,omitempty"`
	V22                  float32              `protobuf:"fixed32,23,opt,name=v22,proto3" json:"v22,omitempty"`
	V23                  float32              `protobuf:"fixed32,24,opt,name=v23,proto3" json:"v23,omitempty"`
	V24                  float32              `protobuf:"fixed32,25,opt,name=v24,proto3" json:"v24,omitempty"`
	V25                  float32              `protobuf:"fixed32,26,opt,name=v25,proto3" json:"v25,omitempty"`
	V26                  float32              `protobuf:"fixed32,27,opt,name=v26,proto3" json:"v26,omitempty"`
	V27                  float32              `protobuf:"fixed32,28,opt,name=v27,proto3" json:"v27,omitempty"`
	V28                  float32              `protobuf:"fixed32,29,opt,name=v28,proto3" json:"v28,omitempty"`
	V29                  float32              `protobuf:"fixed32,30,opt,name=v29,proto3" json:"v29,omitempty"`
	V30                  float32              `protobuf:"fixed32,31,opt,name=v30,proto3" json:"v30,omitempty"`
	V31                  float32              `protobuf:"fixed32,32,opt,name=v31,proto3" json:"v31,omitempty"`
	V32                  float32              `protobuf:"fixed32,33,opt,name=v32,proto3" json:"v32,omitempty"`
	V33                  float32              `protobuf:"fixed32,34,opt,name=v33,proto3" json:"v33,omitempty"`
	V34                  float32              `protobuf:"fixed32,35,opt,name=v34,proto3" json:"v34,omitempty"`
	V35                  float32              `protobuf:"fixed32,36,opt,name=v35,proto3" json:"v35,omitempty"`
	V36                  float32              `protobuf:"fixed32,37,opt,name=v36,proto3" json:"v36,omitempty"`
	V37                  float32              `protobuf:"fixed32,38,opt,name=v37,proto3" json:"v37,omitempty"`
	V38                  float32              `protobuf:"fixed32,39,opt,name=v38,proto3" json:"v38,omitempty"`
	V39                  float32              `protobuf:"fixed32,40,opt,name=v39,proto3" json:"v39,omitempty"`
	V40                  float32              `protobuf:"fixed32,41,opt,name=v40,proto3" json:"v40,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Mntr) Reset()         { *m = Mntr{} }
func (m *Mntr) String() string { return proto.CompactTextString(m) }
func (*Mntr) ProtoMessage()    {}
func (*Mntr) Descriptor() ([]byte, []int) {
	return fileDescriptor_17b8c58d586b62f2, []int{2}
}

func (m *Mntr) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Mntr.Unmarshal(m, b)
}
func (m *Mntr) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Mntr.Marshal(b, m, deterministic)
}
func (m *Mntr) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Mntr.Merge(m, src)
}
func (m *Mntr) XXX_Size() int {
	return xxx_messageInfo_Mntr.Size(m)
}
func (m *Mntr) XXX_DiscardUnknown() {
	xxx_messageInfo_Mntr.DiscardUnknown(m)
}

var xxx_messageInfo_Mntr proto.InternalMessageInfo

func (m *Mntr) GetMeasuredAt() *timestamp.Timestamp {
	if m != nil {
		return m.MeasuredAt
	}
	return nil
}

func (m *Mntr) GetV1() float32 {
	if m != nil {
		return m.V1
	}
	return 0
}

func (m *Mntr) GetV2() float32 {
	if m != nil {
		return m.V2
	}
	return 0
}

func (m *Mntr) GetV3() float32 {
	if m != nil {
		return m.V3
	}
	return 0
}

func (m *Mntr) GetV4() float32 {
	if m != nil {
		return m.V4
	}
	return 0
}

func (m *Mntr) GetV5() float32 {
	if m != nil {
		return m.V5
	}
	return 0
}

func (m *Mntr) GetV6() float32 {
	if m != nil {
		return m.V6
	}
	return 0
}

func (m *Mntr) GetV7() float32 {
	if m != nil {
		return m.V7
	}
	return 0
}

func (m *Mntr) GetV8() float32 {
	if m != nil {
		return m.V8
	}
	return 0
}

func (m *Mntr) GetV9() float32 {
	if m != nil {
		return m.V9
	}
	return 0
}

func (m *Mntr) GetV10() float32 {
	if m != nil {
		return m.V10
	}
	return 0
}

func (m *Mntr) GetV11() float32 {
	if m != nil {
		return m.V11
	}
	return 0
}

func (m *Mntr) GetV12() float32 {
	if m != nil {
		return m.V12
	}
	return 0
}

func (m *Mntr) GetV13() float32 {
	if m != nil {
		return m.V13
	}
	return 0
}

func (m *Mntr) GetV14() float32 {
	if m != nil {
		return m.V14
	}
	return 0
}

func (m *Mntr) GetV15() float32 {
	if m != nil {
		return m.V15
	}
	return 0
}

func (m *Mntr) GetV16() float32 {
	if m != nil {
		return m.V16
	}
	return 0
}

func (m *Mntr) GetV17() float32 {
	if m != nil {
		return m.V17
	}
	return 0
}

func (m *Mntr) GetV18() float32 {
	if m != nil {
		return m.V18
	}
	return 0
}

func (m *Mntr) GetV19() float32 {
	if m != nil {
		return m.V19
	}
	return 0
}

func (m *Mntr) GetV20() float32 {
	if m != nil {
		return m.V20
	}
	return 0
}

func (m *Mntr) GetV21() float32 {
	if m != nil {
		return m.V21
	}
	return 0
}

func (m *Mntr) GetV22() float32 {
	if m != nil {
		return m.V22
	}
	return 0
}

func (m *Mntr) GetV23() float32 {
	if m != nil {
		return m.V23
	}
	return 0
}

func (m *Mntr) GetV24() float32 {
	if m != nil {
		return m.V24
	}
	return 0
}

func (m *Mntr) GetV25() float32 {
	if m != nil {
		return m.V25
	}
	return 0
}

func (m *Mntr) GetV26() float32 {
	if m != nil {
		return m.V26
	}
	return 0
}

func (m *Mntr) GetV27() float32 {
	if m != nil {
		return m.V27
	}
	return 0
}

func (m *Mntr) GetV28() float32 {
	if m != nil {
		return m.V28
	}
	return 0
}

func (m *Mntr) GetV29() float32 {
	if m != nil {
		return m.V29
	}
	return 0
}

func (m *Mntr) GetV30() float32 {
	if m != nil {
		return m.V30
	}
	return 0
}

func (m *Mntr) GetV31() float32 {
	if m != nil {
		return m.V31
	}
	return 0
}

func (m *Mntr) GetV32() float32 {
	if m != nil {
		return m.V32
	}
	return 0
}

func (m *Mntr) GetV33() float32 {
	if m != nil {
		return m.V33
	}
	return 0
}

func (m *Mntr) GetV34() float32 {
	if m != nil {
		return m.V34
	}
	return 0
}

func (m *Mntr) GetV35() float32 {
	if m != nil {
		return m.V35
	}
	return 0
}

func (m *Mntr) GetV36() float32 {
	if m != nil {
		return m.V36
	}
	return 0
}

func (m *Mntr) GetV37() float32 {
	if m != nil {
		return m.V37
	}
	return 0
}

func (m *Mntr) GetV38() float32 {
	if m != nil {
		return m.V38
	}
	return 0
}

func (m *Mntr) GetV39() float32 {
	if m != nil {
		return m.V39
	}
	return 0
}

func (m *Mntr) GetV40() float32 {
	if m != nil {
		return m.V40
	}
	return 0
}

func init() {
	proto.RegisterType((*MntrRequest)(nil), "helloworld.MntrRequest")
	proto.RegisterType((*Mntrs)(nil), "helloworld.Mntrs")
	proto.RegisterType((*Mntr)(nil), "helloworld.Mntr")
}

func init() { proto.RegisterFile("helloworld.proto", fileDescriptor_17b8c58d586b62f2) }

var fileDescriptor_17b8c58d586b62f2 = []byte{
	// 439 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0xd3, 0x4b, 0x6f, 0xd3, 0x40,
	0x14, 0xc5, 0x71, 0xe5, 0xd1, 0x14, 0xc6, 0xb4, 0x4d, 0xcd, 0xa3, 0x87, 0xf0, 0x0a, 0xa1, 0x40,
	0x58, 0x10, 0xd9, 0xf7, 0xfa, 0x29, 0xd8, 0x74, 0xc5, 0x8a, 0x4d, 0xc4, 0x1e, 0xa5, 0xaa, 0x29,
	0x48, 0x49, 0x1d, 0xec, 0x49, 0x58, 0xf3, 0xcd, 0x91, 0xe7, 0xce, 0x15, 0x88, 0xee, 0x72, 0x7e,
	0x63, 0x65, 0xfe, 0x9b, 0x31, 0xe3, 0xef, 0xd5, 0x7a, 0x5d, 0xff, 0xaa, 0x9b, 0xf5, 0xd5, 0x62,
	0xdb, 0xd4, 0xb6, 0x0e, 0xcd, 0x5f, 0x99, 0x9c, 0xd8, 0x1f, 0x9b, 0xaa, 0xb5, 0xab, 0xcd, 0x56,
	0x0e, 0x67, 0x47, 0x26, 0xf8, 0x7c, 0x63, 0x9b, 0x65, 0xf5, 0x73, 0x57, 0xb5, 0x76, 0xf6, 0xde,
	0x1c, 0x74, 0xb3, 0x0d, 0xcf, 0xcd, 0x70, 0x73, 0x63, 0x1b, 0xf4, 0xa6, 0x83, 0x79, 0x40, 0xe3,
	0xc5, 0x3f, 0xff, 0xea, 0xbe, 0x77, 0xa7, 0xb3, 0xdf, 0x23, 0x33, 0xec, 0x66, 0xf8, 0xc1, 0x04,
	0x9b, 0x6a, 0xd5, 0xee, 0x9a, 0xea, 0xea, 0xeb, 0xca, 0xa2, 0x37, 0xed, 0xcd, 0x03, 0x9a, 0x2c,
	0xae, 0xeb, 0xfa, 0x7a, 0x5d, 0xc9, 0x55, 0x97, 0xbb, 0x6f, 0x8b, 0x2f, 0x7a, 0xfb, 0xd2, 0xe8,
	0xe7, 0x17, 0x36, 0x3c, 0x36, 0xfd, 0x7d, 0x8c, 0xfe, 0xb4, 0x37, 0xef, 0x2f, 0xfb, 0xfb, 0xd8,
	0x6d, 0xc2, 0xc0, 0x6f, 0x72, 0x9b, 0x31, 0xf4, 0x9b, 0xdd, 0x4e, 0x70, 0xe0, 0x77, 0xe2, 0x76,
	0x8a, 0x91, 0xdf, 0xa9, 0xdb, 0x19, 0x0e, 0xfd, 0xce, 0xdc, 0xce, 0x71, 0xc7, 0xef, 0xdc, 0xed,
	0x02, 0x77, 0xfd, 0x2e, 0xdc, 0x2e, 0x61, 0xfc, 0x2e, 0xc3, 0xb1, 0x19, 0xec, 0xe3, 0x08, 0x81,
	0x83, 0xee, 0xa7, 0x48, 0x8c, 0x7b, 0x2a, 0xb1, 0x08, 0xe1, 0x48, 0x85, 0x44, 0x18, 0xc7, 0x2a,
	0x2c, 0x92, 0xe0, 0x44, 0x25, 0x11, 0x49, 0x31, 0x56, 0x49, 0x45, 0x32, 0x9c, 0xaa, 0x64, 0x22,
	0x39, 0x42, 0x95, 0x5c, 0xa4, 0xc0, 0x7d, 0x95, 0x42, 0xa4, 0xc4, 0x03, 0x15, 0x69, 0xa6, 0x08,
	0x0f, 0xbd, 0x90, 0x34, 0x53, 0x8c, 0x47, 0x2a, 0xd2, 0x4c, 0x84, 0x33, 0x15, 0x69, 0x26, 0x06,
	0x54, 0xa4, 0x99, 0x12, 0x3c, 0x56, 0x91, 0x66, 0x4a, 0x31, 0x51, 0x91, 0x66, 0xca, 0xf0, 0x44,
	0x45, 0x9a, 0x29, 0xc7, 0x53, 0x15, 0x69, 0xa6, 0x02, 0xcf, 0x54, 0xa4, 0x99, 0x4a, 0x3c, 0x57,
	0x91, 0x66, 0x8e, 0xf0, 0xc2, 0x0b, 0x4b, 0x33, 0xc7, 0x98, 0xaa, 0x48, 0x33, 0x13, 0x5e, 0xaa,
	0x48, 0x33, 0x33, 0x66, 0x2a, 0xd2, 0xcc, 0x09, 0x5e, 0xa9, 0x48, 0x33, 0xa7, 0x38, 0x57, 0x91,
	0x66, 0xce, 0xf0, 0x5a, 0x45, 0x9a, 0x39, 0xc7, 0x1b, 0x15, 0x69, 0xe6, 0x02, 0x6f, 0x55, 0xa4,
	0x99, 0x4b, 0xcc, 0x55, 0xa4, 0x39, 0x89, 0xf0, 0xce, 0x4b, 0x12, 0xd1, 0x47, 0x73, 0xd8, 0x3d,
	0x81, 0x8b, 0xed, 0x36, 0x8c, 0xcd, 0xe0, 0x53, 0x65, 0xc3, 0xb3, 0x5b, 0xaf, 0x45, 0x5e, 0xd7,
	0xe4, 0xf4, 0xff, 0x83, 0xf6, 0x72, 0xe4, 0xde, 0x06, 0xff, 0x09, 0x00, 0x00, 0xff, 0xff, 0x24,
	0x11, 0x34, 0xc1, 0xb7, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MntrAppClient is the client API for MntrApp service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MntrAppClient interface {
	Get(ctx context.Context, in *MntrRequest, opts ...grpc.CallOption) (*Mntrs, error)
}

type mntrAppClient struct {
	cc *grpc.ClientConn
}

func NewMntrAppClient(cc *grpc.ClientConn) MntrAppClient {
	return &mntrAppClient{cc}
}

func (c *mntrAppClient) Get(ctx context.Context, in *MntrRequest, opts ...grpc.CallOption) (*Mntrs, error) {
	out := new(Mntrs)
	err := c.cc.Invoke(ctx, "/helloworld.MntrApp/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MntrAppServer is the server API for MntrApp service.
type MntrAppServer interface {
	Get(context.Context, *MntrRequest) (*Mntrs, error)
}

// UnimplementedMntrAppServer can be embedded to have forward compatible implementations.
type UnimplementedMntrAppServer struct {
}

func (*UnimplementedMntrAppServer) Get(ctx context.Context, req *MntrRequest) (*Mntrs, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}

func RegisterMntrAppServer(s *grpc.Server, srv MntrAppServer) {
	s.RegisterService(&_MntrApp_serviceDesc, srv)
}

func _MntrApp_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MntrRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MntrAppServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/helloworld.MntrApp/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MntrAppServer).Get(ctx, req.(*MntrRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MntrApp_serviceDesc = grpc.ServiceDesc{
	ServiceName: "helloworld.MntrApp",
	HandlerType: (*MntrAppServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _MntrApp_Get_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "helloworld.proto",
}
