/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLabelView<T = any> extends NSControl {
    _setFocusedPart<R = void, P0 = number>(__setFocusedPart: P0): R;
    _setNeedsDisplayForPart<R = void, P0 = number>(__setNeedsDisplayForPart: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_v: P0): R;
    imagePosition<R = number>(): R;
    setImagePosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSLabelView<T = any> extends NSControl {
      alloc<R = NSLabelView>(): R;
      new: <R = NSLabelView>() => R;
    }
  }
}

declare const NSLabelView: cocoa.classes.NSLabelView;
