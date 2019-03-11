/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelAccessoryContainer<T = any> extends cocoa.NSView {
    _commonInit<R = void>(): R;
    accessoryPreferredSize<R = cocoa.CGSize>(): R;
    setAccessoryPreferredSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSavePanelAccessoryContainer<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSSavePanelAccessoryContainer>(): R;
      new: <R = _NSSavePanelAccessoryContainer>() => R;
    }
  }
}
