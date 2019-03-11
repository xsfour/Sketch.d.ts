/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchFieldBinder<T = any> extends cocoa.NSViewStateBinder, cocoa.NSMenuDelegateProtocol {
    updateSearchFieldWithPredicate<R = void, P0 = unknown>(_updateSearchFieldWithPredicate: P0): R;
    check<R = void, P0 = unknown>(_check: P0): R;
    deactivateMenuItemsInMenu<R = void, P0 = unknown>(_deactivateMenuItemsInMenu: P0): R;
    searchMenuTemplate<R = unknown>(): R;
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    searchFieldCellOrControlDidClearRecents<R = void, P0 = unknown>(_searchFieldCellOrControlDidClearRecents: P0): R;
    _predicateOptionPairForBinding<R = unknown, P0 = unknown>(__predicateOptionPairForBinding: P0): R;
    _cellForObject<R = unknown>(): R;
    _countBindings<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSearchFieldBinder<T = any> extends cocoa.classes.NSViewStateBinder, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = NSSearchFieldBinder>(): R;
      new: <R = NSSearchFieldBinder>() => R;
      _enumeratedPredicateBindings<R = unknown, P0 = number>(__enumeratedPredicateBindings: P0): R;
    }
  }
}

declare const NSSearchFieldBinder: cocoa.classes.NSSearchFieldBinder;
