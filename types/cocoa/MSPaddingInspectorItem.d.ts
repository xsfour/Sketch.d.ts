/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPaddingInspectorItem<T = any> extends MSInspectorItem {
    updateView<R = void>(): R;
    wantsInsetSeparator<R = boolean>(): R;
    setWantsInsetSeparator<R = void, P0 = boolean>(_v: P0): R;
    wantsSeparator<R = boolean>(): R;
    setWantsSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSPaddingInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSPaddingInspectorItem>(): R;
      new: <R = MSPaddingInspectorItem>() => R;
      paddingWithHeight<R = unknown, P0 = number>(_paddingWithHeight: P0): R;
    }
  }
}

declare const MSPaddingInspectorItem: cocoa.classes.MSPaddingInspectorItem;
