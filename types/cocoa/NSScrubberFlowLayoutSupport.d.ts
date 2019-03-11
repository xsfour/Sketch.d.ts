/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayoutSupport<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    invalidateItemsAtIndexes<R = void, P0 = unknown>(_invalidateItemsAtIndexes: P0): R;
    invalidateEverything<R = void>(): R;
    _indexOfItemAtLocation<R = number, P0 = number>(__indexOfItemAtLocation: P0): R;
    enumerateFramesForItemsInRect_usingBlock<R = void, P0 = cocoa.CGRect, P1 = cocoa.CDUnknownBlockType>(_enumerateFramesForItemsInRect: P0, _usingBlock: P1): R;
    frameForItemAtIndex<R = cocoa.CGRect, P0 = number>(_frameForItemAtIndex: P0): R;
    ensureValidLayout<R = void>(): R;
    dealloc<R = void>(): R;
    dynamicSizes<R = boolean>(): R;
    setDynamicSizes<R = void, P0 = boolean>(_v: P0): R;
    contentWidth<R = number>(): R;
    scrubberLayout<R = cocoa.NSScrubberFlowLayout>(): R;
    setScrubberLayout<R = void, P0 = cocoa.NSScrubberFlowLayout>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberFlowLayoutSupport<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSScrubberFlowLayoutSupport>(): R;
      new: <R = NSScrubberFlowLayoutSupport>() => R;
    }
  }
}

declare const NSScrubberFlowLayoutSupport: cocoa.classes.NSScrubberFlowLayoutSupport;
