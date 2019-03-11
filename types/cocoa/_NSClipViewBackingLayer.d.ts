/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClipViewBackingLayer<T = any> extends cocoa._NSViewBackingLayer {
    setBounds<R = void, P0 = cocoa.CGRect>(_setBounds: P0): R;
  }
  namespace classes {
    export interface _NSClipViewBackingLayer<T = any> extends cocoa.classes._NSViewBackingLayer {  }
  }
}
