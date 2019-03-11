/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudDocumentViewController<T = any> extends cocoa.MSCloudBaseViewController {
    openShareSettings<R = void, P0 = unknown>(_openShareSettings: P0): R;
    openPublicURL<R = void, P0 = unknown>(_openPublicURL: P0): R;
    update<R = void, P0 = unknown>(_update: P0): R;
    upload<R = void, P0 = unknown>(_upload: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    reloadTitleLabel<R = void>(): R;
    scheduledTimeLabelUpdateFired<R = void, P0 = unknown>(_scheduledTimeLabelUpdateFired: P0): R;
    scheduleTimeLabelUpdate<R = void>(): R;
    reloadTimeLabel<R = void>(): R;
    reloadData<R = void>(): R;
    edgeInsets<R = cocoa.NSEdgeInsets>(): R;
    timeLabelUpdateTimer<R = cocoa.NSTimer>(): R;
    setTimeLabelUpdateTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    permissionLabel<R = cocoa.NSTextField>(): R;
    setPermissionLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    settingsButton<R = cocoa.NSButton>(): R;
    setSettingsButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    linkButton<R = cocoa.MSCursorButton>(): R;
    setLinkButton<R = void, P0 = cocoa.MSCursorButton>(_v: P0): R;
    uploadButtonWidthConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setUploadButtonWidthConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    updateButton<R = cocoa.NSButton>(): R;
    setUpdateButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    uploadButton<R = cocoa.NSButton>(): R;
    setUploadButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    buttonStackView<R = cocoa.NSStackView>(): R;
    setButtonStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    canUpdateShare<R = boolean>(): R;
    share<R = cocoa.SCKShare>(): R;
  }
  namespace classes {
    export interface MSCloudDocumentViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudDocumentViewController>(): R;
      new: <R = MSCloudDocumentViewController>() => R;
    }
  }
}

declare const MSCloudDocumentViewController: cocoa.classes.MSCloudDocumentViewController;
