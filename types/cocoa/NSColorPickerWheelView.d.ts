/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerWheelView<T = any> extends cocoa.NSView {
    _selectColorSpace<R = void, P0 = unknown>(__selectColorSpace: P0): R;
    _displayFallbackColorSpace<R = unknown>(): R;
    isTracking<R = boolean>(): R;
    _setPointerKeyboardFocusNeedsDisplay<R = void>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _colorFromPoint<R = unknown, P0 = cocoa.CGPoint>(__colorFromPoint: P0): R;
    _brightColorFromPoint_fullBrightness<R = unknown, P0 = cocoa.CGPoint, P1 = boolean>(__brightColorFromPoint: P0, _fullBrightness: P1): R;
    _resizeView<R = unknown>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    _pointFromColor<R = cocoa.CGPoint, P0 = unknown>(__pointFromColor: P0): R;
    _pointInPicker<R = boolean, P0 = cocoa.CGPoint>(__pointInPicker: P0): R;
    _wheelImage<R = unknown>(): R;
    _invalidateWheelImage<R = void>(): R;
    setBrightness<R = void, P0 = number>(_setBrightness: P0): R;
    brightColor<R = unknown>(): R;
    color<R = unknown>(): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    storeColorPanel<R = unknown, P0 = unknown>(_storeColorPanel: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveCurrentPointInDirection<R = void, P0 = cocoa.CGPoint>(_moveCurrentPointInDirection: P0): R;
    setKeyboardFocusRingNeedsDisplayIfNeededInRect<R = void, P0 = cocoa.CGRect>(_setKeyboardFocusRingNeedsDisplayIfNeededInRect: P0): R;
    _isShowingKeyboardFocus<R = boolean>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    effectiveDisplayColorSpace<R = cocoa.NSColorSpace>(): R;
    preferredDisplayColorSpace<R = cocoa.NSColorSpace>(): R;
    setPreferredDisplayColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerWheelView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSColorPickerWheelView>(): R;
      new: <R = NSColorPickerWheelView>() => R;
      preferredColorSpaces<R = unknown>(): R;
    }
  }
}

declare const NSColorPickerWheelView: cocoa.classes.NSColorPickerWheelView;
