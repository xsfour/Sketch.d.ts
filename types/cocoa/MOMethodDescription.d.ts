/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOMethodDescription<T = any> extends NSObject {
    selector<R = string>(): R;
    typeEncoding<R = NSString>(): R;
  }
  namespace classes {
    export interface MOMethodDescription<T = any> extends NSObject {
      alloc<R = MOMethodDescription>(): R;
      new: <R = MOMethodDescription>() => R;
      methodWithSelector_typeEncoding<R = MOMethodDescription, P0 = string, P1 = NSString>(_methodWithSelector: P0, _typeEncoding: P1): R;
    }
  }
}

declare const MOMethodDescription: cocoa.classes.MOMethodDescription;
