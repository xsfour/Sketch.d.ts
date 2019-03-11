/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKURLResponse<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    data<R = cocoa.NSData>(): R;
    setData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    response<R = cocoa.NSURLResponse>(): R;
    setResponse<R = void, P0 = cocoa.NSURLResponse>(_v: P0): R;
    request<R = cocoa.NSURLRequest>(): R;
    setRequest<R = void, P0 = cocoa.NSURLRequest>(_v: P0): R;
  }
  namespace classes {
    export interface SMKURLResponse<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = SMKURLResponse>(): R;
      new: <R = SMKURLResponse>() => R;
    }
  }
}

declare const SMKURLResponse: cocoa.classes.SMKURLResponse;
