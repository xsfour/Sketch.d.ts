/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionProviderSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    cancel<R = void>(): R;
    quickActions<R = cocoa.NSSet>(): R;
  }
  namespace classes {
    export interface _NSQuickActionProviderSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
