/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFieldPlugin<T = any> extends _NSValueBinderPlugin {
    editingColorAdjustableObject<R = unknown, P0 = unknown>(_editingColorAdjustableObject: P0): R;
    acceptsStyleChanges<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSTextFieldPlugin<T = any> extends _NSValueBinderPlugin {
      alloc<R = _NSTextFieldPlugin>(): R;
      new: <R = _NSTextFieldPlugin>() => R;
    }
  }
}
