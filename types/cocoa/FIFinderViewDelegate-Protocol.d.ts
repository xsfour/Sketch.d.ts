/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FIFinderViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    finderView_hideExtension<R = void, P0 = cocoa.FIFinderView, P1 = boolean>(_finderView: P0, _hideExtension: P1): R;
    finderViewCollapseSavePanel<R = void, P0 = cocoa.FIFinderView>(_finderViewCollapseSavePanel: P0): R;
    finderViewQuerySearchUTIs<R = cocoa.NSSet, P0 = cocoa.FIFinderView>(_finderViewQuerySearchUTIs: P0): R;
    finderView_acceptsPreviewPanelControl<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.QLPreviewPanel>(_finderView: P0, _acceptsPreviewPanelControl: P1): R;
    finderView_configureForGotoWithFilename<R = void, P0 = cocoa.FIFinderView, P1 = cocoa.NSString>(_finderView: P0, _configureForGotoWithFilename: P1): R;
    finderView_scopeChanged<R = void, P0 = cocoa.FIFinderView, P1 = boolean>(_finderView: P0, _scopeChanged: P1): R;
    finderViewViewStyleChanged<R = void, P0 = cocoa.FIFinderView>(_finderViewViewStyleChanged: P0): R;
    finderViewRequestRecentPlaces<R = cocoa.NSArray, P0 = cocoa.FIFinderView>(_finderViewRequestRecentPlaces: P0): R;
    finderView_clickedOnDisabledURL<R = void, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL>(_finderView: P0, _clickedOnDisabledURL: P1): R;
    finderView_populationInProgress<R = void, P0 = cocoa.FIFinderView, P1 = boolean>(_finderView: P0, _populationInProgress: P1): R;
    finderViewOpenSelection<R = boolean, P0 = cocoa.FIFinderView>(_finderViewOpenSelection: P0): R;
    finderViewSelectionDidChange<R = void, P0 = cocoa.FIFinderView>(_finderViewSelectionDidChange: P0): R;
    finderView_didChangeToDirectoryURL<R = void, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL>(_finderView: P0, _didChangeToDirectoryURL: P1): R;
    finderView_showAsPackageForURL<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL>(_finderView: P0, _showAsPackageForURL: P1): R;
    finderView_canSelectURL_itemIsContainer_itemIsPackage<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL, P2 = boolean, P3 = boolean>(_finderView: P0, _canSelectURL: P1, _itemIsContainer: P2, _itemIsPackage: P3): R;
    finderView_canSelectURL<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL>(_finderView: P0, _canSelectURL: P1): R;
    finderView_shouldEnableURL<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL>(_finderView: P0, _shouldEnableURL: P1): R;
    finderView_shouldEnableURL_itemIsContainer_itemIsPackage<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL, P2 = boolean, P3 = boolean>(_finderView: P0, _shouldEnableURL: P1, _itemIsContainer: P2, _itemIsPackage: P3): R;
    finderView_shouldEnableURL_itemIsContainer_itemIsPackage_pathExtension_itemHFSType_typeIdentifier<R = boolean, P0 = cocoa.FIFinderView, P1 = cocoa.NSURL, P2 = boolean, P3 = boolean, P4 = cocoa.NSString, P5 = number, P6 = cocoa.NSString>(_finderView: P0, _shouldEnableURL: P1, _itemIsContainer: P2, _itemIsPackage: P3, _pathExtension: P4, _itemHFSType: P5, _typeIdentifier: P6): R;
    finderView_shouldEnableItems_completionHandler<R = void, P0 = cocoa.FIFinderView, P1 = cocoa.NSArray, P2 = cocoa.CDUnknownBlockType>(_finderView: P0, _shouldEnableItems: P1, _completionHandler: P2): R;
  }
  namespace classes {
    export interface FIFinderViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const FIFinderViewDelegateProtocol: cocoa.classes.FIFinderViewDelegateProtocol;
