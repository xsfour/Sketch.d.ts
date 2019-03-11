/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSeguePerformingProtocol<T = any> extends cocoa.NSObjectProtocol {
    shouldPerformSegueWithIdentifier_sender<R = boolean, P0 = cocoa.NSString, P1 = unknown>(_shouldPerformSegueWithIdentifier: P0, _sender: P1): R;
    performSegueWithIdentifier_sender<R = void, P0 = cocoa.NSString, P1 = unknown>(_performSegueWithIdentifier: P0, _sender: P1): R;
    prepareForSegue_sender<R = void, P0 = cocoa.NSStoryboardSegue, P1 = unknown>(_prepareForSegue: P0, _sender: P1): R;
  }
  namespace classes {
    export interface NSSeguePerformingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSSeguePerformingProtocol: cocoa.classes.NSSeguePerformingProtocol;
