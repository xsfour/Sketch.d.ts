/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewLayerContentScaleDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = cocoa.CALayer, P1 = number, P2 = cocoa.NSWindow>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
  }
  namespace classes {
    export interface NSViewLayerContentScaleDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSViewLayerContentScaleDelegateProtocol: cocoa.classes.NSViewLayerContentScaleDelegateProtocol;
