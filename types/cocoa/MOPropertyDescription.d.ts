/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOPropertyDescription<T = any> extends cocoa.NSObject {
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    typeEncoding<R = cocoa.NSString>(): R;
    setTypeEncoding<R = void, P0 = cocoa.NSString>(_v: P0): R;
    ivarName<R = cocoa.NSString>(): R;
    setIvarName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    getterSelector<R = string>(): R;
    setGetterSelector<R = void, P0 = string>(_v: P0): R;
    setterSelector<R = string>(): R;
    setSetterSelector<R = void, P0 = string>(_v: P0): R;
    ownershipRule<R = cocoa.MOObjCOwnershipRule>(): R;
    setOwnershipRule<R = void, P0 = cocoa.MOObjCOwnershipRule>(_v: P0): R;
    dynamic<R = boolean>(): R;
    setDynamic<R = void, P0 = boolean>(_v: P0): R;
    nonAtomic<R = boolean>(): R;
    setNonAtomic<R = void, P0 = boolean>(_v: P0): R;
    readOnly<R = boolean>(): R;
    setReadOnly<R = void, P0 = boolean>(_v: P0): R;
    weak<R = boolean>(): R;
    setWeak<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MOPropertyDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOPropertyDescription>(): R;
      new: <R = MOPropertyDescription>() => R;
    }
  }
}

declare const MOPropertyDescription: cocoa.classes.MOPropertyDescription;
