/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerListController<T = any> extends cocoa.MSSidebarListController, cocoa.BCOutlineViewDataControllerDataSourceProtocol, cocoa.BCOutlineViewDataControllerDelegateProtocol {
    pasteboardWriterClass<R = unknown>(): R;
    mapExpandedStateToLayerListStatus<R = number, P0 = number>(_mapExpandedStateToLayerListStatus: P0): R;
    itemForNode<R = unknown, P0 = unknown>(_itemForNode: P0): R;
    numberOfLayersRequiringPreviewRefresh<R = number>(): R;
    setNumberOfLayersRequiringPreviewRefresh<R = void, P0 = number>(_v: P0): R;
    layersRequiringPreviewRefresh<R = cocoa.NSMutableSet>(): R;
    setLayersRequiringPreviewRefresh<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    defaultFirstResponder<R = cocoa.NSView>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerListController<T = any> extends cocoa.classes.MSSidebarListController, cocoa.classes.BCOutlineViewDataControllerDataSourceProtocol, cocoa.classes.BCOutlineViewDataControllerDelegateProtocol {
      alloc<R = MSLayerListController>(): R;
      new: <R = MSLayerListController>() => R;
    }
  }
}

declare const MSLayerListController: cocoa.classes.MSLayerListController;
