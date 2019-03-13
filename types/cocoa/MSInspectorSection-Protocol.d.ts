/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProtocol<T = any> extends NSObjectProtocol {
    views<R = NSArray>(): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = NSString>(_sectionWithIdentifierWillCollapse: P0): R;
    footerViews<R = NSArray>(): R;
    separatorInsets<R = NSEdgeInsets>(): R;
    wantsSeparatorAfterViews<R = boolean>(): R;
  }
  namespace classes {
    export interface MSInspectorSectionProtocol<T = any> extends NSObjectProtocol {  }
  }
}
