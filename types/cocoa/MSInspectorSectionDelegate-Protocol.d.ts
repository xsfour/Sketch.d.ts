/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionDelegateProtocol<T = any> extends NSObjectProtocol {
    reloadItemsForSection<R = void, P0 = NSViewController>(_reloadItemsForSection: P0): R;
    persistentlyCollapse_sectionWithIdentifier_reloadTarget<R = void, P0 = boolean, P1 = NSString, P2 = NSViewController>(_persistentlyCollapse: P0, _sectionWithIdentifier: P1, _reloadTarget: P2): R;
    isSectionWithIdentifierCollapsed<R = boolean, P0 = NSString>(_isSectionWithIdentifierCollapsed: P0): R;
    documentForInspectorSection<R = MSDocument, P0 = NSViewController>(_documentForInspectorSection: P0): R;
    sectionDidResize<R = void, P0 = NSViewController>(_sectionDidResize: P0): R;
  }
  namespace classes {
    export interface MSInspectorSectionDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
