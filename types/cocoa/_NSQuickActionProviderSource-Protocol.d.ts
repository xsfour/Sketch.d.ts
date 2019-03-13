/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionProviderSourceProtocol<T = any> extends NSObjectProtocol {
    cancel<R = void>(): R;
    quickActions<R = NSSet>(): R;
  }
  namespace classes {
    export interface _NSQuickActionProviderSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
