/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditInspectorViewController<T = any> extends cocoa.NSViewController, cocoa.BCPopoverDelegateProtocol, cocoa.MSColorInspectorDelegateProtocol, cocoa.MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    views<R = unknown>(): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    colorizeAction<R = void, P0 = unknown>(_colorizeAction: P0): R;
    finishEditing<R = void, P0 = unknown>(_finishEditing: P0): R;
    cropAction<R = void, P0 = unknown>(_cropAction: P0): R;
    invertAction<R = void, P0 = unknown>(_invertAction: P0): R;
    magicWandAction<R = void, P0 = unknown>(_magicWandAction: P0): R;
    rectSelectionAction<R = void, P0 = unknown>(_rectSelectionAction: P0): R;
    refresh<R = void>(): R;
    buttonLabels<R = unknown>(): R;
    actionButtons<R = unknown>(): R;
    fillLabel<R = cocoa.NSTextField>(): R;
    setFillLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    cropLabel<R = cocoa.NSTextField>(): R;
    setCropLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    invertLabel<R = cocoa.NSTextField>(): R;
    setInvertLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    heightField<R = cocoa.NSTextField>(): R;
    setHeightField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    widthField<R = cocoa.NSTextField>(): R;
    setWidthField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    fillButton<R = cocoa.NSButton>(): R;
    setFillButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    cropButton<R = cocoa.NSButton>(): R;
    setCropButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    invertButton<R = cocoa.NSButton>(): R;
    setInvertButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    magicWandButton<R = cocoa.NSButton>(): R;
    setMagicWandButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    rectSelectionButton<R = cocoa.NSButton>(): R;
    setRectSelectionButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    eventHandler<R = cocoa.MSBitmapEditEventHandler>(): R;
    setEventHandler<R = void, P0 = cocoa.MSBitmapEditEventHandler>(_v: P0): R;
    selectionSize<R = cocoa.CGSize>(): R;
    setSelectionSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    hasSelection<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBitmapEditInspectorViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.BCPopoverDelegateProtocol, cocoa.classes.MSColorInspectorDelegateProtocol, cocoa.classes.MSInspectorChildControllerProtocol {
      alloc<R = MSBitmapEditInspectorViewController>(): R;
      new: <R = MSBitmapEditInspectorViewController>() => R;
    }
  }
}

declare const MSBitmapEditInspectorViewController: cocoa.classes.MSBitmapEditInspectorViewController;
