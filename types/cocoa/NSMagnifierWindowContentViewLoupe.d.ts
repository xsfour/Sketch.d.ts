/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnifierWindowContentViewLoupe<T = any> extends cocoa.NSView, cocoa.NSMagnifierWindowContentViewProtocol {
    blendedBorderColor<R = unknown>(): R;
    contentImageRep<R = cocoa.NSBitmapImageRep>(): R;
    setContentImageRep<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMagnifierWindowContentViewLoupe<T = any> extends cocoa.classes.NSView, cocoa.classes.NSMagnifierWindowContentViewProtocol {
      alloc<R = NSMagnifierWindowContentViewLoupe>(): R;
      new: <R = NSMagnifierWindowContentViewLoupe>() => R;
    }
  }
}

declare const NSMagnifierWindowContentViewLoupe: cocoa.classes.NSMagnifierWindowContentViewLoupe;
