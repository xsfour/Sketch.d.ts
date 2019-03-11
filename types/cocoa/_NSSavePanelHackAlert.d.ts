/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelHackAlert<T = any> extends cocoa.NSAlert {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
  }
  namespace classes {
    export interface _NSSavePanelHackAlert<T = any> extends cocoa.classes.NSAlert {
      alloc<R = _NSSavePanelHackAlert>(): R;
      new: <R = _NSSavePanelHackAlert>() => R;
    }
  }
}
