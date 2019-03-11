/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTableViewManagerDelegateProtocol<T = any> {
    parentViewControllerForTableViewManager<R = cocoa.NSViewController, P0 = cocoa.MSInspectorTableViewManager>(_parentViewControllerForTableViewManager: P0): R;
    sectionsForTableViewManager<R = cocoa.NSArray, P0 = cocoa.MSInspectorTableViewManager>(_sectionsForTableViewManager: P0): R;
  }
  namespace classes {
    export interface MSInspectorTableViewManagerDelegateProtocol<T = any> {  }
  }
}

declare const MSInspectorTableViewManagerDelegateProtocol: cocoa.classes.MSInspectorTableViewManagerDelegateProtocol;
