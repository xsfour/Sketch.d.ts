/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSpectrumScrollerViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    pageClicked_inSpectrumView<R = void, P0 = number, P1 = cocoa.NSColorPickerSpectrumScrollerView>(_pageClicked: P0, _inSpectrumView: P1): R;
  }
  namespace classes {
    export interface NSColorPickerSpectrumScrollerViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSColorPickerSpectrumScrollerViewDelegateProtocol: cocoa.classes.NSColorPickerSpectrumScrollerViewDelegateProtocol;
