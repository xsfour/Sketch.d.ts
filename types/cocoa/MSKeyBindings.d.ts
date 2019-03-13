/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyBindings<T = any> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    defaultKeyBindingsPath<R = unknown>(): R;
    userKeyBindingsPath<R = unknown>(): R;
    init<R = unknown>(): R;
    shortcutMap<R = NSDictionary>(): R;
  }
  namespace classes {
    export interface MSKeyBindings<T = any> extends BCSingleton {  }
  }
}

declare const MSKeyBindings: cocoa.classes.MSKeyBindings;
