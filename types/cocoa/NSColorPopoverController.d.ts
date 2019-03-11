/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPopoverController<T = any> extends cocoa.NSViewController, cocoa.NSColorPickerMatrixViewDelegateProtocol {
    _showColorPanel<R = void, P0 = unknown>(__showColorPanel: P0): R;
    _loadViewIfNecessary<R = void>(): R;
    popover<R = cocoa.NSPopover>(): R;
    setPopover<R = void, P0 = cocoa.NSPopover>(_v: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_v: P0): R;
    colorPanelButton<R = cocoa.NSButton>(): R;
    setColorPanelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    colorMatrixView<R = cocoa.NSColorPickerMatrixView>(): R;
    setColorMatrixView<R = void, P0 = cocoa.NSColorPickerMatrixView>(_v: P0): R;
    topBarMatrixView<R = cocoa.NSColorPickerMatrixView>(): R;
    setTopBarMatrixView<R = void, P0 = cocoa.NSColorPickerMatrixView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorPopoverController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSColorPickerMatrixViewDelegateProtocol {
      alloc<R = NSColorPopoverController>(): R;
      new: <R = NSColorPopoverController>() => R;
      defaultTopBarColorList<R = unknown>(): R;
    }
  }
}

declare const NSColorPopoverController: cocoa.classes.NSColorPopoverController;
