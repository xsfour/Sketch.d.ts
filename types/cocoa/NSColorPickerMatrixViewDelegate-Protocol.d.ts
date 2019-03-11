/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerMatrixViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    matrixColorPicker_highlightColorForColor<R = cocoa.NSColor, P0 = cocoa.NSColorPickerMatrixView, P1 = cocoa.NSColor>(_matrixColorPicker: P0, _highlightColorForColor: P1): R;
    matrixColorPicker_selectedColor<R = void, P0 = cocoa.NSColorPickerMatrixView, P1 = cocoa.NSColor>(_matrixColorPicker: P0, _selectedColor: P1): R;
  }
  namespace classes {
    export interface NSColorPickerMatrixViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSColorPickerMatrixViewDelegateProtocol: cocoa.classes.NSColorPickerMatrixViewDelegateProtocol;
