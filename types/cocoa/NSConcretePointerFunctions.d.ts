/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePointerFunctions<T = any> extends cocoa.NSPointerFunctions {
    usesWeakReadAndWriteBarriers<R = boolean>(): R;
    usesStrongWriteBarrier<R = boolean>(): R;
    relinquishFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    acquireFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    descriptionFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    isEqualFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    hashFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    sizeFunction<R = cocoa.CDUnknownFunctionPointerType>(): R;
    setUsesWeakReadAndWriteBarriers<R = void, P0 = boolean>(_setUsesWeakReadAndWriteBarriers: P0): R;
    setUsesStrongWriteBarrier<R = void, P0 = boolean>(_setUsesStrongWriteBarrier: P0): R;
    setRelinquishFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setRelinquishFunction: P0): R;
    setAcquireFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setAcquireFunction: P0): R;
    setDescriptionFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setDescriptionFunction: P0): R;
    setIsEqualFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setIsEqualFunction: P0): R;
    setHashFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setHashFunction: P0): R;
    setSizeFunction<R = void, P0 = cocoa.CDUnknownFunctionPointerType>(_setSizeFunction: P0): R;
    hash<R = number>(): R;
  }
  namespace classes {
    export interface NSConcretePointerFunctions<T = any> extends cocoa.classes.NSPointerFunctions {
      alloc<R = NSConcretePointerFunctions>(): R;
      new: <R = NSConcretePointerFunctions>() => R;
      initializeSlice_withOptions<R = boolean, P0 = cocoa.NSSlice, P1 = number>(_initializeSlice: P0, _withOptions: P1): R;
      initializeBackingStore_sentinel<R = void, P0 = cocoa.NSSlice, P1 = boolean>(_initializeBackingStore: P0, _sentinel: P1): R;
    }
  }
}

declare const NSConcretePointerFunctions: cocoa.classes.NSConcretePointerFunctions;
