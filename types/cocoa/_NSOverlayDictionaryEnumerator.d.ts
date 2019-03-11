/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOverlayDictionaryEnumerator<T = any> extends cocoa.NSEnumerator {
    nextObject<R = unknown>(): R;
    allObjects<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBaseKeys_overlayKeys<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseKeys: P0, _overlayKeys: P1): R;
  }
  namespace classes {
    export interface _NSOverlayDictionaryEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}
