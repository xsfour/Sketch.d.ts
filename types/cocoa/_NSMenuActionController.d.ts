/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuActionController<T = any> extends cocoa.NSObject, cocoa.QLPreviewMenuItemDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithView_item_itemFrame_aimFrame<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = cocoa.CGRect>(_initWithView: P0, _item: P1, _itemFrame: P2, _aimFrame: P3): R;
    aimFrame<R = cocoa.CGRect>(): R;
    itemFrame<R = cocoa.CGRect>(): R;
    item<R = unknown>(): R;
    view<R = cocoa.NSView>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMenuActionController<T = any> extends cocoa.classes.NSObject, cocoa.classes.QLPreviewMenuItemDelegateProtocol {
      alloc<R = _NSMenuActionController>(): R;
      new: <R = _NSMenuActionController>() => R;
    }
  }
}
