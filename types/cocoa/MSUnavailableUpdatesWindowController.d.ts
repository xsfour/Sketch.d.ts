/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnavailableUpdatesWindowController<T = any> extends cocoa.NSWindowController, cocoa.NSWindowDelegateProtocol {
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    openUpdatesPage<R = void, P0 = unknown>(_openUpdatesPage: P0): R;
    confirmationAction<R = void, P0 = unknown>(_confirmationAction: P0): R;
    renewalRequired<R = boolean>(): R;
    initWithWindowNibName_version_buildNumber_reason<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_initWithWindowNibName: P0, _version: P1, _buildNumber: P2, _reason: P3): R;
    blockedUpdateReason<R = number>(): R;
    setBlockedUpdateReason<R = void, P0 = number>(_v: P0): R;
    lastBuildNumber<R = cocoa.NSString>(): R;
    setLastBuildNumber<R = void, P0 = cocoa.NSString>(_v: P0): R;
    lastVersion<R = cocoa.NSString>(): R;
    setLastVersion<R = void, P0 = cocoa.NSString>(_v: P0): R;
    confirmationButton<R = cocoa.NSButton>(): R;
    setConfirmationButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    headerTextField<R = cocoa.NSTextField>(): R;
    setHeaderTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    descriptionTextField<R = cocoa.NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSUnavailableUpdatesWindowController<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSUnavailableUpdatesWindowController>(): R;
      new: <R = MSUnavailableUpdatesWindowController>() => R;
      showModalWithVersion_buildNumber_reason<R = void, P0 = unknown, P1 = unknown, P2 = number>(_showModalWithVersion: P0, _buildNumber: P1, _reason: P2): R;
    }
  }
}

declare const MSUnavailableUpdatesWindowController: cocoa.classes.MSUnavailableUpdatesWindowController;
