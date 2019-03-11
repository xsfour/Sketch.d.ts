/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    URLSessionDidFinishEventsForBackgroundURLSession<R = void, P0 = cocoa.NSURLSession>(_URLSessionDidFinishEventsForBackgroundURLSession: P0): R;
    URLSession_didReceiveChallenge_completionHandler<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLAuthenticationChallenge, P2 = cocoa.CDUnknownBlockType>(_URLSession: P0, _didReceiveChallenge: P1, _completionHandler: P2): R;
    URLSession_didBecomeInvalidWithError<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSError>(_URLSession: P0, _didBecomeInvalidWithError: P1): R;
  }
  namespace classes {
    export interface NSURLSessionDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSURLSessionDelegateProtocol: cocoa.classes.NSURLSessionDelegateProtocol;
