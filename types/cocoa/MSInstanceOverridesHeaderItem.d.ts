/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInstanceOverridesHeaderItem<T = any> extends MSInspectorItem {
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    updateTrashIcon<R = void>(): R;
    trash<R = NSButton>(): R;
    setTrash<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSInstanceOverridesHeaderItem<T = any> extends MSInspectorItem {
      alloc<R = MSInstanceOverridesHeaderItem>(): R;
      new: <R = MSInstanceOverridesHeaderItem>() => R;
    }
  }
}

declare const MSInstanceOverridesHeaderItem: cocoa.classes.MSInstanceOverridesHeaderItem;
