/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileWindowProxyLayer<T = any> extends CALayer {
    copyWithSameContents<R = unknown>(): R;
    window<R = unknown>(): R;
    windowID<R = number>(): R;
    initWithWindowID<R = unknown, P0 = number>(_initWithWindowID: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSFullScreenTileWindowProxyLayer<T = any> extends CALayer {  }
  }
}
