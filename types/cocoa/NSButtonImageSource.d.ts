/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonImageSource<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol, cocoa.NSCopyingProtocol {
    hasImageWithAlpha<R = boolean>(): R;
    focusRingImageSize<R = cocoa.CGSize>(): R;
    imageSize<R = cocoa.CGSize>(): R;
    useHighlightEffectForState<R = boolean, P0 = cocoa.NSButtonState>(_useHighlightEffectForState: P0): R;
    useDisabledEffectForState<R = boolean, P0 = cocoa.NSButtonState>(_useDisabledEffectForState: P0): R;
    isOpaqueForState<R = boolean, P0 = cocoa.NSButtonState>(_isOpaqueForState: P0): R;
    isBorderedForState<R = boolean, P0 = cocoa.NSButtonState>(_isBorderedForState: P0): R;
    bezelStyleForState<R = number, P0 = cocoa.NSButtonState>(_bezelStyleForState: P0): R;
    focusRingImageForState<R = unknown, P0 = cocoa.NSButtonState>(_focusRingImageForState: P0): R;
    imageForState<R = unknown, P0 = cocoa.NSButtonState>(_imageForState: P0): R;
    dealloc<R = void>(): R;
    _findButtonImageForState<R = unknown, P0 = cocoa.NSButtonState>(__findButtonImageForState: P0): R;
    _archiveToFile<R = boolean, P0 = unknown>(__archiveToFile: P0): R;
    _initWithWidget<R = unknown, P0 = cocoa.__CFString>(__initWithWidget: P0): R;
    _initWithName_propertyList<R = unknown, P0 = unknown, P1 = unknown>(__initWithName: P0, _propertyList: P1): R;
    _scanImages<R = void>(): R;
  }
  namespace classes {
    export interface NSButtonImageSource<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSButtonImageSource>(): R;
      new: <R = NSButtonImageSource>() => R;
      archiveButtonImageSourceWithName_toDirectory<R = boolean, P0 = unknown, P1 = unknown>(_archiveButtonImageSourceWithName: P0, _toDirectory: P1): R;
      buttonImageSourceWithName<R = unknown, P0 = unknown>(_buttonImageSourceWithName: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSButtonImageSource: cocoa.classes.NSButtonImageSource;
