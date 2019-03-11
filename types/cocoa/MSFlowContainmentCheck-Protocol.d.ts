/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowContainmentCheckProtocol<T = any> {
    containsFlowWithSymbolsFromDocument<R = boolean, P0 = cocoa.MSImmutableDocumentData>(_containsFlowWithSymbolsFromDocument: P0): R;
    firstFlowWithSymbolsFromDocument<R = cocoa.MSImmutableFlowConnection, P0 = cocoa.MSImmutableDocumentData>(_firstFlowWithSymbolsFromDocument: P0): R;
  }
  namespace classes {
    export interface MSFlowContainmentCheckProtocol<T = any> {  }
  }
}

declare const MSFlowContainmentCheckProtocol: cocoa.classes.MSFlowContainmentCheckProtocol;
