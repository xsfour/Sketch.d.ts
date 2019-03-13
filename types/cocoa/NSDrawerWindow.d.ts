/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDrawerWindow<T = any> extends NSWindow {
    _drawerDefaultRightTrailingOffset<R = number>(): R;
    _drawerDefaultLeftLeadingOffset<R = number>(): R;
    _drawerDefaultBottomTrailingOffset<R = number>(): R;
    _drawerDefaultTopLeadingOffset<R = number>(): R;
    _drawerDepthInset<R = number>(): R;
    _drawerDepthOffset<R = number>(): R;
    _drawerRightOffset<R = number>(): R;
    _drawerLeftOffset<R = number>(): R;
    _drawerBottomOffset<R = number>(): R;
    _drawerTopOffset<R = number>(): R;
    _drawerCloseThreshold<R = number>(): R;
    _drawerVerticalOpenOffset<R = number>(): R;
    _drawerHorizontalOpenOffset<R = number>(): R;
    isMovableByWindowBackground<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    _isVertical<R = boolean>(): R;
    resizeWithDelta_fromFrame_beginOperation_endOperation<R = void, P0 = CGPoint, P1 = CGRect, P2 = boolean, P3 = boolean>(_resizeWithDelta: P0, _fromFrame: P1, _beginOperation: P2, _endOperation: P3): R;
    isExcludedFromWindowsMenu<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    isMainWindow<R = boolean>(): R;
    _resetDrawerFirstResponder<R = void>(): R;
    _setDrawerVisibleWithoutLogin<R = void>(): R;
    _changeDrawerFirstResponder<R = void>(): R;
    _changeDrawerMainState<R = void>(): R;
    _changeDrawerKeyState<R = void>(): R;
    _drawerTakeFocus<R = void>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isKeyWindow<R = boolean>(): R;
    hasShadow<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    _potentialMaxSize<R = CGSize>(): R;
    _potentialMinSize<R = CGSize>(): R;
    _parentWindow<R = unknown>(): R;
    _setParentWindow<R = void, P0 = unknown>(__setParentWindow: P0): R;
    _changeTexture<R = void>(): R;
    initWithContentRect_styleMask_backing_defer_drawer<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = boolean, P4 = unknown>(_initWithContentRect: P0, _styleMask: P1, _backing: P2, _defer: P3, _drawer: P4): R;
  }
  namespace classes {
    export interface NSDrawerWindow<T = any> extends NSWindow {
      alloc<R = NSDrawerWindow>(): R;
      new: <R = NSDrawerWindow>() => R;
    }
  }
}

declare const NSDrawerWindow: cocoa.classes.NSDrawerWindow;
