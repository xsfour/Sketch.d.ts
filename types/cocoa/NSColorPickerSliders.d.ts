/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSliders<T = any> extends cocoa.NSColorPicker, cocoa.NSColorPickingCustomProtocol {
    _restoreMode<R = void>(): R;
    _savedMode<R = number>(): R;
    _saveMode<R = void>(): R;
    forceSetMode<R = void, P0 = number>(_forceSetMode: P0): R;
    _adjustToMode<R = void>(): R;
    replaceSubviewWith<R = void, P0 = unknown>(_replaceSubviewWith: P0): R;
    _redisplayColorProfileButtonIfNeeded<R = void>(): R;
    takeColorSpaceFrom<R = void, P0 = unknown>(_takeColorSpaceFrom: P0): R;
    showHSBView<R = void, P0 = unknown>(_showHSBView: P0): R;
    showCMYKView<R = void, P0 = unknown>(_showCMYKView: P0): R;
    showRGBView<R = void, P0 = unknown>(_showRGBView: P0): R;
    showGreyScaleView<R = void, P0 = unknown>(_showGreyScaleView: P0): R;
    _removePopUpWithTag<R = void, P0 = number>(__removePopUpWithTag: P0): R;
    _selectPopUpWithTag<R = void, P0 = number>(__selectPopUpWithTag: P0): R;
    worksWhenModal<R = boolean>(): R;
    cmykSliders<R = cocoa.NSColorSpaceSliders>(): R;
    setCmykSliders<R = void, P0 = cocoa.NSColorSpaceSliders>(_v: P0): R;
    hsbSliders<R = cocoa.NSColorSpaceSliders>(): R;
    setHsbSliders<R = void, P0 = cocoa.NSColorSpaceSliders>(_v: P0): R;
    rgbSliders<R = cocoa.NSColorSpaceSliders>(): R;
    setRgbSliders<R = void, P0 = cocoa.NSColorSpaceSliders>(_v: P0): R;
    greySliders<R = cocoa.NSColorSpaceSliders>(): R;
    setGreySliders<R = void, P0 = cocoa.NSColorSpaceSliders>(_v: P0): R;
    slidersView<R = cocoa.NSView>(): R;
    setSlidersView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerSliders<T = any> extends cocoa.classes.NSColorPicker, cocoa.classes.NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerSliders>(): R;
      new: <R = NSColorPickerSliders>() => R;
    }
  }
}

declare const NSColorPickerSliders: cocoa.classes.NSColorPickerSliders;
