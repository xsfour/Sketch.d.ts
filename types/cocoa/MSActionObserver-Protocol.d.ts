/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSActionObserverProtocol<T = any> extends NSObjectProtocol {
    actionController_didInstantActionWithID_context<R = void, P0 = MSActionController, P1 = NSString, P2 = unknown>(_actionController: P0, _didInstantActionWithID: P1, _context: P2): R;
    actionController_didFinishActionWithID_context<R = void, P0 = MSActionController, P1 = NSString, P2 = unknown>(_actionController: P0, _didFinishActionWithID: P1, _context: P2): R;
    actionController_willBeginActionWithID_context<R = void, P0 = MSActionController, P1 = NSString, P2 = unknown>(_actionController: P0, _willBeginActionWithID: P1, _context: P2): R;
  }
  namespace classes {
    export interface MSActionObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
