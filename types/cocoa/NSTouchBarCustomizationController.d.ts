/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationController<T = any> extends cocoa.NSObject, cocoa.NSTouchBarCustomizationPreviewViewControllerDelegateProtocol, cocoa.NSTouchBarCustomizationCursorManagerDelegateProtocol, cocoa.NSDraggingSourceProtocol, cocoa.NSTouchBarCustomizationPaletteViewControllerDelegateProtocol, cocoa._NSFunctionRowCustomizationDragTargetDelegateProtocol, cocoa.NSAppExceptionListenerProtocol, cocoa.NSWindowDelegateProtocol {
    _closeWithoutAnimating<R = void>(): R;
    _closeCustomizationPalette<R = void>(): R;
    validateTouchBarCustomizationPaletteItem<R = boolean, P0 = unknown>(_validateTouchBarCustomizationPaletteItem: P0): R;
    toggleCustomizationPalette_forceControlStrip<R = void, P0 = unknown, P1 = boolean>(_toggleCustomizationPalette: P0, _forceControlStrip: P1): R;
    restorePresentationOptions<R = void>(): R;
    savePresentationOptions<R = void>(): R;
    appTouchBarIsCustomizable<R = boolean>(): R;
    _touchBarsAreCustomizable<R = boolean, P0 = unknown>(__touchBarsAreCustomizable: P0): R;
    toggleCustomizationPalette<R = void, P0 = unknown>(_toggleCustomizationPalette: P0): R;
    toggleControlStripCustomizationPalette<R = void, P0 = unknown>(_toggleControlStripCustomizationPalette: P0): R;
    removeMenuItem<R = void>(): R;
    _quickTypeDidChange<R = void, P0 = unknown>(__quickTypeDidChange: P0): R;
    installMenuItemIfNeeded<R = void>(): R;
    dealloc<R = void>(): R;
    _prepareToHideCustomizationDFR<R = void>(): R;
    _showCustomizationDFR<R = void>(): R;
    _prepareCustomizationDFRFWithCustomizedRect<R = void, P0 = cocoa.CGRect>(__prepareCustomizationDFRFWithCustomizedRect: P0): R;
    currentPopoverTouchBar<R = cocoa.NSTouchBar>(): R;
    setCurrentPopoverTouchBar<R = void, P0 = cocoa.NSTouchBar>(_v: P0): R;
    activeTouchBars<R = cocoa.NSArray>(): R;
    setActiveTouchBars<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    currentResponderTouchBars<R = cocoa.NSArray>(): R;
    setCurrentResponderTouchBars<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    itemTree<R = cocoa.NSTouchBarItemTree>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationController<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTouchBarCustomizationPreviewViewControllerDelegateProtocol, cocoa.classes.NSTouchBarCustomizationCursorManagerDelegateProtocol, cocoa.classes.NSDraggingSourceProtocol, cocoa.classes.NSTouchBarCustomizationPaletteViewControllerDelegateProtocol, cocoa.classes._NSFunctionRowCustomizationDragTargetDelegateProtocol, cocoa.classes.NSAppExceptionListenerProtocol, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = NSTouchBarCustomizationController>(): R;
      new: <R = NSTouchBarCustomizationController>() => R;
      keyPathsForValuesAffectingItemTree<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationController: cocoa.classes.NSTouchBarCustomizationController;
