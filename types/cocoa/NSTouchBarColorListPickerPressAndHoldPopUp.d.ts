/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerPressAndHoldPopUp<T = any> extends cocoa.NSObject, cocoa.NSScrubberDataSourceProtocol, cocoa.NSScrubberDelegateProtocol, cocoa.NSTouchBarPressAndHoldTransposerDelegateProtocol {
    _transposerDidEnd_cancelled<R = void, P0 = unknown, P1 = boolean>(__transposerDidEnd: P0, _cancelled: P1): R;
    dismiss<R = void>(): R;
    showFromView_inContainer<R = void, P0 = unknown, P1 = unknown>(_showFromView: P0, _inContainer: P1): R;
    dealloc<R = void>(): R;
    numberOfDarkerColors<R = number>(): R;
    setNumberOfDarkerColors<R = void, P0 = number>(_v: P0): R;
    numberOfLighterColors<R = number>(): R;
    setNumberOfLighterColors<R = void, P0 = number>(_v: P0): R;
    selectedColor<R = cocoa.NSColor>(): R;
    setSelectedColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    colorList<R = cocoa.NSColorList>(): R;
    setColorList<R = void, P0 = cocoa.NSColorList>(_v: P0): R;
    delegate<R = cocoa.NSTouchBarColorListPickerPressAndHoldPopUpDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTouchBarColorListPickerPressAndHoldPopUpDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerPressAndHoldPopUp<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSScrubberDataSourceProtocol, cocoa.classes.NSScrubberDelegateProtocol, cocoa.classes.NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarColorListPickerPressAndHoldPopUp>(): R;
      new: <R = NSTouchBarColorListPickerPressAndHoldPopUp>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerPressAndHoldPopUp: cocoa.classes.NSTouchBarColorListPickerPressAndHoldPopUp;
