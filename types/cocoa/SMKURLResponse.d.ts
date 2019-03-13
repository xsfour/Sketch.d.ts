/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKURLResponse<T = any> extends NSObject, NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    response<R = NSURLResponse>(): R;
    setResponse<R = void, P0 = NSURLResponse>(_v: P0): R;
    request<R = NSURLRequest>(): R;
    setRequest<R = void, P0 = NSURLRequest>(_v: P0): R;
  }
  namespace classes {
    export interface SMKURLResponse<T = any> extends NSObject, NSSecureCodingProtocol {
      alloc<R = SMKURLResponse>(): R;
      new: <R = SMKURLResponse>() => R;
    }
  }
}

declare const SMKURLResponse: cocoa.classes.SMKURLResponse;
