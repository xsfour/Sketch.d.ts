/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentItemAuxiliary<T = any> extends NSObject {
    dealloc<R = void>(): R;
    segmentItemView<R = NSSegmentItemView>(): R;
    setSegmentItemView<R = void, P0 = NSSegmentItemView>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSegmentItemAuxiliary<T = any> extends NSObject {
      alloc<R = _NSSegmentItemAuxiliary>(): R;
      new: <R = _NSSegmentItemAuxiliary>() => R;
    }
  }
}
