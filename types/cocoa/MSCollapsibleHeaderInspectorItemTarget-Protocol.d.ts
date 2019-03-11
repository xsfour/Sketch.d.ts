/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollapsibleHeaderInspectorItemTargetProtocol<T = any> {
    item_wantsSectionToCollapse<R = void, P0 = cocoa.NSViewController, P1 = boolean>(_item: P0, _wantsSectionToCollapse: P1): R;
  }
  namespace classes {
    export interface MSCollapsibleHeaderInspectorItemTargetProtocol<T = any> {  }
  }
}

declare const MSCollapsibleHeaderInspectorItemTargetProtocol: cocoa.classes.MSCollapsibleHeaderInspectorItemTargetProtocol;
