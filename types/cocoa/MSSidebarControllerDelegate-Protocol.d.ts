/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarControllerDelegateProtocol<T = any> {
    layerHasHoverStateInCanvas<R = boolean, P0 = unknown>(_layerHasHoverStateInCanvas: P0): R;
    sidebarController_hoveredLayerDidChangeTo<R = void, P0 = MSSidebarListController, P1 = MSHoverableItem>(_sidebarController: P0, _hoveredLayerDidChangeTo: P1): R;
    sidebarControllerContextMenuItemsForCurrentSelection<R = NSArray, P0 = MSSidebarListController>(_sidebarControllerContextMenuItemsForCurrentSelection: P0): R;
    sidebarController_validateRemovalOfPages_withRemovalBlock<R = void, P0 = MSSidebarListController, P1 = NSArray, P2 = CDUnknownBlockType>(_sidebarController: P0, _validateRemovalOfPages: P1, _withRemovalBlock: P2): R;
    sidebarController_didChangeSelection<R = void, P0 = MSSidebarListController, P1 = NSArray>(_sidebarController: P0, _didChangeSelection: P1): R;
    sidebarControllerDidUpdate<R = void, P0 = MSSidebarListController>(_sidebarControllerDidUpdate: P0): R;
    documentColorSpace<R = NSColorSpace>(): R;
    documentData<R = MSDocumentData>(): R;
    defaultFirstResponder<R = NSResponder>(): R;
  }
  namespace classes {
    export interface MSSidebarControllerDelegateProtocol<T = any> {  }
  }
}
