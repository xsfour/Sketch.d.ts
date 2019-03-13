/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelAccessoryContainer<T = any> extends NSView {
    _commonInit<R = void>(): R;
    accessoryPreferredSize<R = CGSize>(): R;
    setAccessoryPreferredSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSavePanelAccessoryContainer<T = any> extends NSView {
      alloc<R = _NSSavePanelAccessoryContainer>(): R;
      new: <R = _NSSavePanelAccessoryContainer>() => R;
    }
  }
}
