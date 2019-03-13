/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionDataDelegateProtocol<T = any> extends NSURLConnectionDelegateProtocol {
    connectionDidFinishLoading<R = void, P0 = NSURLConnection>(_connectionDidFinishLoading: P0): R;
    connection_willCacheResponse<R = NSCachedURLResponse, P0 = NSURLConnection, P1 = NSCachedURLResponse>(_connection: P0, _willCacheResponse: P1): R;
    connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite<R = void, P0 = NSURLConnection, P1 = number, P2 = number, P3 = number>(_connection: P0, _didSendBodyData: P1, _totalBytesWritten: P2, _totalBytesExpectedToWrite: P3): R;
    connection_needNewBodyStream<R = NSInputStream, P0 = NSURLConnection, P1 = NSURLRequest>(_connection: P0, _needNewBodyStream: P1): R;
    connection_didReceiveData<R = void, P0 = NSURLConnection, P1 = NSData>(_connection: P0, _didReceiveData: P1): R;
    connection_didReceiveResponse<R = void, P0 = NSURLConnection, P1 = NSURLResponse>(_connection: P0, _didReceiveResponse: P1): R;
    connection_willSendRequest_redirectResponse<R = NSURLRequest, P0 = NSURLConnection, P1 = NSURLRequest, P2 = NSURLResponse>(_connection: P0, _willSendRequest: P1, _redirectResponse: P2): R;
  }
  namespace classes {
    export interface NSURLConnectionDataDelegateProtocol<T = any> extends NSURLConnectionDelegateProtocol {  }
  }
}
