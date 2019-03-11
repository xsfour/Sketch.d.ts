/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorStylePartInspectorViewController<T = any> extends cocoa.MSStylePartInspectorViewController, cocoa.NSPopoverDelegateProtocol, cocoa.MSStylePartPreviewButtonDisabledTargetProtocol, cocoa.MSColorInspectorDelegateProtocol, cocoa.MSStylePartPreviewButtonDelegateProtocol {
    setBlendMode_forPreviewButton<R = void, P0 = number, P1 = unknown>(_setBlendMode: P0, _forPreviewButton: P1): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    updateBlendMode<R = void>(): R;
    updateColorInActiveInspector<R = void>(): R;
    checkBoxAction<R = void, P0 = unknown>(_checkBoxAction: P0): R;
    previewCellAction<R = void, P0 = unknown>(_previewCellAction: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    stylePartAdaptor<R = cocoa.MSInspectorValueAdaptor>(): R;
    setStylePartAdaptor<R = void, P0 = cocoa.MSInspectorValueAdaptor>(_v: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    colorButton<R = cocoa.MSStylePartPreviewButton>(): R;
    setColorButton<R = void, P0 = cocoa.MSStylePartPreviewButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorStylePartInspectorViewController<T = any> extends cocoa.classes.MSStylePartInspectorViewController, cocoa.classes.NSPopoverDelegateProtocol, cocoa.classes.MSStylePartPreviewButtonDisabledTargetProtocol, cocoa.classes.MSColorInspectorDelegateProtocol, cocoa.classes.MSStylePartPreviewButtonDelegateProtocol {
      alloc<R = MSColorStylePartInspectorViewController>(): R;
      new: <R = MSColorStylePartInspectorViewController>() => R;
      fillTypeStringForFillType<R = unknown, P0 = number>(_fillTypeStringForFillType: P0): R;
    }
  }
}

declare const MSColorStylePartInspectorViewController: cocoa.classes.MSColorStylePartInspectorViewController;
