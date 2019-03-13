/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnifierWindowContentViewLoupe<T = any> extends NSView, NSMagnifierWindowContentViewProtocol {
    blendedBorderColor<R = unknown>(): R;
    contentImageRep<R = NSBitmapImageRep>(): R;
    setContentImageRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMagnifierWindowContentViewLoupe<T = any> extends NSView, NSMagnifierWindowContentViewProtocol {
      alloc<R = NSMagnifierWindowContentViewLoupe>(): R;
      new: <R = NSMagnifierWindowContentViewLoupe>() => R;
    }
  }
}

declare const NSMagnifierWindowContentViewLoupe: cocoa.classes.NSMagnifierWindowContentViewLoupe;
