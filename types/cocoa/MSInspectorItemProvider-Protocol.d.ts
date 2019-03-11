/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorItemProviderProtocol<T = any> {
    wantSeparatorAtIndex<R = boolean, P0 = number>(_wantSeparatorAtIndex: P0): R;
    heightOfItemViewAtIndex<R = number, P0 = number>(_heightOfItemViewAtIndex: P0): R;
    recycleItem<R = void, P0 = cocoa.NSViewController>(_recycleItem: P0): R;
    vendItemAtIndex<R = cocoa.NSViewController, P0 = number>(_vendItemAtIndex: P0): R;
    numberOfItems<R = number>(): R;
  }
  namespace classes {
    export interface MSInspectorItemProviderProtocol<T = any> {  }
  }
}

declare const MSInspectorItemProviderProtocol: cocoa.classes.MSInspectorItemProviderProtocol;
