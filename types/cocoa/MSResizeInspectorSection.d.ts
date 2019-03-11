/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeInspectorSection<T = any> extends cocoa.MSBaseInspectorSection {
    resizeItem<R = cocoa.MSResizeInspectorItem>(): R;
    setResizeItem<R = void, P0 = cocoa.MSResizeInspectorItem>(_v: P0): R;
    resizeHeader<R = cocoa.MSCollapsibleHeaderInspectorItem>(): R;
    setResizeHeader<R = void, P0 = cocoa.MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSResizeInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection {
      alloc<R = MSResizeInspectorSection>(): R;
      new: <R = MSResizeInspectorSection>() => R;
    }
  }
}

declare const MSResizeInspectorSection: cocoa.classes.MSResizeInspectorSection;
