/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionDataDelegateProtocol<T = any> extends cocoa.NSURLConnectionDelegateProtocol {
    connectionDidFinishLoading<R = void, P0 = cocoa.NSURLConnection>(_connectionDidFinishLoading: P0): R;
    connection_willCacheResponse<R = cocoa.NSCachedURLResponse, P0 = cocoa.NSURLConnection, P1 = cocoa.NSCachedURLResponse>(_connection: P0, _willCacheResponse: P1): R;
    connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite<R = void, P0 = cocoa.NSURLConnection, P1 = number, P2 = number, P3 = number>(_connection: P0, _didSendBodyData: P1, _totalBytesWritten: P2, _totalBytesExpectedToWrite: P3): R;
    connection_needNewBodyStream<R = cocoa.NSInputStream, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLRequest>(_connection: P0, _needNewBodyStream: P1): R;
    connection_didReceiveData<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSData>(_connection: P0, _didReceiveData: P1): R;
    connection_didReceiveResponse<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLResponse>(_connection: P0, _didReceiveResponse: P1): R;
    connection_willSendRequest_redirectResponse<R = cocoa.NSURLRequest, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLRequest, P2 = cocoa.NSURLResponse>(_connection: P0, _willSendRequest: P1, _redirectResponse: P2): R;
  }
  namespace classes {
    export interface NSURLConnectionDataDelegateProtocol<T = any> extends cocoa.classes.NSURLConnectionDelegateProtocol {  }
  }
}

declare const NSURLConnectionDataDelegateProtocol: cocoa.classes.NSURLConnectionDataDelegateProtocol;
