/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupSection<T = any> extends MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSLayerGroupSection<T = any> extends MSSingleItemInspectorSection {
      alloc<R = MSLayerGroupSection>(): R;
      new: <R = MSLayerGroupSection>() => R;
    }
  }
}

declare const MSLayerGroupSection: cocoa.classes.MSLayerGroupSection;
