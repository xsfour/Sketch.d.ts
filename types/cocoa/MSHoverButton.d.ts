/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverButton<T = any> extends cocoa.NSButton {
    awakeFromNib<R = void>(): R;
    mouseIsHovering<R = boolean>(): R;
    setMouseIsHovering<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSHoverButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSHoverButton>(): R;
      new: <R = MSHoverButton>() => R;
    }
  }
}

declare const MSHoverButton: cocoa.classes.MSHoverButton;
