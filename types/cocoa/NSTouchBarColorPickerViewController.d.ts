/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewController<T = any> extends cocoa.NSViewController, cocoa.NSTouchBarColorPickerSwitcherDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _pickerDidCancelTracking<R = void>(): R;
    _pickerDidEndTracking<R = void>(): R;
    _pickerWillBeginTracking<R = void>(): R;
    _pickColor<R = void, P0 = unknown>(__pickColor: P0): R;
    initWithInitialColor<R = unknown, P0 = unknown>(_initWithInitialColor: P0): R;
    allowedColorSpaces<R = cocoa.NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    colorListSupportsPressAndHoldVariants<R = boolean>(): R;
    setColorListSupportsPressAndHoldVariants<R = void, P0 = boolean>(_v: P0): R;
    colorList<R = cocoa.NSColorList>(): R;
    setColorList<R = void, P0 = cocoa.NSColorList>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = cocoa.NSColor>(): R;
    setCurrentColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    _currentPreferredPickerView<R = cocoa.NSTouchBarColorPickerView>(): R;
    workingColor<R = cocoa.NSColor>(): R;
    _swatchIsPrearmed<R = boolean>(): R;
    _shouldSwatchBeHidden<R = boolean>(): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    delegate<R = cocoa.NSTouchBarColorPickerViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTouchBarColorPickerViewControllerDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    view<R = cocoa._NSTouchBarColorPickerContainerView>(): R;
    setView<R = void, P0 = cocoa._NSTouchBarColorPickerContainerView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTouchBarColorPickerSwitcherDelegateProtocol {
      alloc<R = NSTouchBarColorPickerViewController>(): R;
      new: <R = NSTouchBarColorPickerViewController>() => R;
      keyPathsForValuesAffecting_currentPreferredPickerView<R = unknown>(): R;
      keyPathsForValuesAffectingWorkingColor<R = unknown>(): R;
      keyPathsForValuesAffecting_swatchIsPrearmed<R = unknown>(): R;
      keyPathsForValuesAffecting_shouldSwatchBeHidden<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerViewController: cocoa.classes.NSTouchBarColorPickerViewController;
