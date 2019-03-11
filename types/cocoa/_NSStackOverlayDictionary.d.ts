/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStackOverlayDictionary<T = any> extends cocoa.NSDictionary {
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    initWithBase_overlay<R = unknown, P0 = unknown, P1 = unknown>(_initWithBase: P0, _overlay: P1): R;
  }
  namespace classes {
    export interface _NSStackOverlayDictionary<T = any> extends cocoa.classes.NSDictionary {
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}
