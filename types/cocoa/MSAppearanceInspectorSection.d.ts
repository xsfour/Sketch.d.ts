/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAppearanceInspectorSection<T = any> extends cocoa.MSBaseInspectorSection {
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    opacityItem<R = cocoa.MSOpacityBlendingInspectorItem>(): R;
    setOpacityItem<R = void, P0 = cocoa.MSOpacityBlendingInspectorItem>(_v: P0): R;
    sharedStyleItem<R = cocoa.MSSharedStylesInspectorItem>(): R;
    setSharedStyleItem<R = void, P0 = cocoa.MSSharedStylesInspectorItem>(_v: P0): R;
    headerItem<R = cocoa.MSCollapsibleHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSAppearanceInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection {
      alloc<R = MSAppearanceInspectorSection>(): R;
      new: <R = MSAppearanceInspectorSection>() => R;
    }
  }
}

declare const MSAppearanceInspectorSection: cocoa.classes.MSAppearanceInspectorSection;
