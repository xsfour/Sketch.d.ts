/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorAction<T = any> extends cocoa.MSDocumentAction, cocoa.MSWindowBadgeActionProtocol {
    availableClients<R = unknown>(): R;
    label<R = unknown>(): R;
    mirrorClientsDidChangeNotification<R = void, P0 = unknown>(_mirrorClientsDidChangeNotification: P0): R;
    mirrorController<R = cocoa.SMKMirrorController>(): R;
    badgeTint<R = cocoa.NSColor>(): R;
    numberOfBadges<R = number>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMirrorAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.MSWindowBadgeActionProtocol {
      alloc<R = MSMirrorAction>(): R;
      new: <R = MSMirrorAction>() => R;
    }
  }
}

declare const MSMirrorAction: cocoa.classes.MSMirrorAction;
