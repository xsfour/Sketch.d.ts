/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerSection<T = any> extends cocoa.MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSBitmapLayerSection<T = any> extends cocoa.classes.MSSingleItemInspectorSection {
      alloc<R = MSBitmapLayerSection>(): R;
      new: <R = MSBitmapLayerSection>() => R;
    }
  }
}

declare const MSBitmapLayerSection: cocoa.classes.MSBitmapLayerSection;
