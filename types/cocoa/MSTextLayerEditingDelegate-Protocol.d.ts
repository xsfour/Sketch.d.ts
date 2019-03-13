/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerEditingDelegateProtocol<T = any> extends NSObjectProtocol {
    adjustForegroundColor<R = void>(): R;
    adjustTextViewFrame<R = void>(): R;
  }
  namespace classes {
    export interface MSTextLayerEditingDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
