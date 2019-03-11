/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideRepresentationBase<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    updateAfterSelectingChild<R = void>(): R;
    modifiedMasterForInstanceInMaster<R = unknown, P0 = unknown>(_modifiedMasterForInstanceInMaster: P0): R;
    syncChildrenWithOverrides<R = void, P0 = unknown>(_syncChildrenWithOverrides: P0): R;
    initWithInstance<R = unknown, P0 = unknown>(_initWithInstance: P0): R;
    selfOrChildrenSelected<R = boolean>(): R;
    layerListExpandedType<R = boolean>(): R;
    childrenForLayerList<R = unknown>(): R;
    selectedOverrides<R = unknown>(): R;
    isEditable<R = boolean>(): R;
    instance<R = cocoa.MSSymbolInstance>(): R;
    children<R = cocoa.NSArray>(): R;
    setChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    transformForConvertingToInstance<R = cocoa.NSAffineTransform>(): R;
    isExpanded<R = boolean>(): R;
  }
  namespace classes {
    export interface MSOverrideRepresentationBase<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOverrideRepresentationBase>(): R;
      new: <R = MSOverrideRepresentationBase>() => R;
    }
  }
}

declare const MSOverrideRepresentationBase: cocoa.classes.MSOverrideRepresentationBase;
