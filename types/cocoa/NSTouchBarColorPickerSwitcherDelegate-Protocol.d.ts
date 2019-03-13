/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcherDelegateProtocol<T = any> extends NSObjectProtocol {
    switcher_didSelectItemAtIndex<R = void, P0 = NSTouchBarColorPickerSwitcher, P1 = number>(_switcher: P0, _didSelectItemAtIndex: P1): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSwitcherDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
