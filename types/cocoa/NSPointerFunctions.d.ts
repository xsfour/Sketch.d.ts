/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPointerFunctions<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    initWithOptions<R = unknown, P0 = number>(_initWithOptions: P0): R;
    usesWeakReadAndWriteBarriers<R = boolean>(): R;
    setUsesWeakReadAndWriteBarriers<R = void, P0 = boolean>(_v: P0): R;
    usesStrongWriteBarrier<R = boolean>(): R;
    setUsesStrongWriteBarrier<R = void, P0 = boolean>(_v: P0): R;
    relinquishFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setRelinquishFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    acquireFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setAcquireFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    descriptionFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setDescriptionFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    isEqualFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setIsEqualFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    hashFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setHashFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
    sizeFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setSizeFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_v: P0): R;
  }
  namespace classes {
    export interface NSPointerFunctions<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSPointerFunctions>(): R;
      new: <R = NSPointerFunctions>() => R;
      pointerFunctionsWithOptions<R = unknown, P0 = number>(_pointerFunctionsWithOptions: P0): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSPointerFunctions: cocoa.classes.NSPointerFunctions;
