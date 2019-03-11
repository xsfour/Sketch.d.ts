/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BITCrashManagerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    crashManagerDidFinishSendingCrashReport<R = void, P0 = cocoa.BITCrashManager>(_crashManagerDidFinishSendingCrashReport: P0): R;
    crashManager_didFailWithError<R = void, P0 = cocoa.BITCrashManager, P1 = cocoa.NSError>(_crashManager: P0, _didFailWithError: P1): R;
    crashManagerWillSendCrashReport<R = void, P0 = cocoa.BITCrashManager>(_crashManagerWillSendCrashReport: P0): R;
    crashManagerWillCancelSendingCrashReport<R = void, P0 = cocoa.BITCrashManager>(_crashManagerWillCancelSendingCrashReport: P0): R;
    crashManagerWillShowSubmitCrashReportAlert<R = void, P0 = cocoa.BITCrashManager>(_crashManagerWillShowSubmitCrashReportAlert: P0): R;
    attachmentForCrashManager<R = cocoa.BITHockeyAttachment, P0 = cocoa.BITCrashManager>(_attachmentForCrashManager: P0): R;
    applicationLogForCrashManager<R = cocoa.NSString, P0 = cocoa.BITCrashManager>(_applicationLogForCrashManager: P0): R;
    showMainApplicationWindowForCrashManager<R = void, P0 = cocoa.BITCrashManager>(_showMainApplicationWindowForCrashManager: P0): R;
  }
  namespace classes {
    export interface BITCrashManagerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BITCrashManagerDelegateProtocol: cocoa.classes.BITCrashManagerDelegateProtocol;
