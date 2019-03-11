/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPreset<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    oppositeOrientationPreset<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    initWithName_size_imageName<R = unknown, P0 = unknown, P1 = cocoa.CGSize, P2 = unknown>(_initWithName: P0, _size: P1, _imageName: P2): R;
    resizeScaleFromArtboardSize<R = number, P0 = cocoa.CGSize>(_resizeScaleFromArtboardSize: P0): R;
    matchWithArtboardSize<R = number, P0 = cocoa.CGSize>(_matchWithArtboardSize: P0): R;
    isNew<R = boolean>(): R;
    setIsNew<R = void, P0 = boolean>(_v: P0): R;
    isSizeToFit<R = boolean>(): R;
    tooltip<R = cocoa.NSString>(): R;
    imageName<R = cocoa.NSString>(): R;
    setImageName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    allowResizedMatching<R = boolean>(): R;
    offersLandscapeVariant<R = boolean>(): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    image<R = cocoa.NSImage>(): R;
    sizeDescription<R = cocoa.NSString>(): R;
    size<R = cocoa.CGSize>(): R;
    setSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    layerName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSArtboardPreset<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSArtboardPreset>(): R;
      new: <R = MSArtboardPreset>() => R;
      sizeToFitPresetWithName_size<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(_sizeToFitPresetWithName: P0, _size: P1): R;
      resizeScaleFromArtboardSize_presetSize_offeringLandscapeVariant<R = number, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = boolean>(_resizeScaleFromArtboardSize: P0, _presetSize: P1, _offeringLandscapeVariant: P2): R;
      compareArtboardSize_withScaledPresetSize_offeringLandscapeVariant<R = number, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = boolean>(_compareArtboardSize: P0, _withScaledPresetSize: P1, _offeringLandscapeVariant: P2): R;
    }
  }
}

declare const MSArtboardPreset: cocoa.classes.MSArtboardPreset;
