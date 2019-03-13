/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuActionController<T = any> extends NSObject, QLPreviewMenuItemDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithView_item_itemFrame_aimFrame<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = CGRect>(_initWithView: P0, _item: P1, _itemFrame: P2, _aimFrame: P3): R;
    aimFrame<R = CGRect>(): R;
    itemFrame<R = CGRect>(): R;
    item<R = unknown>(): R;
    view<R = NSView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMenuActionController<T = any> extends NSObject, QLPreviewMenuItemDelegateProtocol {
      alloc<R = _NSMenuActionController>(): R;
      new: <R = _NSMenuActionController>() => R;
    }
  }
}
