/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDelegateProtocol<T = any> extends NSObjectProtocol {
    URLSessionDidFinishEventsForBackgroundURLSession<R = void, P0 = NSURLSession>(_URLSessionDidFinishEventsForBackgroundURLSession: P0): R;
    URLSession_didReceiveChallenge_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLAuthenticationChallenge, P2 = CDUnknownBlockType>(_URLSession: P0, _didReceiveChallenge: P1, _completionHandler: P2): R;
    URLSession_didBecomeInvalidWithError<R = void, P0 = NSURLSession, P1 = NSError>(_URLSession: P0, _didBecomeInvalidWithError: P1): R;
  }
  namespace classes {
    export interface NSURLSessionDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
