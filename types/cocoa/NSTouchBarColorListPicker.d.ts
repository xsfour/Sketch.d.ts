/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPicker<T = any> extends cocoa.NSControl, cocoa.NSScrubberDelegateProtocol, cocoa.NSScrubberDataSourceProtocol, cocoa.NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol, cocoa.NSGestureRecognizerDelegateProtocol, cocoa.NSTouchBarColorPickerViewProtocol {
    setContinuous<R = void, P0 = boolean>(_setContinuous: P0): R;
    isContinuous<R = boolean>(): R;
    longPress<R = void, P0 = unknown>(_longPress: P0): R;
    _didFinishInteractingWithScrubber_cancelled<R = void, P0 = unknown, P1 = boolean>(__didFinishInteractingWithScrubber: P0, _cancelled: P1): R;
    _setCurrentColorWithScrubberIndex<R = void, P0 = number>(__setCurrentColorWithScrubberIndex: P0): R;
    _effectiveSelectedColorIndex<R = number>(): R;
    _colorKeyForColorAtIndex<R = unknown, P0 = number>(__colorKeyForColorAtIndex: P0): R;
    _effectiveColorCount<R = number>(): R;
    _setCurrentColor_updateScrubber<R = void, P0 = unknown, P1 = boolean>(__setCurrentColor: P0, _updateScrubber: P1): R;
    _colorListDidChange<R = void, P0 = unknown>(__colorListDidChange: P0): R;
    _autounbinder<R = unknown>(): R;
    supportsPressAndHoldVariants<R = boolean>(): R;
    setSupportsPressAndHoldVariants<R = void, P0 = boolean>(_v: P0): R;
    allowedColorSpaces<R = cocoa.NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = cocoa.NSColor>(): R;
    setCurrentColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    selectedColorKey<R = cocoa.NSString>(): R;
    setSelectedColorKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
    colorList<R = cocoa.NSColorList>(): R;
    setColorList<R = void, P0 = cocoa.NSColorList>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPicker<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSScrubberDelegateProtocol, cocoa.classes.NSScrubberDataSourceProtocol, cocoa.classes.NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol, cocoa.classes.NSGestureRecognizerDelegateProtocol, cocoa.classes.NSTouchBarColorPickerViewProtocol {
      alloc<R = NSTouchBarColorListPicker>(): R;
      new: <R = NSTouchBarColorListPicker>() => R;
      thumbnailWithSize_inView<R = unknown, P0 = cocoa.CGSize, P1 = unknown>(_thumbnailWithSize: P0, _inView: P1): R;
      keyPathsForValuesAffectingCurrentColor<R = unknown>(): R;
      automaticallyNotifiesObserversOfCurrentColor<R = boolean>(): R;
      keyPathsForValuesAffectingSelectedColorKey<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorListPicker: cocoa.classes.NSTouchBarColorListPicker;
