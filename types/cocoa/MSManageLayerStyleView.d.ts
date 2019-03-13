/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageLayerStyleView<T = any> extends MSManageSharedObjectBaseViewController {
    generateSymbolPreviews<R = void>(): R;
    sharedObjectsSortedByName<R = unknown>(): R;
    layerStylePreviews<R = NSMutableDictionary>(): R;
    setLayerStylePreviews<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface MSManageLayerStyleView<T = any> extends MSManageSharedObjectBaseViewController {
      alloc<R = MSManageLayerStyleView>(): R;
      new: <R = MSManageLayerStyleView>() => R;
    }
  }
}

declare const MSManageLayerStyleView: cocoa.classes.MSManageLayerStyleView;
