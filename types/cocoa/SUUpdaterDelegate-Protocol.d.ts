/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SUUpdaterDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    updater_didAbortWithError<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.NSError>(_updater: P0, _didAbortWithError: P1): R;
    updater_didCancelInstallUpdateOnQuit<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem>(_updater: P0, _didCancelInstallUpdateOnQuit: P1): R;
    updater_willInstallUpdateOnQuit_immediateInstallationInvocation<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem, P2 = cocoa.NSInvocation>(_updater: P0, _willInstallUpdateOnQuit: P1, _immediateInstallationInvocation: P2): R;
    updaterDidShowModalAlert<R = void, P0 = cocoa.SUUpdater>(_updaterDidShowModalAlert: P0): R;
    updaterWillShowModalAlert<R = void, P0 = cocoa.SUUpdater>(_updaterWillShowModalAlert: P0): R;
    pathToRelaunchForUpdater<R = cocoa.NSString, P0 = cocoa.SUUpdater>(_pathToRelaunchForUpdater: P0): R;
    versionDisplayerForUpdater<R = cocoa.SUVersionDisplay, P0 = cocoa.SUUpdater>(_versionDisplayerForUpdater: P0): R;
    versionComparatorForUpdater<R = cocoa.SUVersionComparison, P0 = cocoa.SUUpdater>(_versionComparatorForUpdater: P0): R;
    updaterDidRelaunchApplication<R = void, P0 = cocoa.SUUpdater>(_updaterDidRelaunchApplication: P0): R;
    updaterWillRelaunchApplication<R = void, P0 = cocoa.SUUpdater>(_updaterWillRelaunchApplication: P0): R;
    updaterShouldRelaunchApplication<R = boolean, P0 = cocoa.SUUpdater>(_updaterShouldRelaunchApplication: P0): R;
    updater_shouldPostponeRelaunchForUpdate_untilInvoking<R = boolean, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem, P2 = cocoa.NSInvocation>(_updater: P0, _shouldPostponeRelaunchForUpdate: P1, _untilInvoking: P2): R;
    updater_willInstallUpdate<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem>(_updater: P0, _willInstallUpdate: P1): R;
    userDidCancelDownload<R = void, P0 = cocoa.SUUpdater>(_userDidCancelDownload: P0): R;
    updater_failedToDownloadUpdate_error<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem, P2 = cocoa.NSError>(_updater: P0, _failedToDownloadUpdate: P1, _error: P2): R;
    updater_willDownloadUpdate_withRequest<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem, P2 = cocoa.NSMutableURLRequest>(_updater: P0, _willDownloadUpdate: P1, _withRequest: P2): R;
    updaterDidNotFindUpdate<R = void, P0 = cocoa.SUUpdater>(_updaterDidNotFindUpdate: P0): R;
    updater_didFindValidUpdate<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcastItem>(_updater: P0, _didFindValidUpdate: P1): R;
    bestValidUpdateInAppcast_forUpdater<R = cocoa.SUAppcastItem, P0 = cocoa.SUAppcast, P1 = cocoa.SUUpdater>(_bestValidUpdateInAppcast: P0, _forUpdater: P1): R;
    updater_didFinishLoadingAppcast<R = void, P0 = cocoa.SUUpdater, P1 = cocoa.SUAppcast>(_updater: P0, _didFinishLoadingAppcast: P1): R;
    updaterShouldPromptForPermissionToCheckForUpdates<R = boolean, P0 = cocoa.SUUpdater>(_updaterShouldPromptForPermissionToCheckForUpdates: P0): R;
    feedURLStringForUpdater<R = cocoa.NSString, P0 = cocoa.SUUpdater>(_feedURLStringForUpdater: P0): R;
    feedParametersForUpdater_sendingSystemProfile<R = cocoa.NSArray, P0 = cocoa.SUUpdater, P1 = boolean>(_feedParametersForUpdater: P0, _sendingSystemProfile: P1): R;
    updaterMayCheckForUpdates<R = boolean, P0 = cocoa.SUUpdater>(_updaterMayCheckForUpdates: P0): R;
  }
  namespace classes {
    export interface SUUpdaterDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SUUpdaterDelegateProtocol: cocoa.classes.SUUpdaterDelegateProtocol;
