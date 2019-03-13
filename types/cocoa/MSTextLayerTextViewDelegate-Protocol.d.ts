/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerTextViewDelegateProtocol<T = any> extends NSObjectProtocol {
    documentColorSpaceForTextLayerTextView<R = NSColorSpace, P0 = MSTextLayerTextView>(_documentColorSpaceForTextLayerTextView: P0): R;
    canvasColorSpaceForTextLayerTextView<R = NSColorSpace, P0 = MSTextLayerTextView>(_canvasColorSpaceForTextLayerTextView: P0): R;
  }
  namespace classes {
    export interface MSTextLayerTextViewDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
