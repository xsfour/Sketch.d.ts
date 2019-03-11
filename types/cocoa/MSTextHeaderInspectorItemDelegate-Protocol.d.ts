/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextHeaderInspectorItemDelegateProtocol<T = any> extends cocoa.MSInspectorItemDelegateProtocol {
    itemWantsToggleDetailSettings<R = void, P0 = cocoa.MSTextHeaderInspectorItem>(_itemWantsToggleDetailSettings: P0): R;
  }
  namespace classes {
    export interface MSTextHeaderInspectorItemDelegateProtocol<T = any> extends cocoa.classes.MSInspectorItemDelegateProtocol {  }
  }
}

declare const MSTextHeaderInspectorItemDelegateProtocol: cocoa.classes.MSTextHeaderInspectorItemDelegateProtocol;
