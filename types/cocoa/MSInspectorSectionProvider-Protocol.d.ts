/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProviderProtocol<T = any> {
    sections<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSInspectorSectionProviderProtocol<T = any> {  }
  }
}
