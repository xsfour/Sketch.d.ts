/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOMethodDescription<T = any> extends cocoa.NSObject {
    selector<R = string>(): R;
    typeEncoding<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MOMethodDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOMethodDescription>(): R;
      new: <R = MOMethodDescription>() => R;
      methodWithSelector_typeEncoding<R = cocoa.MOMethodDescription, P0 = string, P1 = cocoa.NSString>(_methodWithSelector: P0, _typeEncoding: P1): R;
    }
  }
}

declare const MOMethodDescription: cocoa.classes.MOMethodDescription;
