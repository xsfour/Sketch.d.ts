/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFStreamingMultipartFormData<T = any> extends cocoa.NSObject, cocoa.AFMultipartFormDataProtocol {
    cxx_destruct<R = void>(): R;
    requestByFinalizingMultipartFormData<R = unknown>(): R;
    initWithURLRequest_stringEncoding<R = unknown, P0 = unknown, P1 = number>(_initWithURLRequest: P0, _stringEncoding: P1): R;
    bodyStream<R = cocoa.AFMultipartBodyStream>(): R;
    setBodyStream<R = void, P0 = cocoa.AFMultipartBodyStream>(_v: P0): R;
    boundary<R = cocoa.NSString>(): R;
    setBoundary<R = void, P0 = cocoa.NSString>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    request<R = cocoa.NSMutableURLRequest>(): R;
    setRequest<R = void, P0 = cocoa.NSMutableURLRequest>(_v: P0): R;
  }
  namespace classes {
    export interface AFStreamingMultipartFormData<T = any> extends cocoa.classes.NSObject, cocoa.classes.AFMultipartFormDataProtocol {
      alloc<R = AFStreamingMultipartFormData>(): R;
      new: <R = AFStreamingMultipartFormData>() => R;
    }
  }
}

declare const AFStreamingMultipartFormData: cocoa.classes.AFStreamingMultipartFormData;
