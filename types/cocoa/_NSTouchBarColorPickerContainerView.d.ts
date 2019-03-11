/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerContainerView<T = any> extends cocoa.NSView, cocoa._NSTouchBarItemLayoutWrapperProtocol {
    colorSwatch<R = cocoa.NSView>(): R;
    setColorSwatch<R = void, P0 = cocoa.NSView>(_v: P0): R;
    switcherView<R = cocoa.NSTouchBarColorPickerSwitcher>(): R;
    setSwitcherView<R = void, P0 = cocoa.NSTouchBarColorPickerSwitcher>(_v: P0): R;
    colorPickerView<R = cocoa.NSTouchBarColorPickerView>(): R;
    setColorPickerView<R = void, P0 = cocoa.NSTouchBarColorPickerView>(_v: P0): R;
    isSpace<R = boolean>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    itemPosition<R = number>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerContainerView<T = any> extends cocoa.classes.NSView, cocoa.classes._NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = _NSTouchBarColorPickerContainerView>(): R;
      new: <R = _NSTouchBarColorPickerContainerView>() => R;
    }
  }
}
