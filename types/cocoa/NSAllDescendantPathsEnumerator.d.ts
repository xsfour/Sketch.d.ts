/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAllDescendantPathsEnumerator<T = any> extends cocoa.NSDirectoryEnumerator {
    dealloc<R = void>(): R;
    _under<R = unknown>(): R;
    level<R = number>(): R;
    currentSubdirectoryAttributes<R = unknown>(): R;
    directoryAttributes<R = unknown>(): R;
    fileAttributes<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAllDescendantPathsEnumerator<T = any> extends cocoa.classes.NSDirectoryEnumerator {
      newWithPath_prepend_attributes_cross_depth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = number>(_newWithPath: P0, _prepend: P1, _attributes: P2, _cross: P3, _depth: P4): R;
    }
  }
}

declare const NSAllDescendantPathsEnumerator: cocoa.classes.NSAllDescendantPathsEnumerator;
