/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    hsbColorPickerPreviewColorSpace<R = NSColorSpace, P0 = BCHSBColorPicker>(_hsbColorPickerPreviewColorSpace: P0): R;
    hsbColorPickerDocumentColorSpace<R = NSColorSpace, P0 = BCHSBColorPicker>(_hsbColorPickerDocumentColorSpace: P0): R;
  }
  namespace BCHSBColorPickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
