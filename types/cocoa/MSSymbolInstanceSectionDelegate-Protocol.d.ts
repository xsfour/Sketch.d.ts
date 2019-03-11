/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceSectionDelegateProtocol<T = any> extends cocoa.MSInspectorSectionDelegateProtocol {
    userInterfaceCacheForSection<R = cocoa.NSCache, P0 = cocoa.MSBaseInspectorSection>(_userInterfaceCacheForSection: P0): R;
  }
  namespace classes {
    export interface MSSymbolInstanceSectionDelegateProtocol<T = any> extends cocoa.classes.MSInspectorSectionDelegateProtocol {  }
  }
}

declare const MSSymbolInstanceSectionDelegateProtocol: cocoa.classes.MSSymbolInstanceSectionDelegateProtocol;
