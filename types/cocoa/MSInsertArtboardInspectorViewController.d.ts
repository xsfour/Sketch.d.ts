/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardInspectorViewController<T = any> extends cocoa.NSViewController, cocoa.MSArtboardPresetsViewControllerDelegateProtocol, cocoa.MSEditArtboardPresetViewControllerDelegateProtocol, cocoa.MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    views<R = unknown>(): R;
    focusCanvasOnAllArtboards<R = void>(): R;
    presetsViewController<R = unknown>(): R;
    presetsContainerView<R = cocoa.NSView>(): R;
    setPresetsContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    eventHandler<R = cocoa.MSInsertArtboardEventHandler>(): R;
    setEventHandler<R = void, P0 = cocoa.MSInsertArtboardEventHandler>(_v: P0): R;
    proposedArtboardSize<R = cocoa.CGSize>(): R;
    setProposedArtboardSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    shouldAddInsertFromSelectionItem<R = boolean>(): R;
    setShouldAddInsertFromSelectionItem<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInsertArtboardInspectorViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSArtboardPresetsViewControllerDelegateProtocol, cocoa.classes.MSEditArtboardPresetViewControllerDelegateProtocol, cocoa.classes.MSInspectorChildControllerProtocol {
      alloc<R = MSInsertArtboardInspectorViewController>(): R;
      new: <R = MSInsertArtboardInspectorViewController>() => R;
    }
  }
}

declare const MSInsertArtboardInspectorViewController: cocoa.classes.MSInsertArtboardInspectorViewController;
