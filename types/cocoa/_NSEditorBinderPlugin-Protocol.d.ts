/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEditorBinderPluginProtocol<T = any> extends cocoa._NSBinderPluginProtocol {
    conditionalBehaviorOffByDefault<R = boolean, P0 = unknown>(_conditionalBehaviorOffByDefault: P0): R;
    prefersEnabledOverEditable<R = boolean, P0 = unknown>(_prefersEnabledOverEditable: P0): R;
  }
  namespace classes {
    export interface _NSEditorBinderPluginProtocol<T = any> extends cocoa.classes._NSBinderPluginProtocol {  }
  }
}
