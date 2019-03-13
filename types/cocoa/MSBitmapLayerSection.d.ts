/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerSection<T = any> extends MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSBitmapLayerSection<T = any> extends MSSingleItemInspectorSection {
      alloc<R = MSBitmapLayerSection>(): R;
      new: <R = MSBitmapLayerSection>() => R;
    }
  }
}

declare const MSBitmapLayerSection: cocoa.classes.MSBitmapLayerSection;
