/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputContextRTISystemDelegate<T = any> extends cocoa.NSObject, cocoa.RTIInputSystemDelegateProtocol {
    initWithSystemService<R = unknown, P0 = unknown>(_initWithSystemService: P0): R;
    rtiInputSystemService<R = cocoa.RTIInputSystemService>(): R;
    setRtiInputSystemService<R = void, P0 = cocoa.RTIInputSystemService>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface __NSTextInputContextRTISystemDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.RTIInputSystemDelegateProtocol {
      alloc<R = __NSTextInputContextRTISystemDelegate>(): R;
      new: <R = __NSTextInputContextRTISystemDelegate>() => R;
    }
  }
}
