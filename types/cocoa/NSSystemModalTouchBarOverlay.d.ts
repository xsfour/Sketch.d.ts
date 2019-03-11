/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemModalTouchBarOverlay<T = any> extends cocoa.NSObject {
    minimize<R = void>(): R;
    dismiss<R = void>(): R;
    showTouchBar_placement_systemTrayIdentifier<R = void, P0 = unknown, P1 = number, P2 = unknown>(_showTouchBar: P0, _placement: P1, _systemTrayIdentifier: P2): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSystemModalTouchBarOverlay<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSystemModalTouchBarOverlay>(): R;
      new: <R = NSSystemModalTouchBarOverlay>() => R;
    }
  }
}

declare const NSSystemModalTouchBarOverlay: cocoa.classes.NSSystemModalTouchBarOverlay;
