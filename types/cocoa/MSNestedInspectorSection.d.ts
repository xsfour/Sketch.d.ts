/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNestedInspectorSection<T = any> extends MSBaseInspectorSection, MSInspectorSectionDelegateProtocol {}
  namespace classes {
    export interface MSNestedInspectorSection<T = any> extends MSBaseInspectorSection, MSInspectorSectionDelegateProtocol {
      alloc<R = MSNestedInspectorSection>(): R;
      new: <R = MSNestedInspectorSection>() => R;
    }
  }
}

declare const MSNestedInspectorSection: cocoa.classes.MSNestedInspectorSection;
