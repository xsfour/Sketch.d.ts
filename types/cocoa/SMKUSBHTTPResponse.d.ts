/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKUSBHTTPResponse<T = any> extends cocoa.SMKURLResponse {}
  namespace classes {
    export interface SMKUSBHTTPResponse<T = any> extends cocoa.classes.SMKURLResponse {
      alloc<R = SMKUSBHTTPResponse>(): R;
      new: <R = SMKUSBHTTPResponse>() => R;
    }
  }
}

declare const SMKUSBHTTPResponse: cocoa.classes.SMKUSBHTTPResponse;
