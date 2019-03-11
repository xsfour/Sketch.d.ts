/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartPreviewButtonDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    stylePartPreviewButtonPreviewColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.MSStylePartPreviewButton>(_stylePartPreviewButtonPreviewColorSpace: P0): R;
  }
  namespace classes {
    export interface MSStylePartPreviewButtonDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSStylePartPreviewButtonDelegateProtocol: cocoa.classes.MSStylePartPreviewButtonDelegateProtocol;
