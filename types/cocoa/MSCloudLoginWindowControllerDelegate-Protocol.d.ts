/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudLoginWindowControllerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    cloudLoginControllerDidCancel<R = void, P0 = cocoa.MSCloudLoginWindowController>(_cloudLoginControllerDidCancel: P0): R;
    cloudLoginControllerDidOpenBrowser<R = void, P0 = cocoa.MSCloudLoginWindowController>(_cloudLoginControllerDidOpenBrowser: P0): R;
    cloudLoginControllerDidSignIn<R = void, P0 = cocoa.MSCloudLoginWindowController>(_cloudLoginControllerDidSignIn: P0): R;
  }
  namespace classes {
    export interface MSCloudLoginWindowControllerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSCloudLoginWindowControllerDelegateProtocol: cocoa.classes.MSCloudLoginWindowControllerDelegateProtocol;
