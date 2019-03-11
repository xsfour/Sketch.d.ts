/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    reloadItemsForSection<R = void, P0 = cocoa.NSViewController>(_reloadItemsForSection: P0): R;
    persistentlyCollapse_sectionWithIdentifier_reloadTarget<R = void, P0 = boolean, P1 = cocoa.NSString, P2 = cocoa.NSViewController>(_persistentlyCollapse: P0, _sectionWithIdentifier: P1, _reloadTarget: P2): R;
    isSectionWithIdentifierCollapsed<R = boolean, P0 = cocoa.NSString>(_isSectionWithIdentifierCollapsed: P0): R;
    documentForInspectorSection<R = cocoa.MSDocument, P0 = cocoa.NSViewController>(_documentForInspectorSection: P0): R;
    sectionDidResize<R = void, P0 = cocoa.NSViewController>(_sectionDidResize: P0): R;
  }
  namespace classes {
    export interface MSInspectorSectionDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSInspectorSectionDelegateProtocol: cocoa.classes.MSInspectorSectionDelegateProtocol;
