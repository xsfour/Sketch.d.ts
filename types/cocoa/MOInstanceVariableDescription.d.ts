/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOInstanceVariableDescription<T = any> extends NSObject {
    name<R = NSString>(): R;
    typeEncoding<R = NSString>(): R;
  }
  namespace classes {
    export interface MOInstanceVariableDescription<T = any> extends NSObject {
      alloc<R = MOInstanceVariableDescription>(): R;
      new: <R = MOInstanceVariableDescription>() => R;
      instanceVariableWithName_typeEncoding<R = MOInstanceVariableDescription, P0 = NSString, P1 = NSString>(_instanceVariableWithName: P0, _typeEncoding: P1): R;
    }
  }
}

declare const MOInstanceVariableDescription: cocoa.classes.MOInstanceVariableDescription;
