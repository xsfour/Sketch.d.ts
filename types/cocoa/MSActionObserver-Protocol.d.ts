/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSActionObserverProtocol<T = any> extends cocoa.NSObjectProtocol {
    actionController_didInstantActionWithID_context<R = void, P0 = cocoa.MSActionController, P1 = cocoa.NSString, P2 = unknown>(_actionController: P0, _didInstantActionWithID: P1, _context: P2): R;
    actionController_didFinishActionWithID_context<R = void, P0 = cocoa.MSActionController, P1 = cocoa.NSString, P2 = unknown>(_actionController: P0, _didFinishActionWithID: P1, _context: P2): R;
    actionController_willBeginActionWithID_context<R = void, P0 = cocoa.MSActionController, P1 = cocoa.NSString, P2 = unknown>(_actionController: P0, _willBeginActionWithID: P1, _context: P2): R;
  }
  namespace classes {
    export interface MSActionObserverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSActionObserverProtocol: cocoa.classes.MSActionObserverProtocol;
