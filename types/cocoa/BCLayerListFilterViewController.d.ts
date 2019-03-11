/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLayerListFilterViewController<T = any> extends cocoa.NSViewController, cocoa.NSMenuDelegateProtocol, cocoa.NSSearchFieldDelegateProtocol, cocoa.NSTextViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    refreshFilterTokens<R = void>(): R;
    dropLastFilterToken<R = void>(): R;
    refreshAfterFilterChange<R = void>(): R;
    turnOffSelectedFilterTokens<R = void>(): R;
    refreshLayerList<R = void>(): R;
    filterTokenButtonClicked<R = void, P0 = unknown>(_filterTokenButtonClicked: P0): R;
    clearFilterStringAndTokens<R = void, P0 = unknown>(_clearFilterStringAndTokens: P0): R;
    toggleFilter<R = void, P0 = unknown>(_toggleFilter: P0): R;
    showFilterMenu<R = void, P0 = unknown>(_showFilterMenu: P0): R;
    findLayer<R = void, P0 = unknown>(_findLayer: P0): R;
    tokenButtonWithTitle_filterType<R = unknown, P0 = unknown, P1 = number>(_tokenButtonWithTitle: P0, _filterType: P1): R;
    showClearButtonIfAppropriate<R = void>(): R;
    selectedFilterTokenButtons<R = unknown>(): R;
    filterTokenButtons<R = unknown>(): R;
    sidebar<R = unknown>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    control_textShouldEndEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldEndEditing: P1): R;
    searchFieldSelectionChanged<R = void, P0 = unknown>(_searchFieldSelectionChanged: P0): R;
    control_textShouldBeginEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldBeginEditing: P1): R;
    stopObservingFilterTextSelection<R = void, P0 = unknown>(_stopObservingFilterTextSelection: P0): R;
    observeFilterTextSelection<R = void, P0 = unknown>(_observeFilterTextSelection: P0): R;
    editFilterString<R = void>(): R;
    applyAppearance<R = void>(): R;
    namedImageOwners<R = cocoa.NSMutableDictionary>(): R;
    setNamedImageOwners<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    filterTokensView<R = cocoa.NSView>(): R;
    setFilterTokensView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    filterStringTextField<R = cocoa.NSSearchField>(): R;
    setFilterStringTextField<R = void, P0 = cocoa.NSSearchField>(_v: P0): R;
    filterMenuItemTemplateImages<R = cocoa.NSDictionary>(): R;
    setFilterMenuItemTemplateImages<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    filterPickerMenu<R = cocoa.NSMenu>(): R;
    setFilterPickerMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    filterButton<R = cocoa.NSButton>(): R;
    setFilterButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    designedClearButtonWidth<R = number>(): R;
    setDesignedClearButtonWidth<R = void, P0 = number>(_v: P0): R;
    clearButton<R = cocoa.NSButton>(): R;
    setClearButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    filter<R = cocoa.BCFilterInfo>(): R;
    setFilter<R = void, P0 = cocoa.BCFilterInfo>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface BCLayerListFilterViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.NSSearchFieldDelegateProtocol, cocoa.classes.NSTextViewDelegateProtocol {
      alloc<R = BCLayerListFilterViewController>(): R;
      new: <R = BCLayerListFilterViewController>() => R;
    }
  }
}

declare const BCLayerListFilterViewController: cocoa.classes.BCLayerListFilterViewController;
