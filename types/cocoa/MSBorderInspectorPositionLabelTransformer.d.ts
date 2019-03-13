/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderInspectorPositionLabelTransformer<T = any> extends NSValueTransformer {}
  namespace classes {
    export interface MSBorderInspectorPositionLabelTransformer<T = any> extends NSValueTransformer {
      alloc<R = MSBorderInspectorPositionLabelTransformer>(): R;
      new: <R = MSBorderInspectorPositionLabelTransformer>() => R;
    }
  }
}

declare const MSBorderInspectorPositionLabelTransformer: cocoa.classes.MSBorderInspectorPositionLabelTransformer;
