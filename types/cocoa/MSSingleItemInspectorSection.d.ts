/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSingleItemInspectorSection<T = any> extends MSBaseInspectorSection {
    item<R = MSInspectorItem>(): R;
    setItem<R = void, P0 = MSInspectorItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSSingleItemInspectorSection<T = any> extends MSBaseInspectorSection {
      alloc<R = MSSingleItemInspectorSection>(): R;
      new: <R = MSSingleItemInspectorSection>() => R;
      canHandleLayer<R = boolean, P0 = unknown>(_canHandleLayer: P0): R;
      itemClass<R = unknown>(): R;
    }
  }
}

declare const MSSingleItemInspectorSection: cocoa.classes.MSSingleItemInspectorSection;
