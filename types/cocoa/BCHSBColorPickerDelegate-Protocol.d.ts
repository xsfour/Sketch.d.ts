/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPickerDelegateProtocol<T = any> extends NSObjectProtocol {
    hsbColorPickerPreviewColorSpace<R = NSColorSpace, P0 = BCHSBColorPicker>(_hsbColorPickerPreviewColorSpace: P0): R;
    hsbColorPickerDocumentColorSpace<R = NSColorSpace, P0 = BCHSBColorPicker>(_hsbColorPickerDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface BCHSBColorPickerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
