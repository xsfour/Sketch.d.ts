/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    applicationDidChangeOcclusionState<R = void, P0 = cocoa.NSNotification>(_applicationDidChangeOcclusionState: P0): R;
    applicationDidChangeScreenParameters<R = void, P0 = cocoa.NSNotification>(_applicationDidChangeScreenParameters: P0): R;
    applicationWillTerminate<R = void, P0 = cocoa.NSNotification>(_applicationWillTerminate: P0): R;
    applicationDidUpdate<R = void, P0 = cocoa.NSNotification>(_applicationDidUpdate: P0): R;
    applicationWillUpdate<R = void, P0 = cocoa.NSNotification>(_applicationWillUpdate: P0): R;
    applicationDidResignActive<R = void, P0 = cocoa.NSNotification>(_applicationDidResignActive: P0): R;
    applicationWillResignActive<R = void, P0 = cocoa.NSNotification>(_applicationWillResignActive: P0): R;
    applicationDidBecomeActive<R = void, P0 = cocoa.NSNotification>(_applicationDidBecomeActive: P0): R;
    applicationWillBecomeActive<R = void, P0 = cocoa.NSNotification>(_applicationWillBecomeActive: P0): R;
    applicationDidUnhide<R = void, P0 = cocoa.NSNotification>(_applicationDidUnhide: P0): R;
    applicationWillUnhide<R = void, P0 = cocoa.NSNotification>(_applicationWillUnhide: P0): R;
    applicationDidHide<R = void, P0 = cocoa.NSNotification>(_applicationDidHide: P0): R;
    applicationWillHide<R = void, P0 = cocoa.NSNotification>(_applicationWillHide: P0): R;
    applicationDidFinishLaunching<R = void, P0 = cocoa.NSNotification>(_applicationDidFinishLaunching: P0): R;
    applicationWillFinishLaunching<R = void, P0 = cocoa.NSNotification>(_applicationWillFinishLaunching: P0): R;
    application_delegateHandlesKey<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSString>(_application: P0, _delegateHandlesKey: P1): R;
    application_userDidAcceptCloudKitShareWithMetadata<R = void, P0 = cocoa.NSApplication, P1 = cocoa.CKShareMetadata>(_application: P0, _userDidAcceptCloudKitShareWithMetadata: P1): R;
    application_didUpdateUserActivity<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSUserActivity>(_application: P0, _didUpdateUserActivity: P1): R;
    application_didFailToContinueUserActivityWithType_error<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSString, P2 = cocoa.NSError>(_application: P0, _didFailToContinueUserActivityWithType: P1, _error: P2): R;
    application_continueUserActivity_restorationHandler<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSUserActivity, P2 = cocoa.CDUnknownBlockType>(_application: P0, _continueUserActivity: P1, _restorationHandler: P2): R;
    application_willContinueUserActivityWithType<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSString>(_application: P0, _willContinueUserActivityWithType: P1): R;
    application_didDecodeRestorableState<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSCoder>(_application: P0, _didDecodeRestorableState: P1): R;
    application_willEncodeRestorableState<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSCoder>(_application: P0, _willEncodeRestorableState: P1): R;
    application_didReceiveRemoteNotification<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSDictionary>(_application: P0, _didReceiveRemoteNotification: P1): R;
    application_didFailToRegisterForRemoteNotificationsWithError<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSError>(_application: P0, _didFailToRegisterForRemoteNotificationsWithError: P1): R;
    application_didRegisterForRemoteNotificationsWithDeviceToken<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSData>(_application: P0, _didRegisterForRemoteNotificationsWithDeviceToken: P1): R;
    application_willPresentError<R = cocoa.NSError, P0 = cocoa.NSApplication, P1 = cocoa.NSError>(_application: P0, _willPresentError: P1): R;
    applicationDockMenu<R = cocoa.NSMenu, P0 = cocoa.NSApplication>(_applicationDockMenu: P0): R;
    applicationShouldHandleReopen_hasVisibleWindows<R = boolean, P0 = cocoa.NSApplication, P1 = boolean>(_applicationShouldHandleReopen: P0, _hasVisibleWindows: P1): R;
    applicationShouldTerminateAfterLastWindowClosed<R = boolean, P0 = cocoa.NSApplication>(_applicationShouldTerminateAfterLastWindowClosed: P0): R;
    application_printFiles_withSettings_showPrintPanels<R = number, P0 = cocoa.NSApplication, P1 = cocoa.NSArray, P2 = cocoa.NSDictionary, P3 = boolean>(_application: P0, _printFiles: P1, _withSettings: P2, _showPrintPanels: P3): R;
    application_printFile<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSString>(_application: P0, _printFile: P1): R;
    application_openFileWithoutUI<R = boolean, P0 = unknown, P1 = cocoa.NSString>(_application: P0, _openFileWithoutUI: P1): R;
    applicationOpenUntitledFile<R = boolean, P0 = cocoa.NSApplication>(_applicationOpenUntitledFile: P0): R;
    applicationShouldOpenUntitledFile<R = boolean, P0 = cocoa.NSApplication>(_applicationShouldOpenUntitledFile: P0): R;
    application_openTempFile<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSString>(_application: P0, _openTempFile: P1): R;
    application_openFiles<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSArray>(_application: P0, _openFiles: P1): R;
    application_openFile<R = boolean, P0 = cocoa.NSApplication, P1 = cocoa.NSString>(_application: P0, _openFile: P1): R;
    application_openURLs<R = void, P0 = cocoa.NSApplication, P1 = cocoa.NSArray>(_application: P0, _openURLs: P1): R;
    applicationShouldTerminate<R = number, P0 = cocoa.NSApplication>(_applicationShouldTerminate: P0): R;
  }
  namespace classes {
    export interface NSApplicationDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSApplicationDelegateProtocol: cocoa.classes.NSApplicationDelegateProtocol;
