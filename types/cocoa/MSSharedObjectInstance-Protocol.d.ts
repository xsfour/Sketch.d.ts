/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectInstanceProtocol<T = any> extends cocoa.NSObjectProtocol {
    syncWithTemplateInstance<R = void, P0 = cocoa.MSSharedObjectInstance>(_syncWithTemplateInstance: P0): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface MSSharedObjectInstanceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSSharedObjectInstanceProtocol: cocoa.classes.MSSharedObjectInstanceProtocol;
