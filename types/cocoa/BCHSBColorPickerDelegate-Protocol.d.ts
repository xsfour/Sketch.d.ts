/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPickerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    hsbColorPickerPreviewColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.BCHSBColorPicker>(_hsbColorPickerPreviewColorSpace: P0): R;
    hsbColorPickerDocumentColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.BCHSBColorPicker>(_hsbColorPickerDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface BCHSBColorPickerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCHSBColorPickerDelegateProtocol: cocoa.classes.BCHSBColorPickerDelegateProtocol;
