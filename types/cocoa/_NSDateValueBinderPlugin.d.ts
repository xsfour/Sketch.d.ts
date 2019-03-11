/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDateValueBinderPlugin<T = any> extends cocoa._NSValueBinderPlugin {
    editingColorAdjustableObject<R = unknown, P0 = unknown>(_editingColorAdjustableObject: P0): R;
  }
  namespace classes {
    export interface _NSDateValueBinderPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSDateValueBinderPlugin>(): R;
      new: <R = _NSDateValueBinderPlugin>() => R;
    }
  }
}
