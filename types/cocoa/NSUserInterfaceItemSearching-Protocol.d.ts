/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceItemSearchingProtocol<T = any> extends cocoa.NSObjectProtocol {
    localizedTitlesForItem<R = cocoa.NSArray, P0 = unknown>(_localizedTitlesForItem: P0): R;
    searchForItemsWithSearchString_resultLimit_matchedItemHandler<R = void, P0 = cocoa.NSString, P1 = number, P2 = cocoa.CDUnknownBlockType>(_searchForItemsWithSearchString: P0, _resultLimit: P1, _matchedItemHandler: P2): R;
    showAllHelpTopicsForSearchString<R = void, P0 = cocoa.NSString>(_showAllHelpTopicsForSearchString: P0): R;
    performActionForItem<R = void, P0 = unknown>(_performActionForItem: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceItemSearchingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSUserInterfaceItemSearchingProtocol: cocoa.classes.NSUserInterfaceItemSearchingProtocol;
