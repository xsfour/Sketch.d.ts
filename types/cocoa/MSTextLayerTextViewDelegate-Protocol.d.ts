/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerTextViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    documentColorSpaceForTextLayerTextView<R = cocoa.NSColorSpace, P0 = cocoa.MSTextLayerTextView>(_documentColorSpaceForTextLayerTextView: P0): R;
    canvasColorSpaceForTextLayerTextView<R = cocoa.NSColorSpace, P0 = cocoa.MSTextLayerTextView>(_canvasColorSpaceForTextLayerTextView: P0): R;
  }
  namespace classes {
    export interface MSTextLayerTextViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSTextLayerTextViewDelegateProtocol: cocoa.classes.MSTextLayerTextViewDelegateProtocol;
