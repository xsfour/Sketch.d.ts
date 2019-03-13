/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcher<T = any> extends NSView, NSTouchBarPressAndHoldTransposerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    selectItem<R = void, P0 = unknown>(_selectItem: P0): R;
    _pressAndHold<R = void, P0 = unknown>(__pressAndHold: P0): R;
    hidePopover<R = void, P0 = unknown>(_hidePopover: P0): R;
    showPopover<R = void, P0 = unknown>(_showPopover: P0): R;
    _updatePopupButton<R = void>(): R;
    container<R = NSView>(): R;
    setContainer<R = void, P0 = NSView>(_v: P0): R;
    delegate<R = NSTouchBarColorPickerSwitcherDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarColorPickerSwitcherDelegate>(_v: P0): R;
    selectedItemIndex<R = number>(): R;
    setSelectedItemIndex<R = void, P0 = number>(_v: P0): R;
    items<R = NSArray>(): R;
    setItems<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSwitcher<T = any> extends NSView, NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarColorPickerSwitcher>(): R;
      new: <R = NSTouchBarColorPickerSwitcher>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSwitcher: cocoa.classes.NSTouchBarColorPickerSwitcher;
