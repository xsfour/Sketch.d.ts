/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeSection<T = any> extends cocoa.MSSingleItemInspectorSection {}
  namespace classes {
    export interface MSStarShapeSection<T = any> extends cocoa.classes.MSSingleItemInspectorSection {
      alloc<R = MSStarShapeSection>(): R;
      new: <R = MSStarShapeSection>() => R;
    }
  }
}

declare const MSStarShapeSection: cocoa.classes.MSStarShapeSection;
