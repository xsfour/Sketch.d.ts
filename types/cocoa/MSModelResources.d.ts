/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelResources<T = any> extends cocoa.BCSingleton {
    cxx_destruct<R = void>(): R;
    resourcesNeedingMigration<R = unknown>(): R;
    loadNoiseImageWithIndex<R = unknown, P0 = number>(_loadNoiseImageWithIndex: P0): R;
    loadImageWithName<R = unknown, P0 = unknown>(_loadImageWithName: P0): R;
    preloadResources<R = void>(): R;
    URLForResource_withExtension<R = unknown, P0 = unknown, P1 = unknown>(_URLForResource: P0, _withExtension: P1): R;
    URLForImageResource<R = unknown, P0 = unknown>(_URLForImageResource: P0): R;
    errorPattern<R = cocoa.NSBitmapImageRep>(): R;
    setErrorPattern<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    noiseImages<R = cocoa.NSArray>(): R;
    setNoiseImages<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    bundle<R = cocoa.NSBundle>(): R;
    setBundle<R = void, P0 = cocoa.NSBundle>(_v: P0): R;
  }
  namespace classes {
    export interface MSModelResources<T = any> extends cocoa.classes.BCSingleton {  }
  }
}

declare const MSModelResources: cocoa.classes.MSModelResources;
