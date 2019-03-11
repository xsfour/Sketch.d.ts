/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLComponents<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    URLRelativeToURL<R = unknown, P0 = unknown>(_URLRelativeToURL: P0): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithURL_resolvingAgainstBaseURL<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _resolvingAgainstBaseURL: P1): R;
    percentEncodedQueryItems<R = cocoa.NSArray>(): R;
    setPercentEncodedQueryItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    queryItems<R = cocoa.NSArray>(): R;
    setQueryItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    rangeOfFragment<R = cocoa._NSRange>(): R;
    rangeOfQuery<R = cocoa._NSRange>(): R;
    rangeOfPath<R = cocoa._NSRange>(): R;
    rangeOfPort<R = cocoa._NSRange>(): R;
    rangeOfHost<R = cocoa._NSRange>(): R;
    rangeOfPassword<R = cocoa._NSRange>(): R;
    rangeOfUser<R = cocoa._NSRange>(): R;
    rangeOfScheme<R = cocoa._NSRange>(): R;
    percentEncodedFragment<R = cocoa.NSString>(): R;
    setPercentEncodedFragment<R = void, P0 = cocoa.NSString>(_v: P0): R;
    percentEncodedQuery<R = cocoa.NSString>(): R;
    setPercentEncodedQuery<R = void, P0 = cocoa.NSString>(_v: P0): R;
    percentEncodedPath<R = cocoa.NSString>(): R;
    setPercentEncodedPath<R = void, P0 = cocoa.NSString>(_v: P0): R;
    percentEncodedHost<R = cocoa.NSString>(): R;
    setPercentEncodedHost<R = void, P0 = cocoa.NSString>(_v: P0): R;
    percentEncodedPassword<R = cocoa.NSString>(): R;
    setPercentEncodedPassword<R = void, P0 = cocoa.NSString>(_v: P0): R;
    percentEncodedUser<R = cocoa.NSString>(): R;
    setPercentEncodedUser<R = void, P0 = cocoa.NSString>(_v: P0): R;
    fragment<R = cocoa.NSString>(): R;
    setFragment<R = void, P0 = cocoa.NSString>(_v: P0): R;
    query<R = cocoa.NSString>(): R;
    setQuery<R = void, P0 = cocoa.NSString>(_v: P0): R;
    path<R = cocoa.NSString>(): R;
    setPath<R = void, P0 = cocoa.NSString>(_v: P0): R;
    port<R = cocoa.NSNumber>(): R;
    setPort<R = void, P0 = cocoa.NSNumber>(_v: P0): R;
    host<R = cocoa.NSString>(): R;
    setHost<R = void, P0 = cocoa.NSString>(_v: P0): R;
    password<R = cocoa.NSString>(): R;
    setPassword<R = void, P0 = cocoa.NSString>(_v: P0): R;
    user<R = cocoa.NSString>(): R;
    setUser<R = void, P0 = cocoa.NSString>(_v: P0): R;
    scheme<R = cocoa.NSString>(): R;
    setScheme<R = void, P0 = cocoa.NSString>(_v: P0): R;
    string<R = cocoa.NSString>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface NSURLComponents<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSURLComponents>(): R;
      new: <R = NSURLComponents>() => R;
      componentsWithString<R = unknown, P0 = unknown>(_componentsWithString: P0): R;
      componentsWithURL_resolvingAgainstBaseURL<R = unknown, P0 = unknown, P1 = boolean>(_componentsWithURL: P0, _resolvingAgainstBaseURL: P1): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSURLComponents: cocoa.classes.NSURLComponents;
