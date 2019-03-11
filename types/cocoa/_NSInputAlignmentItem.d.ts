/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentItem<T = any> extends cocoa.NSObject {
    _updateRepresentativeGuides<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSInputAlignmentItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSInputAlignmentItem>(): R;
      new: <R = _NSInputAlignmentItem>() => R;
    }
  }
}
