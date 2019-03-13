/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDebugCursorView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    cursorPoint<R = CGPoint>(): R;
    setCursorPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationPreviewDebugCursorView<T = any> extends NSView {
      alloc<R = _NSTouchBarCustomizationPreviewDebugCursorView>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDebugCursorView>() => R;
    }
  }
}
