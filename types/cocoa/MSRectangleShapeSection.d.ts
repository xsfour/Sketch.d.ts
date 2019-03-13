/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeSection<T = any> extends MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSRectangleShapeSection<T = any> extends MSSingleItemInspectorSection {
      alloc<R = MSRectangleShapeSection>(): R;
      new: <R = MSRectangleShapeSection>() => R;
    }
  }
}

declare const MSRectangleShapeSection: cocoa.classes.MSRectangleShapeSection;
