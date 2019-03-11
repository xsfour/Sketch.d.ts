/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyBindings<T = any> extends cocoa.BCSingleton {
    cxx_destruct<R = void>(): R;
    defaultKeyBindingsPath<R = unknown>(): R;
    userKeyBindingsPath<R = unknown>(): R;
    init<R = unknown>(): R;
    shortcutMap<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface MSKeyBindings<T = any> extends cocoa.classes.BCSingleton {  }
  }
}

declare const MSKeyBindings: cocoa.classes.MSKeyBindings;
