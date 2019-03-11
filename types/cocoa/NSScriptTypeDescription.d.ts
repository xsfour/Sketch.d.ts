/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptTypeDescription<T = any> extends cocoa.NSObject {
    errorExpectedTypeDescriptor<R = unknown>(): R;
    coercedValue<R = unknown, P0 = unknown>(_coercedValue: P0): R;
    matchesAppleEventCode<R = boolean, P0 = number>(_matchesAppleEventCode: P0): R;
    objcDescriptorCreationMethodSelector<R = string>(): R;
    objcCreationMethodSelector<R = string>(): R;
    objcClassName<R = unknown>(): R;
    classDescription<R = unknown>(): R;
    isList<R = boolean>(): R;
    isEnumeration<R = boolean>(): R;
    appleEventCode<R = number>(): R;
    name<R = unknown>(): R;
    reconcileToSuiteRegistry_suiteName<R = void, P0 = unknown, P1 = unknown>(_reconcileToSuiteRegistry: P0, _suiteName: P1): R;
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScriptTypeDescription<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSScriptTypeDescription>(): R;
      new: <R = NSScriptTypeDescription>() => R;
    }
  }
}

declare const NSScriptTypeDescription: cocoa.classes.NSScriptTypeDescription;
