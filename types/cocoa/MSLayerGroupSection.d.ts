/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupSection<T = any> extends cocoa.MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSLayerGroupSection<T = any> extends cocoa.classes.MSSingleItemInspectorSection {
      alloc<R = MSLayerGroupSection>(): R;
      new: <R = MSLayerGroupSection>() => R;
    }
  }
}

declare const MSLayerGroupSection: cocoa.classes.MSLayerGroupSection;
