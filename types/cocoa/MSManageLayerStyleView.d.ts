/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageLayerStyleView<T = any> extends cocoa.MSManageSharedObjectBaseViewController {
    generateSymbolPreviews<R = void>(): R;
    sharedObjectsSortedByName<R = unknown>(): R;
    layerStylePreviews<R = cocoa.NSMutableDictionary>(): R;
    setLayerStylePreviews<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface MSManageLayerStyleView<T = any> extends cocoa.classes.MSManageSharedObjectBaseViewController {
      alloc<R = MSManageLayerStyleView>(): R;
      new: <R = MSManageLayerStyleView>() => R;
    }
  }
}

declare const MSManageLayerStyleView: cocoa.classes.MSManageLayerStyleView;
