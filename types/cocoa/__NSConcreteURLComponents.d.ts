/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSConcreteURLComponents<T = any> extends cocoa.NSURLComponents, cocoa.NSCopyingProtocol {
    setPercentEncodedQueryItems<R = void, P0 = unknown>(_setPercentEncodedQueryItems: P0): R;
    percentEncodedQueryItems<R = unknown>(): R;
    setQueryItems<R = void, P0 = unknown>(_setQueryItems: P0): R;
    queryItems<R = unknown>(): R;
    rangeOfFragment<R = cocoa._NSRange>(): R;
    rangeOfQuery<R = cocoa._NSRange>(): R;
    rangeOfPath<R = cocoa._NSRange>(): R;
    rangeOfPort<R = cocoa._NSRange>(): R;
    rangeOfHost<R = cocoa._NSRange>(): R;
    rangeOfPassword<R = cocoa._NSRange>(): R;
    rangeOfUser<R = cocoa._NSRange>(): R;
    rangeOfScheme<R = cocoa._NSRange>(): R;
    setPercentEncodedFragment<R = void, P0 = unknown>(_setPercentEncodedFragment: P0): R;
    percentEncodedFragment<R = unknown>(): R;
    setPercentEncodedQuery<R = void, P0 = unknown>(_setPercentEncodedQuery: P0): R;
    percentEncodedQuery<R = unknown>(): R;
    setPercentEncodedPath<R = void, P0 = unknown>(_setPercentEncodedPath: P0): R;
    percentEncodedPath<R = unknown>(): R;
    setPercentEncodedHost<R = void, P0 = unknown>(_setPercentEncodedHost: P0): R;
    percentEncodedHost<R = unknown>(): R;
    setPercentEncodedPassword<R = void, P0 = unknown>(_setPercentEncodedPassword: P0): R;
    percentEncodedPassword<R = unknown>(): R;
    setPercentEncodedUser<R = void, P0 = unknown>(_setPercentEncodedUser: P0): R;
    percentEncodedUser<R = unknown>(): R;
    setFragment<R = void, P0 = unknown>(_setFragment: P0): R;
    fragment<R = unknown>(): R;
    setQuery<R = void, P0 = unknown>(_setQuery: P0): R;
    query<R = unknown>(): R;
    setPath<R = void, P0 = unknown>(_setPath: P0): R;
    path<R = unknown>(): R;
    setPort<R = void, P0 = unknown>(_setPort: P0): R;
    port<R = unknown>(): R;
    setHost<R = void, P0 = unknown>(_setHost: P0): R;
    host<R = unknown>(): R;
    setPassword<R = void, P0 = unknown>(_setPassword: P0): R;
    password<R = unknown>(): R;
    setUser<R = void, P0 = unknown>(_setUser: P0): R;
    user<R = unknown>(): R;
    setScheme<R = void, P0 = unknown>(_setScheme: P0): R;
    scheme<R = unknown>(): R;
    string<R = unknown>(): R;
    URL<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    __cfComponents<R = cocoa.__CFURLComponents>(): R;
  }
  namespace classes {
    export interface __NSConcreteURLComponents<T = any> extends cocoa.classes.NSURLComponents, cocoa.classes.NSCopyingProtocol {
      alloc<R = __NSConcreteURLComponents>(): R;
      new: <R = __NSConcreteURLComponents>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}
