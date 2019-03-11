/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionPattern<T = any> extends cocoa.MSColorInspectorSection {
    updatePatternWellImage<R = void>(): R;
    patternWellAction<R = void, P0 = unknown>(_patternWellAction: P0): R;
    choosePatternImage<R = void, P0 = unknown>(_choosePatternImage: P0): R;
    enableSectionButtonAction<R = void, P0 = unknown>(_enableSectionButtonAction: P0): R;
    awakeFromNib<R = void>(): R;
    patternTilButton<R = cocoa.NSPopUpButton>(): R;
    setPatternTilButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    choosePatternButton<R = cocoa.NSButton>(): R;
    setChoosePatternButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    patternWell<R = cocoa.NSImageView>(): R;
    setPatternWell<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorInspectorSectionPattern<T = any> extends cocoa.classes.MSColorInspectorSection {
      alloc<R = MSColorInspectorSectionPattern>(): R;
      new: <R = MSColorInspectorSectionPattern>() => R;
    }
  }
}

declare const MSColorInspectorSectionPattern: cocoa.classes.MSColorInspectorSectionPattern;
