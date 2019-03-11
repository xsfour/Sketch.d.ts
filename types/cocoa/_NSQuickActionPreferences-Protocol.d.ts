/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionPreferencesProtocol<T = any> extends cocoa.NSObjectProtocol {
    save<R = void>(): R;
    setActive_forQuickAction<R = void, P0 = boolean, P1 = cocoa._NSQuickAction>(_setActive: P0, _forQuickAction: P1): R;
    applyActive<R = cocoa.NSSet, P0 = cocoa.NSSet>(_applyActive: P0): R;
  }
  namespace classes {
    export interface _NSQuickActionPreferencesProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      preferencesWithPresentation<R = cocoa._NSQuickActionPreferences, P0 = cocoa._NSQuickActionPresentation>(_preferencesWithPresentation: P0): R;
    }
  }
}
