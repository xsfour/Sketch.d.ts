/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentItemAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    segmentItemView<R = cocoa.NSSegmentItemView>(): R;
    setSegmentItemView<R = void, P0 = cocoa.NSSegmentItemView>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSegmentItemAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSegmentItemAuxiliary>(): R;
      new: <R = _NSSegmentItemAuxiliary>() => R;
    }
  }
}
