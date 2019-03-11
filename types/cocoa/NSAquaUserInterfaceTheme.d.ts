/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAquaUserInterfaceTheme<T = any> extends cocoa.NSUserInterfaceTheme {
    _ruleForView_comparedToView_withEdge<R = cocoa.NSIBSnapSet, P0 = unknown, P1 = unknown, P2 = unknown>(__ruleForView: P0, _comparedToView: P1, _withEdge: P2): R;
    _ruleForView_comparedToContainer_withEdge<R = cocoa.NSIBSnapSet, P0 = unknown, P1 = unknown, P2 = unknown>(__ruleForView: P0, _comparedToContainer: P1, _withEdge: P2): R;
  }
  namespace classes {
    export interface NSAquaUserInterfaceTheme<T = any> extends cocoa.classes.NSUserInterfaceTheme {
      alloc<R = NSAquaUserInterfaceTheme>(): R;
      new: <R = NSAquaUserInterfaceTheme>() => R;
    }
  }
}

declare const NSAquaUserInterfaceTheme: cocoa.classes.NSAquaUserInterfaceTheme;
