/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreferencesController<T = any> extends cocoa.NSWindowController, cocoa.NSToolbarDelegateProtocol, cocoa.NSWindowDelegateProtocol {
    dismissAnyAlertSheet<R = void>(): R;
    validateToolbarItem<R = boolean, P0 = unknown>(_validateToolbarItem: P0): R;
    updateWindowFrame<R = void>(): R;
    existingPaneWithIdentifier<R = unknown, P0 = unknown>(_existingPaneWithIdentifier: P0): R;
    switchToPaneWithIdentifier<R = unknown, P0 = unknown>(_switchToPaneWithIdentifier: P0): R;
    switchPanes<R = void, P0 = unknown>(_switchPanes: P0): R;
    adjustColorsAction<R = void, P0 = unknown>(_adjustColorsAction: P0): R;
    awakeFromNib<R = void>(): R;
    toolbar<R = cocoa.NSToolbar>(): R;
    setToolbar<R = void, P0 = cocoa.NSToolbar>(_v: P0): R;
    preferencePanes<R = cocoa.NSCache>(): R;
    setPreferencePanes<R = void, P0 = cocoa.NSCache>(_v: P0): R;
    preferencePaneClasses<R = cocoa.NSDictionary>(): R;
    setPreferencePaneClasses<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    toolbarItemIdentifiers<R = cocoa.NSArray>(): R;
    setToolbarItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    currentPreferencePane<R = cocoa.MSPreferencePane>(): R;
    setCurrentPreferencePane<R = void, P0 = cocoa.MSPreferencePane>(_v: P0): R;
    selectedTabIndex<R = number>(): R;
    setSelectedTabIndex<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPreferencesController<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.NSToolbarDelegateProtocol, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSPreferencesController>(): R;
      new: <R = MSPreferencesController>() => R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSPreferencesController: cocoa.classes.MSPreferencesController;
