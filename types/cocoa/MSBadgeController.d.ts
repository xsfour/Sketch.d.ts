/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBadgeController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    refresh<R = void>(): R;
    updateBadge_forAction<R = unknown, P0 = unknown, P1 = unknown>(_updateBadge: P0, _forAction: P1): R;
    activeBadgingActionsForController<R = unknown, P0 = unknown>(_activeBadgingActionsForController: P0): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    activeActions<R = cocoa.NSArray>(): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    activeWindowBadgingActions<R = cocoa.NSArray>(): R;
    documentWindow<R = cocoa.MSDocumentWindow>(): R;
  }
  namespace classes {
    export interface MSBadgeController<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBadgeController>(): R;
      new: <R = MSBadgeController>() => R;
    }
  }
}

declare const MSBadgeController: cocoa.classes.MSBadgeController;
