/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectProtocol<T = any> {
    zone<R = cocoa._NSZone>(): R;
    retainCount<R = number>(): R;
    autorelease<R = unknown>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    respondsToSelector<R = boolean, P0 = string>(_respondsToSelector: P0): R;
    conformsToProtocol<R = boolean, P0 = cocoa.Protocol>(_conformsToProtocol: P0): R;
    isMemberOfClass<R = boolean, P0 = unknown>(_isMemberOfClass: P0): R;
    isKindOfClass<R = boolean, P0 = unknown>(_isKindOfClass: P0): R;
    isProxy<R = boolean>(): R;
    performSelector_withObject_withObject<R = unknown, P0 = string, P1 = unknown, P2 = unknown>(_performSelector: P0, _withObject: P1, _withObject1: P2): R;
    performSelector_withObject<R = unknown, P0 = string, P1 = unknown>(_performSelector: P0, _withObject: P1): R;
    performSelector<R = unknown, P0 = string>(_performSelector: P0): R;
    self<R = unknown>(): R;
    class<R = unknown>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    description<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSObjectProtocol<T = any> {  }
  }
}

declare const NSObjectProtocol: cocoa.classes.NSObjectProtocol;
