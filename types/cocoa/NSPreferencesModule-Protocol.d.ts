/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferencesModuleProtocol<T = any> {
    preferencesWindowShouldClose<R = boolean>(): R;
    moduleCanBeRemoved<R = boolean>(): R;
    moduleWasInstalled<R = void>(): R;
    moduleWillBeRemoved<R = void>(): R;
    didChange<R = void>(): R;
    initializeFromDefaults<R = void>(): R;
    willBeDisplayed<R = void>(): R;
    saveChanges<R = void>(): R;
    hasChangesPending<R = boolean>(): R;
    imageForPreferenceNamed<R = cocoa.NSImage, P0 = cocoa.NSString>(_imageForPreferenceNamed: P0): R;
    viewForPreferenceNamed<R = cocoa.NSBox, P0 = cocoa.NSString>(_viewForPreferenceNamed: P0): R;
  }
  namespace classes {
    export interface NSPreferencesModuleProtocol<T = any> {  }
  }
}

declare const NSPreferencesModuleProtocol: cocoa.classes.NSPreferencesModuleProtocol;
