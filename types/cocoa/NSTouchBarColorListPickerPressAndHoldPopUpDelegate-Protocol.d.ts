/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    popUpDidEndColorSelection_cancelled<R = void, P0 = cocoa.NSTouchBarColorListPickerPressAndHoldPopUp, P1 = boolean>(_popUpDidEndColorSelection: P0, _cancelled: P1): R;
    popUp_didHighlightColor_withKey_atIndex<R = void, P0 = cocoa.NSTouchBarColorListPickerPressAndHoldPopUp, P1 = cocoa.NSColor, P2 = cocoa.NSString, P3 = number>(_popUp: P0, _didHighlightColor: P1, _withKey: P2, _atIndex: P3): R;
    popUpDidDismiss<R = void, P0 = cocoa.NSTouchBarColorListPickerPressAndHoldPopUp>(_popUpDidDismiss: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol: cocoa.classes.NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol;
