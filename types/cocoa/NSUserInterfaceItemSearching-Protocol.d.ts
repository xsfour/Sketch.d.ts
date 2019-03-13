/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceItemSearchingProtocol<T = any> extends NSObjectProtocol {
    localizedTitlesForItem<R = NSArray, P0 = unknown>(_localizedTitlesForItem: P0): R;
    searchForItemsWithSearchString_resultLimit_matchedItemHandler<R = void, P0 = NSString, P1 = number, P2 = CDUnknownBlockType>(_searchForItemsWithSearchString: P0, _resultLimit: P1, _matchedItemHandler: P2): R;
    showAllHelpTopicsForSearchString<R = void, P0 = NSString>(_showAllHelpTopicsForSearchString: P0): R;
    performActionForItem<R = void, P0 = unknown>(_performActionForItem: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceItemSearchingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
