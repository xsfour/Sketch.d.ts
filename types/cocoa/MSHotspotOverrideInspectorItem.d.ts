/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHotspotOverrideInspectorItem<T = any> extends MSOverrideInspectorItem, MSFlowMenuBuilderTargetProtocol {
    documentData<R = unknown>(): R;
    popup<R = NSPopUpButton>(): R;
    setPopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSHotspotOverrideInspectorItem<T = any> extends MSOverrideInspectorItem, MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSHotspotOverrideInspectorItem>(): R;
      new: <R = MSHotspotOverrideInspectorItem>() => R;
    }
  }
}

declare const MSHotspotOverrideInspectorItem: cocoa.classes.MSHotspotOverrideInspectorItem;
