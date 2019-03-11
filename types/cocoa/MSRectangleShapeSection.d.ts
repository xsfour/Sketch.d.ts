/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeSection<T = any> extends cocoa.MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSRectangleShapeSection<T = any> extends cocoa.classes.MSSingleItemInspectorSection {
      alloc<R = MSRectangleShapeSection>(): R;
      new: <R = MSRectangleShapeSection>() => R;
    }
  }
}

declare const MSRectangleShapeSection: cocoa.classes.MSRectangleShapeSection;
