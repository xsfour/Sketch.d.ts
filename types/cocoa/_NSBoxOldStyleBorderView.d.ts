/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxOldStyleBorderView<T = any> extends cocoa.NSView {
    _isOneSidedGrooveBorder<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    shouldDrawFill<R = boolean>(): R;
    setShouldDrawFill<R = void, P0 = boolean>(_v: P0): R;
    titleCutoutRect<R = cocoa.CGRect>(): R;
    setTitleCutoutRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    borderType<R = number>(): R;
    setBorderType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBoxOldStyleBorderView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSBoxOldStyleBorderView>(): R;
      new: <R = _NSBoxOldStyleBorderView>() => R;
    }
  }
}
