/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressRegistrarProtocol<T = any> {
    removeSubscriberForID<R = void, P0 = cocoa.NSString>(_removeSubscriberForID: P0): R;
    addSubscriber_forID_appBundleID_fileURL_completionHandler<R = void, P0 = cocoa.NSProgressSubscriber, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSURL, P4 = cocoa.CDUnknownBlockType>(_addSubscriber: P0, _forID: P1, _appBundleID: P2, _fileURL: P3, _completionHandler: P4): R;
    addSubscriber_forID_appBundleID_category_completionHandler<R = void, P0 = cocoa.NSProgressSubscriber, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSString, P4 = cocoa.CDUnknownBlockType>(_addSubscriber: P0, _forID: P1, _appBundleID: P2, _category: P3, _completionHandler: P4): R;
    removePublisherForID<R = void, P0 = cocoa.NSString>(_removePublisherForID: P0): R;
    observePublisherUserInfoForID_value_forKey<R = void, P0 = cocoa.NSString, P1 = unknown, P2 = cocoa.NSString>(_observePublisherUserInfoForID: P0, _value: P1, _forKey: P2): R;
    observePublisherForID_values_forKeys<R = void, P0 = cocoa.NSString, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_observePublisherForID: P0, _values: P1, _forKeys: P2): R;
    addPublisher_forID_acknowledgementAppBundleIDs_category_fileURL_initialValues_completionHandler<R = void, P0 = cocoa.NSProgressPublisher, P1 = cocoa.NSString, P2 = cocoa.NSSet, P3 = cocoa.NSString, P4 = cocoa.NSURL, P5 = cocoa.NSProgressValues, P6 = cocoa.CDUnknownBlockType>(_addPublisher: P0, _forID: P1, _acknowledgementAppBundleIDs: P2, _category: P3, _fileURL: P4, _initialValues: P5, _completionHandler: P6): R;
  }
  namespace classes {
    export interface NSProgressRegistrarProtocol<T = any> {  }
  }
}

declare const NSProgressRegistrarProtocol: cocoa.classes.NSProgressRegistrarProtocol;
