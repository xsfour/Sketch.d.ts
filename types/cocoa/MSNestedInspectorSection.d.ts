/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNestedInspectorSection<T = any> extends cocoa.MSBaseInspectorSection, cocoa.MSInspectorSectionDelegateProtocol {}
  namespace classes {
    export interface MSNestedInspectorSection<T = any> extends cocoa.classes.MSBaseInspectorSection, cocoa.classes.MSInspectorSectionDelegateProtocol {
      alloc<R = MSNestedInspectorSection>(): R;
      new: <R = MSNestedInspectorSection>() => R;
    }
  }
}

declare const MSNestedInspectorSection: cocoa.classes.MSNestedInspectorSection;
