/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAttributedStringAttribute<T = any> extends cocoa.NSObject, cocoa.BCJSONEncodingProtocol {
    cxx_destruct<R = void>(): R;
    attributeDictionary<R = cocoa.NSDictionary>(): R;
    setAttributeDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    range<R = cocoa._NSRange>(): R;
    setRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAttributedStringAttribute<T = any> extends cocoa.classes.NSObject, cocoa.classes.BCJSONEncodingProtocol {
      alloc<R = MSAttributedStringAttribute>(): R;
      new: <R = MSAttributedStringAttribute>() => R;
    }
  }
}

declare const MSAttributedStringAttribute: cocoa.classes.MSAttributedStringAttribute;
