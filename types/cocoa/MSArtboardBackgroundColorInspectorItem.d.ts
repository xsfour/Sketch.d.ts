/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardBackgroundColorInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSColorInspectorDelegateProtocol, cocoa.BCPopoverDelegateProtocol, cocoa.MSStylePartPreviewButtonDelegateProtocol, cocoa.MSStylePartPreviewButtonDisabledTargetProtocol {
    documentColorSpace<R = unknown>(): R;
    canvasColorSpace<R = unknown>(): R;
    changeBackgroundColorTo<R = void, P0 = unknown>(_changeBackgroundColorTo: P0): R;
    backgroundColorAction<R = void, P0 = unknown>(_backgroundColorAction: P0): R;
    colorCheckbox<R = cocoa.NSButton>(): R;
    setColorCheckbox<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    colorAdaptor<R = cocoa.MSInspectorValueAdaptor>(): R;
    setColorAdaptor<R = void, P0 = cocoa.MSInspectorValueAdaptor>(_v: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    backgroundColorButton<R = cocoa.MSStylePartPreviewButton>(): R;
    setBackgroundColorButton<R = void, P0 = cocoa.MSStylePartPreviewButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSArtboardBackgroundColorInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSColorInspectorDelegateProtocol, cocoa.classes.BCPopoverDelegateProtocol, cocoa.classes.MSStylePartPreviewButtonDelegateProtocol, cocoa.classes.MSStylePartPreviewButtonDisabledTargetProtocol {
      alloc<R = MSArtboardBackgroundColorInspectorItem>(): R;
      new: <R = MSArtboardBackgroundColorInspectorItem>() => R;
    }
  }
}

declare const MSArtboardBackgroundColorInspectorItem: cocoa.classes.MSArtboardBackgroundColorInspectorItem;
