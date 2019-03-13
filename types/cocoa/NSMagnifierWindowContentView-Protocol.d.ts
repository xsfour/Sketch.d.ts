/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnifierWindowContentViewProtocol<T = any> extends NSObjectProtocol {
    setNextMode<R = void>(): R;
    color<R = NSColor>(): R;
    magnifyingGlassRadius<R = number>(): R;
    magnifyingGlassCenterPosition<R = CGPoint>(): R;
    magnifiedPointsPerPixel<R = number>(): R;
    contentImageRep<R = NSBitmapImageRep>(): R;
    setContentImageRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
  }
  namespace classes {
    export interface NSMagnifierWindowContentViewProtocol<T = any> extends NSObjectProtocol {
      magnifierViewSize<R = CGSize>(): R;
    }
  }
}
