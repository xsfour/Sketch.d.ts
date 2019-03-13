/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPreviewDelegateProtocol<T = any> extends NSObjectProtocol {
    colorPreviewColorSpace<R = NSColorSpace, P0 = BCColorPreview>(_colorPreviewColorSpace: P0): R;
  }
  namespace classes {
    export interface BCColorPreviewDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
