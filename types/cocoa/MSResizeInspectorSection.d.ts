/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeInspectorSection<T = any> extends MSBaseInspectorSection {
    resizeItem<R = MSResizeInspectorItem>(): R;
    setResizeItem<R = void, P0 = MSResizeInspectorItem>(_v: P0): R;
    resizeHeader<R = MSCollapsibleHeaderInspectorItem>(): R;
    setResizeHeader<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSResizeInspectorSection<T = any> extends MSBaseInspectorSection {
      alloc<R = MSResizeInspectorSection>(): R;
      new: <R = MSResizeInspectorSection>() => R;
    }
  }
}

declare const MSResizeInspectorSection: cocoa.classes.MSResizeInspectorSection;
