/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcherItem<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSwitcherItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTouchBarColorPickerSwitcherItem>(): R;
      new: <R = NSTouchBarColorPickerSwitcherItem>() => R;
      itemWithLabel_image<R = unknown, P0 = unknown, P1 = unknown>(_itemWithLabel: P0, _image: P1): R;
    }
  }
}

declare const NSTouchBarColorPickerSwitcherItem: cocoa.classes.NSTouchBarColorPickerSwitcherItem;
