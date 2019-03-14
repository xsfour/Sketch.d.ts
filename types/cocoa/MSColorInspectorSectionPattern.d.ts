/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionPattern<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection {
    updatePatternWellImage<R = void>(): R;
    patternWellAction<R = void, P0 = unknown>(_patternWellAction: P0): R;
    choosePatternImage<R = void, P0 = unknown>(_choosePatternImage: P0): R;
    enableSectionButtonAction<R = void, P0 = unknown>(_enableSectionButtonAction: P0): R;
    awakeFromNib<R = void>(): R;
    patternTilButton<R = NSPopUpButton>(): R;
    setPatternTilButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    choosePatternButton<R = NSButton>(): R;
    setChoosePatternButton<R = void, P0 = NSButton>(_v: P0): R;
    patternWell<R = NSImageView>(): R;
    setPatternWell<R = void, P0 = NSImageView>(_v: P0): R;
  }
  namespace MSColorInspectorSectionPattern {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection {
      alloc<R = MSColorInspectorSectionPattern>(): R;
      new: <R = MSColorInspectorSectionPattern>() => R;
    }
  }
}

declare const MSColorInspectorSectionPattern: cocoa.MSColorInspectorSectionPattern.CLASS;
