/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarConstructor<T = any> extends cocoa.NSObject, cocoa.NSToolbarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    validateToolbarItems<R = void>(): R;
    constructToolbarForWindow<R = void, P0 = unknown>(_constructToolbarForWindow: P0): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    toolbar<R = cocoa.NSToolbar>(): R;
    setToolbar<R = void, P0 = cocoa.NSToolbar>(_v: P0): R;
    toolbarDefaultItemIdentifiers<R = cocoa.NSArray>(): R;
    setToolbarDefaultItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    toolbarAllowedItemIdentifiers<R = cocoa.NSArray>(): R;
    setToolbarAllowedItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    toolbarSelectableIdentifiers<R = cocoa.NSArray>(): R;
    setToolbarSelectableIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    doc<R = cocoa.MSDocument>(): R;
    setDoc<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSToolbarConstructor<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSToolbarDelegateProtocol {
      alloc<R = MSToolbarConstructor>(): R;
      new: <R = MSToolbarConstructor>() => R;
    }
  }
}

declare const MSToolbarConstructor: cocoa.classes.MSToolbarConstructor;
