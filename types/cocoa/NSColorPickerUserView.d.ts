/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerUserView<T = any> extends NSView {
    registerForFilenameDragTypes<R = void>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _pointInPicker<R = boolean, P0 = CGPoint>(__pointInPicker: P0): R;
    color<R = unknown>(): R;
    colorFromPoint<R = unknown, P0 = CGPoint>(_colorFromPoint: P0): R;
    _resizeImage<R = void>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    _getColorFromImageAtPoint<R = unknown, P0 = CGPoint>(__getColorFromImageAtPoint: P0): R;
    _clearImageForLockFocusUse<R = void>(): R;
    _createImageForLockFocusUseIfNecessary<R = void>(): R;
    storeColorPanel<R = void, P0 = unknown>(_storeColorPanel: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveCurrentPointInDirection<R = void, P0 = CGPoint>(_moveCurrentPointInDirection: P0): R;
    setKeyboardFocusRingNeedsDisplayIfNeededInRect<R = void, P0 = CGRect>(_setKeyboardFocusRingNeedsDisplayIfNeededInRect: P0): R;
    _isShowingKeyboardFocus<R = boolean>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
  }
  namespace classes {
    export interface NSColorPickerUserView<T = any> extends NSView {
      alloc<R = NSColorPickerUserView>(): R;
      new: <R = NSColorPickerUserView>() => R;
    }
  }
}

declare const NSColorPickerUserView: cocoa.classes.NSColorPickerUserView;
