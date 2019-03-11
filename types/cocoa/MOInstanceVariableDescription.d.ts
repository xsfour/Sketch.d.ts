/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOInstanceVariableDescription<T = any> extends cocoa.NSObject {
    name<R = cocoa.NSString>(): R;
    typeEncoding<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MOInstanceVariableDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOInstanceVariableDescription>(): R;
      new: <R = MOInstanceVariableDescription>() => R;
      instanceVariableWithName_typeEncoding<R = cocoa.MOInstanceVariableDescription, P0 = cocoa.NSString, P1 = cocoa.NSString>(_instanceVariableWithName: P0, _typeEncoding: P1): R;
    }
  }
}

declare const MOInstanceVariableDescription: cocoa.classes.MOInstanceVariableDescription;
