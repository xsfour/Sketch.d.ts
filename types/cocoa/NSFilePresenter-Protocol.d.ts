/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterProtocol<T = any> extends cocoa.NSObjectProtocol {
    presentedSubitemAtURL_didResolveConflictVersion<R = void, P0 = cocoa.NSURL, P1 = cocoa.NSFileVersion>(_presentedSubitemAtURL: P0, _didResolveConflictVersion: P1): R;
    presentedSubitemAtURL_didLoseVersion<R = void, P0 = cocoa.NSURL, P1 = cocoa.NSFileVersion>(_presentedSubitemAtURL: P0, _didLoseVersion: P1): R;
    presentedSubitemAtURL_didGainVersion<R = void, P0 = cocoa.NSURL, P1 = cocoa.NSFileVersion>(_presentedSubitemAtURL: P0, _didGainVersion: P1): R;
    presentedSubitemDidChangeAtURL<R = void, P0 = cocoa.NSURL>(_presentedSubitemDidChangeAtURL: P0): R;
    presentedSubitemAtURL_didMoveToURL<R = void, P0 = cocoa.NSURL, P1 = cocoa.NSURL>(_presentedSubitemAtURL: P0, _didMoveToURL: P1): R;
    presentedSubitemDidAppearAtURL<R = void, P0 = cocoa.NSURL>(_presentedSubitemDidAppearAtURL: P0): R;
    accommodatePresentedSubitemDeletionAtURL_completionHandler<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(_accommodatePresentedSubitemDeletionAtURL: P0, _completionHandler: P1): R;
    presentedItemDidResolveConflictVersion<R = void, P0 = cocoa.NSFileVersion>(_presentedItemDidResolveConflictVersion: P0): R;
    presentedItemDidLoseVersion<R = void, P0 = cocoa.NSFileVersion>(_presentedItemDidLoseVersion: P0): R;
    presentedItemDidGainVersion<R = void, P0 = cocoa.NSFileVersion>(_presentedItemDidGainVersion: P0): R;
    presentedItemDidChangeUbiquityAttributes<R = void, P0 = cocoa.NSSet>(_presentedItemDidChangeUbiquityAttributes: P0): R;
    presentedItemDidChange<R = void>(): R;
    presentedItemDidMoveToURL<R = void, P0 = cocoa.NSURL>(_presentedItemDidMoveToURL: P0): R;
    accommodatePresentedItemDeletionWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_accommodatePresentedItemDeletionWithCompletionHandler: P0): R;
    savePresentedItemChangesWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_savePresentedItemChangesWithCompletionHandler: P0): R;
    relinquishPresentedItemToWriter<R = void, P0 = cocoa.CDUnknownBlockType>(_relinquishPresentedItemToWriter: P0): R;
    relinquishPresentedItemToReader<R = void, P0 = cocoa.CDUnknownBlockType>(_relinquishPresentedItemToReader: P0): R;
    presentedItemOperationQueue<R = cocoa.NSOperationQueue>(): R;
    presentedItemURL<R = cocoa.NSURL>(): R;
    observedPresentedItemUbiquityAttributes<R = cocoa.NSSet>(): R;
    primaryPresentedItemURL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface NSFilePresenterProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSFilePresenterProtocol: cocoa.classes.NSFilePresenterProtocol;
