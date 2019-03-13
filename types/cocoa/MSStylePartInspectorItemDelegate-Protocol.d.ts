/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorItemDelegateProtocol<T = any> extends NSObjectProtocol {
    valuesPossiblyChanged<R = void, P0 = NSViewController>(_valuesPossiblyChanged: P0): R;
    stylePartInspectorItemDocument<R = MSDocument, P0 = NSViewController>(_stylePartInspectorItemDocument: P0): R;
  }
  namespace classes {
    export interface MSStylePartInspectorItemDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
