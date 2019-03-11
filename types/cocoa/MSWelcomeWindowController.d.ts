/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeWindowController<T = any> extends cocoa.CHWindowController, cocoa.NSMenuDelegateProtocol, cocoa.NSWindowDelegateProtocol, cocoa.MSWelcomeCollectionViewDelegateProtocol {
    scrollViewDidScrollNotification<R = void, P0 = unknown>(_scrollViewDidScrollNotification: P0): R;
    cloudSharesController_didFailLoadingWithError<R = void, P0 = unknown, P1 = unknown>(_cloudSharesController: P0, _didFailLoadingWithError: P1): R;
    cloudSharesController_didFinishLoadingShares<R = void, P0 = unknown, P1 = unknown>(_cloudSharesController: P0, _didFinishLoadingShares: P1): R;
    collectionItems<R = unknown>(): R;
    cloudItems<R = unknown>(): R;
    templateItems<R = unknown>(): R;
    recentDocumentItems<R = unknown>(): R;
    clearRecentDocuments<R = void, P0 = unknown>(_clearRecentDocuments: P0): R;
    revealDocumentInCloud<R = void, P0 = unknown>(_revealDocumentInCloud: P0): R;
    revealDocumentInFinder<R = void, P0 = unknown>(_revealDocumentInFinder: P0): R;
    openTemplateAtURL<R = void, P0 = unknown>(_openTemplateAtURL: P0): R;
    openDocumentAtURL<R = void, P0 = unknown>(_openDocumentAtURL: P0): R;
    requestCloudItems<R = void>(): R;
    joinSketchCloud<R = void, P0 = unknown>(_joinSketchCloud: P0): R;
    visitSketchMirrorPage<R = void, P0 = unknown>(_visitSketchMirrorPage: P0): R;
    subscribeToNewsletter<R = void, P0 = unknown>(_subscribeToNewsletter: P0): R;
    visitPluginsPage<R = void, P0 = unknown>(_visitPluginsPage: P0): R;
    visitLearnPage<R = void, P0 = unknown>(_visitLearnPage: P0): R;
    confirm<R = void, P0 = unknown>(_confirm: P0): R;
    openDocument<R = void, P0 = unknown>(_openDocument: P0): R;
    refreshScrollability<R = void>(): R;
    shouldEnableCollectionViewScrolling<R = boolean>(): R;
    showCollection<R = void, P0 = number>(_showCollection: P0): R;
    pickCollection<R = void, P0 = unknown>(_pickCollection: P0): R;
    togglePluginsButton<R = void, P0 = boolean>(_togglePluginsButton: P0): R;
    cloudUserDidChange<R = void, P0 = unknown>(_cloudUserDidChange: P0): R;
    clearCaches<R = void>(): R;
    centerWindowIfAppropriate<R = void>(): R;
    updateCollectionSegments<R = void>(): R;
    cloudSharesController<R = cocoa.MSCloudSharesController>(): R;
    setCloudSharesController<R = void, P0 = cocoa.MSCloudSharesController>(_v: P0): R;
    cachedTemplateItems<R = cocoa.NSArray>(): R;
    setCachedTemplateItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    cachedRecentDocumentItems<R = cocoa.NSArray>(): R;
    setCachedRecentDocumentItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    previewImageCache<R = cocoa.MSPreviewImageCache>(): R;
    collectionToShow<R = number>(): R;
    setCollectionToShow<R = void, P0 = number>(_v: P0): R;
    versionTextField<R = cocoa.NSTextField>(): R;
    setVersionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    templatesContextMenu<R = cocoa.NSMenu>(): R;
    setTemplatesContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    recentDocumentsContextMenu<R = cocoa.NSMenu>(): R;
    setRecentDocumentsContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    pluginsButton<R = cocoa.MSCallToActionButton>(): R;
    setPluginsButton<R = void, P0 = cocoa.MSCallToActionButton>(_v: P0): R;
    newsletterButton<R = cocoa.MSCallToActionButton>(): R;
    setNewsletterButton<R = void, P0 = cocoa.MSCallToActionButton>(_v: P0): R;
    doNotShowAgainButton<R = cocoa.NSButton>(): R;
    setDoNotShowAgainButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    confirmButton<R = cocoa.NSButton>(): R;
    setConfirmButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    collectionsWidthConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setCollectionsWidthConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    collectionsSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setCollectionsSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    collectionStaticContainerView<R = cocoa.NSView>(): R;
    setCollectionStaticContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    collectionScrollView<R = cocoa.NSScrollView>(): R;
    setCollectionScrollView<R = void, P0 = cocoa.NSScrollView>(_v: P0): R;
    collectionView<R = cocoa.NSCollectionView>(): R;
    setCollectionView<R = void, P0 = cocoa.NSCollectionView>(_v: P0): R;
    closeButton<R = cocoa.NSButton>(): R;
    setCloseButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    numberOfDocuments<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSWelcomeWindowController<T = any> extends cocoa.classes.CHWindowController, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSWindowDelegateProtocol, cocoa.classes.MSWelcomeCollectionViewDelegateProtocol {
      alloc<R = MSWelcomeWindowController>(): R;
      new: <R = MSWelcomeWindowController>() => R;
      templateURLsAtDirectoryURL<R = unknown, P0 = unknown>(_templateURLsAtDirectoryURL: P0): R;
      hideWelcomeWindowIfNeeded<R = boolean>(): R;
      showWelcomeWindowIfAppropriate<R = boolean>(): R;
      showWelcomeWindowCollection_isLaunching<R = void, P0 = number, P1 = boolean>(_showWelcomeWindowCollection: P0, _isLaunching: P1): R;
    }
  }
}

declare const MSWelcomeWindowController: cocoa.classes.MSWelcomeWindowController;
