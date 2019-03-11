/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressSubscriberProtocol<T = any> extends cocoa.NSObjectProtocol {
    removePublisherForID<R = void, P0 = cocoa.NSString>(_removePublisherForID: P0): R;
    observePublisherUserInfoForID_value_forKey<R = void, P0 = cocoa.NSString, P1 = unknown, P2 = cocoa.NSString>(_observePublisherUserInfoForID: P0, _value: P1, _forKey: P2): R;
    observePublisherForID_values_forKeys<R = void, P0 = cocoa.NSString, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_observePublisherForID: P0, _values: P1, _forKeys: P2): R;
    addPublisher_forID_withValues_isOld<R = void, P0 = cocoa.NSProgressPublisher, P1 = cocoa.NSString, P2 = cocoa.NSProgressValues, P3 = boolean>(_addPublisher: P0, _forID: P1, _withValues: P2, _isOld: P3): R;
  }
  namespace classes {
    export interface NSProgressSubscriberProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSProgressSubscriberProtocol: cocoa.classes.NSProgressSubscriberProtocol;
