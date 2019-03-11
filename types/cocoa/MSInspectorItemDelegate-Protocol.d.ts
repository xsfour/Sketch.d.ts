/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorItemDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    documentForInspectorItem<R = cocoa.MSDocument, P0 = cocoa.NSViewController>(_documentForInspectorItem: P0): R;
    itemDidResize<R = void, P0 = cocoa.NSViewController>(_itemDidResize: P0): R;
    valuesPossiblyChanged<R = void, P0 = cocoa.NSViewController>(_valuesPossiblyChanged: P0): R;
    userInterfaceCacheForItem<R = cocoa.NSCache, P0 = cocoa.NSViewController>(_userInterfaceCacheForItem: P0): R;
    item_wantsSectionToCollapse<R = void, P0 = cocoa.NSViewController, P1 = boolean>(_item: P0, _wantsSectionToCollapse: P1): R;
  }
  namespace classes {
    export interface MSInspectorItemDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSInspectorItemDelegateProtocol: cocoa.classes.MSInspectorItemDelegateProtocol;
