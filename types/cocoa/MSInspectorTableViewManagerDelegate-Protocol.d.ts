/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTableViewManagerDelegateProtocol<T = any> {
    parentViewControllerForTableViewManager<R = NSViewController, P0 = MSInspectorTableViewManager>(_parentViewControllerForTableViewManager: P0): R;
    sectionsForTableViewManager<R = NSArray, P0 = MSInspectorTableViewManager>(_sectionsForTableViewManager: P0): R;
  }
  namespace classes {
    export interface MSInspectorTableViewManagerDelegateProtocol<T = any> {  }
  }
}
