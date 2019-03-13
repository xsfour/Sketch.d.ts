/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectInstanceProtocol<T = any> extends NSObjectProtocol {
    syncWithTemplateInstance<R = void, P0 = MSSharedObjectInstance>(_syncWithTemplateInstance: P0): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface MSSharedObjectInstanceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
