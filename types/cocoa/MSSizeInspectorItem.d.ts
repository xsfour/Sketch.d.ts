/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSizeInspectorItem<T = any> extends cocoa.MSBaseSizeInspectorItem {
    updateButtonState<R = void, P0 = unknown>(_updateButtonState: P0): R;
    flipVerticalButton<R = cocoa.NSButton>(): R;
    setFlipVerticalButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flipHorizontalButton<R = cocoa.NSButton>(): R;
    setFlipHorizontalButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSSizeInspectorItem<T = any> extends cocoa.classes.MSBaseSizeInspectorItem {
      alloc<R = MSSizeInspectorItem>(): R;
      new: <R = MSSizeInspectorItem>() => R;
    }
  }
}

declare const MSSizeInspectorItem: cocoa.classes.MSSizeInspectorItem;
