/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingArea<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    setGestureBehaviors<R = void, P0 = unknown>(_setGestureBehaviors: P0): R;
    gestureBehaviors<R = unknown>(): R;
    pressureConfigurations<R = unknown>(): R;
    _setPressureConfigurations<R = void, P0 = unknown>(__setPressureConfigurations: P0): R;
    _forceInternalMouseExitIfNeeded<R = void>(): R;
    _sendMouseCancelledFromWindow<R = void, P0 = unknown>(__sendMouseCancelledFromWindow: P0): R;
    _mouseExited<R = void, P0 = unknown>(__mouseExited: P0): R;
    _internalMouseExitedWork<R = void>(): R;
    _dispatchMouseExited<R = void, P0 = unknown>(__dispatchMouseExited: P0): R;
    _mouseEntered<R = void, P0 = unknown>(__mouseEntered: P0): R;
    _dispatchMouseEntered<R = void, P0 = unknown>(__dispatchMouseEntered: P0): R;
    mouseMoved<R = void, P0 = unknown>(_mouseMoved: P0): R;
    _installDelayedRolloverForMouseEnteredEvent<R = void, P0 = unknown>(__installDelayedRolloverForMouseEnteredEvent: P0): R;
    _doWork<R = void, P0 = cocoa.CDUnknownBlockType>(__doWork: P0): R;
    _removed<R = boolean>(): R;
    _setRemoved<R = void, P0 = boolean>(__setRemoved: P0): R;
    _hasPressureConfigurations<R = boolean>(): R;
    _representsGestureRecognizers<R = boolean>(): R;
    _setRepresentsGestureRecognizers<R = void, P0 = boolean>(__setRepresentsGestureRecognizers: P0): R;
    _suppressPressureConfiguration<R = boolean>(): R;
    _setSuppressPressureConfiguration<R = void, P0 = boolean>(__setSuppressPressureConfiguration: P0): R;
    _pressureConfigPushedToCG<R = boolean>(): R;
    _setPressureConfigPushedToCG<R = void, P0 = boolean>(__setPressureConfigPushedToCG: P0): R;
    _needsPressureConfigPushedToCG<R = boolean>(): R;
    _suppressFirstMouseEntered<R = boolean>(): R;
    _setSuppressFirstMouseEntered<R = void, P0 = boolean>(__setSuppressFirstMouseEntered: P0): R;
    _enabled<R = boolean>(): R;
    _setEnabled<R = void, P0 = boolean>(__setEnabled: P0): R;
    _installed<R = boolean>(): R;
    _setInstalled<R = void, P0 = boolean>(__setInstalled: P0): R;
    _uninstallPending<R = boolean>(): R;
    _setUninstallPending<R = void, P0 = boolean>(__setUninstallPending: P0): R;
    _installPending<R = boolean>(): R;
    _setInstallPending<R = void, P0 = boolean>(__setInstallPending: P0): R;
    _userInfo<R = void>(): R;
    _setRect<R = void, P0 = cocoa.CGRect>(__setRect: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRect_options_owner_userInfo<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = unknown, P3 = unknown>(_initWithRect: P0, _options: P1, _owner: P2, _userInfo: P3): R;
    initWithRect_options_pressureConfigurations_owner_userInfo<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithRect: P0, _options: P1, _pressureConfigurations: P2, _owner: P3, _userInfo: P4): R;
    options<R = number>(): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    owner<R = unknown>(): R;
    rect<R = cocoa.CGRect>(): R;
    // + NSTrackingArea(CHTrackingAreaExtensions):
    
  }
  namespace classes {
    export interface NSTrackingArea<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSTrackingArea>(): R;
      new: <R = NSTrackingArea>() => R;
      _areaSendingMouseEntered<R = unknown>(): R;
      _autoreleaseTrackingTag<R = void, P0 = number>(__autoreleaseTrackingTag: P0): R;
      _releaseTrackingTag<R = void, P0 = number>(__releaseTrackingTag: P0): R;
      _retainTrackingTag<R = void, P0 = number>(__retainTrackingTag: P0): R;
      _isTrackingAreaObject<R = boolean, P0 = unknown>(__isTrackingAreaObject: P0): R;
      initialize<R = void>(): R;
      // + NSTrackingArea(CHTrackingAreaExtensions):
      trackingAreaWithOptions_owner<R = unknown, P0 = number, P1 = unknown>(_trackingAreaWithOptions: P0, _owner: P1): R;
      mouseEnterExitTrackingArea<R = unknown, P0 = unknown>(_mouseEnterExitTrackingArea: P0): R;
    }
  }
}

declare const NSTrackingArea: cocoa.classes.NSTrackingArea;
