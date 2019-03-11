/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetStore<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    presetWithName_matchingSize<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(_presetWithName: P0, _matchingSize: P1): R;
    suggestedNameForUserPreset<R = unknown>(): R;
    artboardPresetStoreDidChange<R = void, P0 = unknown>(_artboardPresetStoreDidChange: P0): R;
    saveUserPresets<R = boolean, P0 = unknown>(_saveUserPresets: P0): R;
    userPresetsURL<R = unknown>(): R;
    removePreset_error<R = boolean, P0 = unknown, P1 = unknown>(_removePreset: P0, _error: P1): R;
    savePreset_error<R = boolean, P0 = unknown, P1 = unknown>(_savePreset: P0, _error: P1): R;
    loadUserPresets<R = void>(): R;
    systemCategories<R = unknown>(): R;
    resizablePresetMatchingSize_preferredCategory<R = unknown, P0 = cocoa.CGSize, P1 = unknown>(_resizablePresetMatchingSize: P0, _preferredCategory: P1): R;
    presetWithSize_preferredCategory<R = unknown, P0 = cocoa.CGSize, P1 = unknown>(_presetWithSize: P0, _preferredCategory: P1): R;
    enumeratePresetsInCategory_usingBlock<R = boolean, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_enumeratePresetsInCategory: P0, _usingBlock: P1): R;
    customPresetsCategory<R = cocoa.MSArtboardPresetsCategory>(): R;
    categories<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSArtboardPresetStore<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSArtboardPresetStore>(): R;
      new: <R = MSArtboardPresetStore>() => R;
      setIndexOfLastSelectedCategory<R = void, P0 = number>(_setIndexOfLastSelectedCategory: P0): R;
      indexOfLastSelectedCategory<R = number>(): R;
      systemPresetsURL<R = unknown>(): R;
    }
  }
}

declare const MSArtboardPresetStore: cocoa.classes.MSArtboardPresetStore;
