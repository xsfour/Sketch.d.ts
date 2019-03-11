/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterXPCInterfaceProtocol<T = any> extends cocoa.NSFileCoordinationDebugInfoXPCIntefaceProtocol {
    logSuspensionWarning<R = void>(): R;
    setProviderPurposeIdentifier<R = void, P0 = cocoa.NSString>(_setProviderPurposeIdentifier: P0): R;
    updateLastEventID<R = void, P0 = number>(_updateLastEventID: P0): R;
    observePresenterChange_forSubitemAtURL<R = void, P0 = boolean, P1 = cocoa.NSURLPromisePair>(_observePresenterChange: P0, _forSubitemAtURL: P1): R;
    observeVersionChangeOfKind_toItemAtURL_withClientID_name<R = void, P0 = cocoa.NSString, P1 = cocoa.NSURLPromisePair, P2 = cocoa.NSString, P3 = cocoa.NSString>(_observeVersionChangeOfKind: P0, _toItemAtURL: P1, _withClientID: P2, _name: P3): R;
    observeChangeOfUbiquityAttributes<R = void, P0 = cocoa.NSSet>(_observeChangeOfUbiquityAttributes: P0): R;
    observeSharingChangeWithSubitemURL<R = void, P0 = cocoa.NSURLPromisePair>(_observeSharingChangeWithSubitemURL: P0): R;
    observeUbiquityChangeWithSubitemURL<R = void, P0 = cocoa.NSURLPromisePair>(_observeUbiquityChangeWithSubitemURL: P0): R;
    observeReconnection<R = void>(): R;
    observeDisconnection<R = void>(): R;
    observeMoveToURL_withSubitemURL_byWriterWithPurposeID<R = void, P0 = cocoa.NSURLPromisePair, P1 = cocoa.NSURLPromisePair, P2 = unknown>(_observeMoveToURL: P0, _withSubitemURL: P1, _byWriterWithPurposeID: P2): R;
    observeChangeWithSubitemURL<R = void, P0 = cocoa.NSURLPromisePair>(_observeChangeWithSubitemURL: P0): R;
    accommodateDeletionOfSubitemAtURL_completionHandler<R = void, P0 = cocoa.NSURLPromisePair, P1 = cocoa.CDUnknownBlockType>(_accommodateDeletionOfSubitemAtURL: P0, _completionHandler: P1): R;
    saveChangesWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_saveChangesWithCompletionHandler: P0): R;
    reacquireFromWritingClaimForID_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_reacquireFromWritingClaimForID: P0, _completionHandler: P1): R;
    relinquishToWritingClaimWithID_options_purposeID_subitemURL_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = cocoa.NSURLPromisePair, P4 = cocoa.CDUnknownBlockType>(_relinquishToWritingClaimWithID: P0, _options: P1, _purposeID: P2, _subitemURL: P3, _completionHandler: P4): R;
    reacquireFromReadingClaimForID<R = void, P0 = unknown>(_reacquireFromReadingClaimForID: P0): R;
    relinquishToReadingClaimWithID_options_purposeID_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_relinquishToReadingClaimWithID: P0, _options: P1, _purposeID: P2, _completionHandler: P3): R;
  }
  namespace classes {
    export interface NSFilePresenterXPCInterfaceProtocol<T = any> extends cocoa.classes.NSFileCoordinationDebugInfoXPCIntefaceProtocol {  }
  }
}

declare const NSFilePresenterXPCInterfaceProtocol: cocoa.classes.NSFilePresenterXPCInterfaceProtocol;
