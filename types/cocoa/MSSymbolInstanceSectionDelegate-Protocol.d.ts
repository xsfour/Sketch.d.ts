/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceSectionDelegateProtocol<T = any> extends MSInspectorSectionDelegateProtocol {
    userInterfaceCacheForSection<R = NSCache, P0 = MSBaseInspectorSection>(_userInterfaceCacheForSection: P0): R;
  }
  namespace classes {
    export interface MSSymbolInstanceSectionDelegateProtocol<T = any> extends MSInspectorSectionDelegateProtocol {  }
  }
}
