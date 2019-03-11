/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProtocol<T = any> extends cocoa.NSObjectProtocol {
    views<R = cocoa.NSArray>(): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = cocoa.NSString>(_sectionWithIdentifierWillCollapse: P0): R;
    footerViews<R = cocoa.NSArray>(): R;
    separatorInsets<R = cocoa.NSEdgeInsets>(): R;
    wantsSeparatorAfterViews<R = boolean>(): R;
  }
  namespace classes {
    export interface MSInspectorSectionProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSInspectorSectionProtocol: cocoa.classes.MSInspectorSectionProtocol;
