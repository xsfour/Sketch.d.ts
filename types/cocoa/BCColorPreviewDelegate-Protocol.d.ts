/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPreviewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorPreviewColorSpace<R = NSColorSpace, P0 = BCColorPreview>(_colorPreviewColorSpace: P0): R;
  }
  namespace BCColorPreviewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
