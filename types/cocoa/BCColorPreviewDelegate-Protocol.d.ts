/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPreviewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    colorPreviewColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.BCColorPreview>(_colorPreviewColorSpace: P0): R;
  }
  namespace classes {
    export interface BCColorPreviewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCColorPreviewDelegateProtocol: cocoa.classes.BCColorPreviewDelegateProtocol;
