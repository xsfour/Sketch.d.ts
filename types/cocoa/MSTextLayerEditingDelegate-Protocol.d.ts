/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerEditingDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    adjustForegroundColor<R = void>(): R;
    adjustTextViewFrame<R = void>(): R;
  }
  namespace classes {
    export interface MSTextLayerEditingDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSTextLayerEditingDelegateProtocol: cocoa.classes.MSTextLayerEditingDelegateProtocol;
