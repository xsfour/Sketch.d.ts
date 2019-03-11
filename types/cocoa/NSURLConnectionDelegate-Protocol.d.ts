/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionDelegateProtocol<T = any> {
    connection_didCancelAuthenticationChallenge<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLAuthenticationChallenge>(_connection: P0, _didCancelAuthenticationChallenge: P1): R;
    connection_didReceiveAuthenticationChallenge<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLAuthenticationChallenge>(_connection: P0, _didReceiveAuthenticationChallenge: P1): R;
    connection_canAuthenticateAgainstProtectionSpace<R = boolean, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLProtectionSpace>(_connection: P0, _canAuthenticateAgainstProtectionSpace: P1): R;
    connection_willSendRequestForAuthenticationChallenge<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSURLAuthenticationChallenge>(_connection: P0, _willSendRequestForAuthenticationChallenge: P1): R;
    connectionShouldUseCredentialStorage<R = boolean, P0 = cocoa.NSURLConnection>(_connectionShouldUseCredentialStorage: P0): R;
    connection_didFailWithError<R = void, P0 = cocoa.NSURLConnection, P1 = cocoa.NSError>(_connection: P0, _didFailWithError: P1): R;
  }
  namespace classes {
    export interface NSURLConnectionDelegateProtocol<T = any> {  }
  }
}

declare const NSURLConnectionDelegateProtocol: cocoa.classes.NSURLConnectionDelegateProtocol;
