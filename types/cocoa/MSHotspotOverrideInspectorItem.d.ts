/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHotspotOverrideInspectorItem<T = any> extends cocoa.MSOverrideInspectorItem, cocoa.MSFlowMenuBuilderTargetProtocol {
    documentData<R = unknown>(): R;
    popup<R = cocoa.NSPopUpButton>(): R;
    setPopup<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSHotspotOverrideInspectorItem<T = any> extends cocoa.classes.MSOverrideInspectorItem, cocoa.classes.MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSHotspotOverrideInspectorItem>(): R;
      new: <R = MSHotspotOverrideInspectorItem>() => R;
    }
  }
}

declare const MSHotspotOverrideInspectorItem: cocoa.classes.MSHotspotOverrideInspectorItem;
