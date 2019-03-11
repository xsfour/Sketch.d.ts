/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableGroupRowSupport<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    groupViewBackgrounds<R = cocoa.NSMutableDictionary>(): R;
    setGroupViewBackgrounds<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    floatingGroupRowView<R = cocoa.NSTableRowView>(): R;
    setFloatingGroupRowView<R = void, P0 = cocoa.NSTableRowView>(_v: P0): R;
    floatingGroupRow<R = number>(): R;
    setFloatingGroupRow<R = void, P0 = number>(_v: P0): R;
    groupRowIndexes<R = cocoa.NSMutableIndexSet>(): R;
    setGroupRowIndexes<R = void, P0 = cocoa.NSMutableIndexSet>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTableGroupRowSupport<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTableGroupRowSupport>(): R;
      new: <R = _NSTableGroupRowSupport>() => R;
    }
  }
}
