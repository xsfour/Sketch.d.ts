/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteOverlayWindow<T = any> extends cocoa.NSWindow {
    done<R = void, P0 = unknown>(_done: P0): R;
    _quickTypeDidChange<R = void, P0 = unknown>(__quickTypeDidChange: P0): R;
    toggleQuicktype<R = void, P0 = unknown>(_toggleQuicktype: P0): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _windowDidBecomeKey<R = void, P0 = unknown>(__windowDidBecomeKey: P0): R;
    _appDidDeactivate<R = void, P0 = unknown>(__appDidDeactivate: P0): R;
    _handleIntrusion<R = void>(): R;
    animateOut<R = void>(): R;
    animateIn<R = void>(): R;
    _headerLabelAttributedString<R = unknown>(): R;
    _headerLabelFont<R = unknown>(): R;
    _headerLabelInset<R = number>(): R;
    _paletteHorizontalInsets<R = number>(): R;
    _horizontalHeaderStackSpacing<R = number>(): R;
    _verticalStackSpacing<R = number>(): R;
    _doneButtonWidth<R = number>(): R;
    _postHeaderSpacing<R = number>(): R;
    _verticalStackInsets<R = cocoa.NSEdgeInsets>(): R;
    initWithScreen_displayID_paletteContent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithScreen: P0, _displayID: P1, _paletteContent: P2): R;
    dragSize<R = cocoa.CGSize>(): R;
    setDragSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    screenBottomDragTarget<R = cocoa._NSFunctionRowCustomizationDragTarget>(): R;
    debugMode<R = boolean>(): R;
    setDebugMode<R = void, P0 = boolean>(_v: P0): R;
    dragLabel<R = cocoa.NSString>(): R;
    setDragLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dragLocation<R = cocoa.CGPoint>(): R;
    setDragLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    showQuickType<R = boolean>(): R;
    setShowQuickType<R = void, P0 = boolean>(_v: P0): R;
    paletteContentViewController<R = cocoa.NSViewController>(): R;
    setPaletteContentViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteOverlayWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSTouchBarCustomizationPaletteOverlayWindow>(): R;
      new: <R = NSTouchBarCustomizationPaletteOverlayWindow>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteOverlayWindow: cocoa.classes.NSTouchBarCustomizationPaletteOverlayWindow;
