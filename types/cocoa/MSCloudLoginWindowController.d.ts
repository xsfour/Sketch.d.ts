/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudLoginWindowController<T = any> extends cocoa.NSWindowController {
    changeEnvironment<R = void, P0 = unknown>(_changeEnvironment: P0): R;
    updateEnvironmentMenuItems<R = void>(): R;
    cancelButtonClicked<R = void, P0 = unknown>(_cancelButtonClicked: P0): R;
    openBrowserBucconClicked<R = void, P0 = unknown>(_openBrowserBucconClicked: P0): R;
    signInButtonClicked<R = void, P0 = unknown>(_signInButtonClicked: P0): R;
    environmentPopUpButton<R = cocoa.NSPopUpButton>(): R;
    setEnvironmentPopUpButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    titleLabel<R = cocoa.NSTextField>(): R;
    setTitleLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    password<R = cocoa.NSString>(): R;
    setPassword<R = void, P0 = cocoa.NSString>(_v: P0): R;
    email<R = cocoa.NSString>(): R;
    setEmail<R = void, P0 = cocoa.NSString>(_v: P0): R;
    isLoading<R = boolean>(): R;
    setIsLoading<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.MSCloudLoginWindowControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSCloudLoginWindowControllerDelegate>(_v: P0): R;
    environment<R = cocoa.SCKAPIEnvironment>(): R;
    setEnvironment<R = void, P0 = cocoa.SCKAPIEnvironment>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudLoginWindowController<T = any> extends cocoa.classes.NSWindowController {
      alloc<R = MSCloudLoginWindowController>(): R;
      new: <R = MSCloudLoginWindowController>() => R;
    }
  }
}

declare const MSCloudLoginWindowController: cocoa.classes.MSCloudLoginWindowController;
