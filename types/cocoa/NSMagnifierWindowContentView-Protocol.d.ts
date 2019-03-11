/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnifierWindowContentViewProtocol<T = any> extends cocoa.NSObjectProtocol {
    setNextMode<R = void>(): R;
    color<R = cocoa.NSColor>(): R;
    magnifyingGlassRadius<R = number>(): R;
    magnifyingGlassCenterPosition<R = cocoa.CGPoint>(): R;
    magnifiedPointsPerPixel<R = number>(): R;
    contentImageRep<R = cocoa.NSBitmapImageRep>(): R;
    setContentImageRep<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
  }
  namespace classes {
    export interface NSMagnifierWindowContentViewProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      magnifierViewSize<R = cocoa.CGSize>(): R;
    }
  }
}

declare const NSMagnifierWindowContentViewProtocol: cocoa.classes.NSMagnifierWindowContentViewProtocol;
