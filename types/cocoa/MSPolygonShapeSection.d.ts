/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeSection<T = any> extends MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSPolygonShapeSection<T = any> extends MSSingleItemInspectorSection {
      alloc<R = MSPolygonShapeSection>(): R;
      new: <R = MSPolygonShapeSection>() => R;
    }
  }
}

declare const MSPolygonShapeSection: cocoa.classes.MSPolygonShapeSection;
