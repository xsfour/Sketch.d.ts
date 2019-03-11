/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarControllerDelegateProtocol<T = any> {
    layerHasHoverStateInCanvas<R = boolean, P0 = unknown>(_layerHasHoverStateInCanvas: P0): R;
    sidebarController_hoveredLayerDidChangeTo<R = void, P0 = cocoa.MSSidebarListController, P1 = cocoa.MSHoverableItem>(_sidebarController: P0, _hoveredLayerDidChangeTo: P1): R;
    sidebarControllerContextMenuItemsForCurrentSelection<R = cocoa.NSArray, P0 = cocoa.MSSidebarListController>(_sidebarControllerContextMenuItemsForCurrentSelection: P0): R;
    sidebarController_validateRemovalOfPages_withRemovalBlock<R = void, P0 = cocoa.MSSidebarListController, P1 = cocoa.NSArray, P2 = cocoa.CDUnknownBlockType>(_sidebarController: P0, _validateRemovalOfPages: P1, _withRemovalBlock: P2): R;
    sidebarController_didChangeSelection<R = void, P0 = cocoa.MSSidebarListController, P1 = cocoa.NSArray>(_sidebarController: P0, _didChangeSelection: P1): R;
    sidebarControllerDidUpdate<R = void, P0 = cocoa.MSSidebarListController>(_sidebarControllerDidUpdate: P0): R;
    documentColorSpace<R = cocoa.NSColorSpace>(): R;
    documentData<R = cocoa.MSDocumentData>(): R;
    defaultFirstResponder<R = cocoa.NSResponder>(): R;
  }
  namespace classes {
    export interface MSSidebarControllerDelegateProtocol<T = any> {  }
  }
}

declare const MSSidebarControllerDelegateProtocol: cocoa.classes.MSSidebarControllerDelegateProtocol;
