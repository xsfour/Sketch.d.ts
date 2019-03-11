/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionItemSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    validRequestorForSendType_returnType<R = cocoa.NSServicesMenuRequestor, P0 = cocoa.NSString, P1 = cocoa.NSString>(_validRequestorForSendType: P0, _returnType: P1): R;
    quickAction_anchoringViewForRequestor_showRelativeToRect_preferredEdge<R = cocoa.NSView, P0 = cocoa._NSQuickAction, P1 = cocoa.NSServicesRequestor, P2 = cocoa.CGRect, P3 = number>(_quickAction: P0, _anchoringViewForRequestor: P1, _showRelativeToRect: P2, _preferredEdge: P3): R;
    quickAction_sourceWindowForRequestor<R = cocoa.NSWindow, P0 = cocoa._NSQuickAction, P1 = cocoa.NSServicesRequestor>(_quickAction: P0, _sourceWindowForRequestor: P1): R;
    quickAction_didFailWithRequestor_error<R = void, P0 = cocoa._NSQuickAction, P1 = cocoa.NSServicesRequestor, P2 = cocoa.NSError>(_quickAction: P0, _didFailWithRequestor: P1, _error: P2): R;
    quickAction_didPerformWithRequestor<R = void, P0 = cocoa._NSQuickAction, P1 = cocoa.NSServicesRequestor>(_quickAction: P0, _didPerformWithRequestor: P1): R;
    quickAction_willPerformWithRequestor<R = void, P0 = cocoa._NSQuickAction, P1 = cocoa.NSServicesRequestor>(_quickAction: P0, _willPerformWithRequestor: P1): R;
    additionalQuickActionItemSource<R = cocoa._NSQuickActionItemSource>(): R;
    servicesRequestor<R = cocoa.NSServicesRequestor>(): R;
  }
  namespace classes {
    export interface _NSQuickActionItemSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
