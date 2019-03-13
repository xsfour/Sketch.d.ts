/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowContainmentCheckProtocol<T = any> {
    containsFlowWithSymbolsFromDocument<R = boolean, P0 = MSImmutableDocumentData>(_containsFlowWithSymbolsFromDocument: P0): R;
    firstFlowWithSymbolsFromDocument<R = MSImmutableFlowConnection, P0 = MSImmutableDocumentData>(_firstFlowWithSymbolsFromDocument: P0): R;
  }
  namespace classes {
    export interface MSFlowContainmentCheckProtocol<T = any> {  }
  }
}
