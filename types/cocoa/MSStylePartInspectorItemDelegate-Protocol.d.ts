/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorItemDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    valuesPossiblyChanged<R = void, P0 = cocoa.NSViewController>(_valuesPossiblyChanged: P0): R;
    stylePartInspectorItemDocument<R = cocoa.MSDocument, P0 = cocoa.NSViewController>(_stylePartInspectorItemDocument: P0): R;
  }
  namespace classes {
    export interface MSStylePartInspectorItemDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSStylePartInspectorItemDelegateProtocol: cocoa.classes.MSStylePartInspectorItemDelegateProtocol;
