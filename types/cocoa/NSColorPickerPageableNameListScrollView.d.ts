/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPageableNameListScrollView<T = any> extends cocoa.NSScrollView, cocoa.NSColorPickerSpectrumScrollerViewDelegateProtocol, cocoa.NSColorPickerSpectrumScrollerViewDataSourceProtocol {
    _arrowPlacement<R = number>(): R;
    _partMouseDown<R = number>(): R;
    partHit<R = number, P0 = unknown>(_partHit: P0): R;
    updateWithFocusRingForWindowKeyChange<R = void>(): R;
    isFirstAndKey<R = boolean>(): R;
    refreshScrollers<R = void>(): R;
    colorList<R = unknown>(): R;
    pageCount<R = number>(): R;
    isPaged<R = boolean>(): R;
    awakeFromNib<R = void>(): R;
    currentPage<R = number>(): R;
    _init<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPickerPageableNameListScrollView<T = any> extends cocoa.classes.NSScrollView, cocoa.classes.NSColorPickerSpectrumScrollerViewDelegateProtocol, cocoa.classes.NSColorPickerSpectrumScrollerViewDataSourceProtocol {
      alloc<R = NSColorPickerPageableNameListScrollView>(): R;
      new: <R = NSColorPickerPageableNameListScrollView>() => R;
    }
  }
}

declare const NSColorPickerPageableNameListScrollView: cocoa.classes.NSColorPickerPageableNameListScrollView;
