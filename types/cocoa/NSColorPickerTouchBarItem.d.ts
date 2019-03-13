/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerTouchBarItem<T = any> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _pickColor<R = void, P0 = unknown>(__pickColor: P0): R;
    view<R = unknown>(): R;
    initWithIdentifier_buttonTitle_buttonImage<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithIdentifier: P0, _buttonTitle: P1, _buttonImage: P2): R;
    _gestureRecognizer_shouldReceiveTouch<R = boolean, P0 = unknown, P1 = unknown>(__gestureRecognizer: P0, _shouldReceiveTouch: P1): R;
    _showPressHoldPopup<R = void, P0 = unknown>(__showPressHoldPopup: P0): R;
    _pressAndHoldDidCancelTracking<R = void>(): R;
    _pressAndHoldDidEndTracking<R = void>(): R;
    _pressAndHoldWillBeginTracking<R = void>(): R;
    _pickPressAndHoldColor<R = void, P0 = unknown>(__pickPressAndHoldColor: P0): R;
    _updateButtonImagePosition<R = void>(): R;
    setButtonTitle<R = void, P0 = unknown>(_setButtonTitle: P0): R;
    buttonTitle<R = unknown>(): R;
    setButtonImage<R = void, P0 = unknown>(_setButtonImage: P0): R;
    buttonImage<R = unknown>(): R;
    _autounbinder<R = unknown>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    colorListSupportsPressAndHoldVariants<R = boolean>(): R;
    setColorListSupportsPressAndHoldVariants<R = void, P0 = boolean>(_v: P0): R;
    showsAlpha<R = boolean>(): R;
    setShowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    storedColor<R = NSColor>(): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    colorList<R = NSColorList>(): R;
    setColorList<R = void, P0 = NSColorList>(_v: P0): R;
    mode<R = number>(): R;
    setMode<R = void, P0 = number>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    customizationLabel<R = NSString>(): R;
    setCustomizationLabel<R = void, P0 = NSString>(_v: P0): R;
    isPresented<R = boolean>(): R;
    popoverTouchBar<R = NSTouchBar>(): R;
    showsCloseButton<R = boolean>(): R;
    supportsPressAndHold<R = boolean>(): R;
    _overlay<R = NSTouchBarItemOverlay>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPickerTouchBarItem<T = any> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewControllerDelegateProtocol {
      alloc<R = NSColorPickerTouchBarItem>(): R;
      new: <R = NSColorPickerTouchBarItem>() => R;
      automaticallyNotifiesObserversOfColor<R = boolean>(): R;
      keyPathsForValuesAffectingStoredColor<R = unknown>(): R;
      colorPickerWithIdentifier_buttonTitle<R = unknown, P0 = unknown, P1 = unknown>(_colorPickerWithIdentifier: P0, _buttonTitle: P1): R;
      colorPickerWithIdentifier_buttonImage<R = unknown, P0 = unknown, P1 = unknown>(_colorPickerWithIdentifier: P0, _buttonImage: P1): R;
      strokeColorPickerWithIdentifier<R = unknown, P0 = unknown>(_strokeColorPickerWithIdentifier: P0): R;
      textColorPickerWithIdentifier<R = unknown, P0 = unknown>(_textColorPickerWithIdentifier: P0): R;
      colorPickerWithIdentifier<R = unknown, P0 = unknown>(_colorPickerWithIdentifier: P0): R;
      keyPathsForValuesAffectingPresented<R = unknown>(): R;
    }
  }
}

declare const NSColorPickerTouchBarItem: cocoa.classes.NSColorPickerTouchBarItem;
