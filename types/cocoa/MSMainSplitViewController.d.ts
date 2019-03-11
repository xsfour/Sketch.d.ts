/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMainSplitViewController<T = any> extends cocoa.NSObject, cocoa.NSSplitViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    didExitVersionBrowser<R = void>(): R;
    didEnterVersionBrowser<R = void>(): R;
    dividerIndexBelongsToInspectorView<R = boolean, P0 = number>(_dividerIndexBelongsToInspectorView: P0): R;
    awakeFromNib<R = void>(): R;
    savedInspectorView<R = cocoa.NSView>(): R;
    setSavedInspectorView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    isInVersionBrowser<R = boolean>(): R;
    setIsInVersionBrowser<R = void, P0 = boolean>(_v: P0): R;
    rightSide<R = number>(): R;
    setRightSide<R = void, P0 = number>(_v: P0): R;
    leftSide<R = number>(): R;
    setLeftSide<R = void, P0 = number>(_v: P0): R;
    window<R = cocoa.NSWindow>(): R;
    setWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    splitView<R = cocoa.NSSplitView>(): R;
    setSplitView<R = void, P0 = cocoa.NSSplitView>(_v: P0): R;
    inspectorView<R = cocoa.NSView>(): R;
    setInspectorView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    canvasView<R = cocoa.NSView>(): R;
    setCanvasView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    layerListView<R = cocoa.NSView>(): R;
    setLayerListView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    layerListWidth<R = number>(): R;
    setLayerListWidth<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMainSplitViewController<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSplitViewDelegateProtocol {
      alloc<R = MSMainSplitViewController>(): R;
      new: <R = MSMainSplitViewController>() => R;
    }
  }
}

declare const MSMainSplitViewController: cocoa.classes.MSMainSplitViewController;
