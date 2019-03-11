/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessArbiterXPCInterfaceProtocol<T = any> extends cocoa.NSFileAccessArbiterProtocol {
    performBarrierWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_performBarrierWithCompletionHandler: P0): R;
    provideSubarbiterDebugInfoIncludingEverything_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_provideSubarbiterDebugInfoIncludingEverything: P0, _completionHandler: P1): R;
    provideDebugInfoWithLocalInfo_completionHandler<R = void, P0 = cocoa.NSString, P1 = cocoa.CDUnknownBlockType>(_provideDebugInfoWithLocalInfo: P0, _completionHandler: P1): R;
    getItemHasPresentersAtURL_completionHandler<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(_getItemHasPresentersAtURL: P0, _completionHandler: P1): R;
    startArbitratingWithReply<R = void, P0 = cocoa.CDUnknownBlockType>(_startArbitratingWithReply: P0): R;
    prepareToArbitrateForURLs<R = void, P0 = cocoa.NSArray>(_prepareToArbitrateForURLs: P0): R;
    grantSubarbitrationClaim_withServer_reply<R = void, P0 = cocoa.NSFileSubarbitrationClaim, P1 = cocoa.NSXPCListenerEndpoint, P2 = cocoa.CDUnknownBlockType>(_grantSubarbitrationClaim: P0, _withServer: P1, _reply: P2): R;
    removeProviderWithID_uniqueID<R = void, P0 = unknown, P1 = cocoa.NSUUID>(_removeProviderWithID: P0, _uniqueID: P1): R;
    addProvider_withID_uniqueID_forProvidedItemsURL_options_withServer_reply<R = void, P0 = cocoa.NSFileProviderXPCInterface, P1 = unknown, P2 = cocoa.NSUUID, P3 = cocoa.NSURL, P4 = number, P5 = cocoa.NSXPCListenerEndpoint, P6 = cocoa.CDUnknownBlockType>(_addProvider: P0, _withID: P1, _uniqueID: P2, _forProvidedItemsURL: P3, _options: P4, _withServer: P5, _reply: P6): R;
    removePresenterWithID<R = void, P0 = unknown>(_removePresenterWithID: P0): R;
    addPresenter_withID_fileURL_lastPresentedItemEventIdentifier_ubiquityAttributes_options_responses<R = void, P0 = cocoa.NSFilePresenterXPCInterface, P1 = unknown, P2 = cocoa.NSURL, P3 = cocoa.NSNumber, P4 = cocoa.NSSet, P5 = number, P6 = number>(_addPresenter: P0, _withID: P1, _fileURL: P2, _lastPresentedItemEventIdentifier: P3, _ubiquityAttributes: P4, _options: P5, _responses: P6): R;
    grantAccessClaim_withReply<R = void, P0 = cocoa.NSFileAccessClaim, P1 = cocoa.CDUnknownBlockType>(_grantAccessClaim: P0, _withReply: P1): R;
  }
  namespace classes {
    export interface NSFileAccessArbiterXPCInterfaceProtocol<T = any> extends cocoa.classes.NSFileAccessArbiterProtocol {  }
  }
}

declare const NSFileAccessArbiterXPCInterfaceProtocol: cocoa.classes.NSFileAccessArbiterXPCInterfaceProtocol;
