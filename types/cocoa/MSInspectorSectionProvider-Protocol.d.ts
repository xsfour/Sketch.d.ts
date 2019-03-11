/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProviderProtocol<T = any> {
    sections<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSInspectorSectionProviderProtocol<T = any> {  }
  }
}

declare const MSInspectorSectionProviderProtocol: cocoa.classes.MSInspectorSectionProviderProtocol;
