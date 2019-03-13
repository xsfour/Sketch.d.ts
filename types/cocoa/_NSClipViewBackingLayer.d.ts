/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClipViewBackingLayer<T = any> extends _NSViewBackingLayer {
    setBounds<R = void, P0 = CGRect>(_setBounds: P0): R;
  }
  namespace classes {
    export interface _NSClipViewBackingLayer<T = any> extends _NSViewBackingLayer {  }
  }
}
