/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewController<T = any> extends NSViewController, NSTouchBarColorPickerSwitcherDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _pickerDidCancelTracking<R = void>(): R;
    _pickerDidEndTracking<R = void>(): R;
    _pickerWillBeginTracking<R = void>(): R;
    _pickColor<R = void, P0 = unknown>(__pickColor: P0): R;
    initWithInitialColor<R = unknown, P0 = unknown>(_initWithInitialColor: P0): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    colorListSupportsPressAndHoldVariants<R = boolean>(): R;
    setColorListSupportsPressAndHoldVariants<R = void, P0 = boolean>(_v: P0): R;
    colorList<R = NSColorList>(): R;
    setColorList<R = void, P0 = NSColorList>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
    _currentPreferredPickerView<R = NSTouchBarColorPickerView>(): R;
    workingColor<R = NSColor>(): R;
    _swatchIsPrearmed<R = boolean>(): R;
    _shouldSwatchBeHidden<R = boolean>(): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    delegate<R = NSTouchBarColorPickerViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarColorPickerViewControllerDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    view<R = _NSTouchBarColorPickerContainerView>(): R;
    setView<R = void, P0 = _NSTouchBarColorPickerContainerView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerViewController<T = any> extends NSViewController, NSTouchBarColorPickerSwitcherDelegateProtocol {
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
