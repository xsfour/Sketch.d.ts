/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberLayout<T = any> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    numberOfItems<R = number>(): R;
    selectedItem<R = number>(): R;
    visibleContentSize<R = CGSize>(): R;
    shouldInvalidateLayoutForChangeFromVisibleRect_toVisibleRect<R = boolean, P0 = CGRect, P1 = CGRect>(_shouldInvalidateLayoutForChangeFromVisibleRect: P0, _toVisibleRect: P1): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForItemsInRect: P0): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    prepareLayout<R = void>(): R;
    _layoutAttributesForItemsInRect_withState<R = unknown, P0 = CGRect, P1 = unknown>(__layoutAttributesForItemsInRect: P0, _withState: P1): R;
    _layoutAttributesForItemAtIndex_withState<R = unknown, P0 = number, P1 = unknown>(__layoutAttributesForItemAtIndex: P0, _withState: P1): R;
    _shouldMirrorForRTL<R = boolean>(): R;
    _prepareLayoutIfNeeded<R = void>(): R;
    invalidateLayout<R = void>(): R;
    _setScrubber<R = void, P0 = unknown>(__setScrubber: P0): R;
    dealloc<R = void>(): R;
    automaticallyMirrorsInRightToLeftLayout<R = boolean>(): R;
    shouldInvalidateLayoutForHighlightChange<R = boolean>(): R;
    shouldInvalidateLayoutForSelectionChange<R = boolean>(): R;
    scrubberContentSize<R = CGSize>(): R;
    visibleRect<R = CGRect>(): R;
    scrubber<R = NSScrubber>(): R;
  }
  namespace classes {
    export interface NSScrubberLayout<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSScrubberLayout>(): R;
      new: <R = NSScrubberLayout>() => R;
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSScrubberLayout: cocoa.classes.NSScrubberLayout;
