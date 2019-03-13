/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextHeaderInspectorItemDelegateProtocol<T = any> extends MSInspectorItemDelegateProtocol {
    itemWantsToggleDetailSettings<R = void, P0 = MSTextHeaderInspectorItem>(_itemWantsToggleDetailSettings: P0): R;
  }
  namespace classes {
    export interface MSTextHeaderInspectorItemDelegateProtocol<T = any> extends MSInspectorItemDelegateProtocol {  }
  }
}
