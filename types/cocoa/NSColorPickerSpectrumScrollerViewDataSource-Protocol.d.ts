/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSpectrumScrollerViewDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    colorListForSpectrumView<R = cocoa.NSColorList, P0 = cocoa.NSColorPickerSpectrumScrollerView>(_colorListForSpectrumView: P0): R;
    pageCountForSpectrumView<R = number, P0 = cocoa.NSColorPickerSpectrumScrollerView>(_pageCountForSpectrumView: P0): R;
    currentPageForSpectrumView<R = number, P0 = cocoa.NSColorPickerSpectrumScrollerView>(_currentPageForSpectrumView: P0): R;
  }
  namespace classes {
    export interface NSColorPickerSpectrumScrollerViewDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSColorPickerSpectrumScrollerViewDataSourceProtocol: cocoa.classes.NSColorPickerSpectrumScrollerViewDataSourceProtocol;
