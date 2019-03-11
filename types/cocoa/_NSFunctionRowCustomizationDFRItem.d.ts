/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationDFRItem<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    invalidateSizes<R = void>(): R;
    _updateMinMaxSizeIfNeeded<R = void>(): R;
    hash<R = number>(): R;
    isCenteredInTree<R = boolean, P0 = unknown>(_isCenteredInTree: P0): R;
    dealloc<R = void>(): R;
    requiresExactMinSize<R = boolean>(): R;
    setRequiresExactMinSize<R = void, P0 = boolean>(_v: P0): R;
    section<R = number>(): R;
    setSection<R = void, P0 = number>(_v: P0): R;
    compressionLayout<R = cocoa.NSCompressionGroupLayout>(): R;
    setCompressionLayout<R = void, P0 = cocoa.NSCompressionGroupLayout>(_v: P0): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    itemView<R = cocoa.NSView>(): R;
    representedItem<R = cocoa.NSTouchBarItem>(): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationDFRItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFunctionRowCustomizationDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationDFRItem>() => R;
    }
  }
}
