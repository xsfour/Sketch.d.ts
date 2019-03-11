/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSingleItemInspectorSection<T = any> extends cocoa.MSBaseInspectorSection {
    item<R = cocoa.MSInspectorItem>(): R;
    setItem<R = void, P0 = cocoa.MSInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSSingleItemInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection {
      alloc<R = MSSingleItemInspectorSection>(): R;
      new: <R = MSSingleItemInspectorSection>() => R;
      canHandleLayer<R = boolean, P0 = unknown>(_canHandleLayer: P0): R;
      itemClass<R = unknown>(): R;
    }
  }
}

declare const MSSingleItemInspectorSection: cocoa.classes.MSSingleItemInspectorSection;
