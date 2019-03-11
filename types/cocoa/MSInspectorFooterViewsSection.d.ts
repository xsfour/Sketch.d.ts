/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFooterViewsSection<T = any> extends cocoa.NSObject, cocoa.MSInspectorSectionProtocol {
    cxx_destruct<R = void>(): R;
    views<R = cocoa.NSArray>(): R;
    setViews<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorFooterViewsSection<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSInspectorSectionProtocol {
      alloc<R = MSInspectorFooterViewsSection>(): R;
      new: <R = MSInspectorFooterViewsSection>() => R;
    }
  }
}

declare const MSInspectorFooterViewsSection: cocoa.classes.MSInspectorFooterViewsSection;
