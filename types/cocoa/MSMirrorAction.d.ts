/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    availableClients<R = unknown>(): R;
    label<R = unknown>(): R;
    mirrorClientsDidChangeNotification<R = void, P0 = unknown>(_mirrorClientsDidChangeNotification: P0): R;
    mirrorController<R = SMKMirrorController>(): R;
    badgeTint<R = NSColor>(): R;
    numberOfBadges<R = number>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMirrorAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSMirrorAction>(): R;
      new: <R = MSMirrorAction>() => R;
    }
  }
}

declare const MSMirrorAction: cocoa.classes.MSMirrorAction;
