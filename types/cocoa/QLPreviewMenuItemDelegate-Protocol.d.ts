/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewMenuItemDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    menuItemDidClose<R = void, P0 = cocoa.NSMenuItem>(_menuItemDidClose: P0): R;
    menuItemWillAppear<R = void, P0 = cocoa.NSMenuItem>(_menuItemWillAppear: P0): R;
    menuItem_maxSizeForPoint<R = cocoa.CGSize, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _maxSizeForPoint: P1): R;
    menuItem_itemFrameForPoint<R = cocoa.CGRect, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _itemFrameForPoint: P1): R;
    menuItem_aimPointForPoint<R = cocoa.CGPoint, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _aimPointForPoint: P1): R;
    menuItem_preferredEdgeForPoint<R = number, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _preferredEdgeForPoint: P1): R;
    menuItem_previewItemAtPoint<R = cocoa.QLPreviewItem, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _previewItemAtPoint: P1): R;
    menuItem_viewAtScreenPoint<R = cocoa.NSView, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _viewAtScreenPoint: P1): R;
    menuItem_shouldPositionNearPreviewItemAtScreenPoint<R = boolean, P0 = cocoa.NSMenuItem, P1 = cocoa.CGPoint>(_menuItem: P0, _shouldPositionNearPreviewItemAtScreenPoint: P1): R;
  }
  namespace classes {
    export interface QLPreviewMenuItemDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const QLPreviewMenuItemDelegateProtocol: cocoa.classes.QLPreviewMenuItemDelegateProtocol;
