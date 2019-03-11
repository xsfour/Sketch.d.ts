/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleFill<T = any> extends cocoa._MSImmutableStyleFill {
    patternFillHasOpacity<R = boolean>(): R;
    NSImage<R = unknown>(): R;
    updateColorCounter<R = void, P0 = unknown>(_updateColorCounter: P0): R;
    migratePropertiesFromV74OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV74OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV56OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV56OrEarlierWithUnarchiver: P0): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    addNoisePatternLink<R = unknown, P0 = unknown>(_addNoisePatternLink: P0): R;
    addPatternLink<R = unknown, P0 = unknown>(_addPatternLink: P0): R;
    addStretchedPattern_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addStretchedPattern: P0, _exporter: P1): R;
    addFilledOrFitPattern_exporter_type<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_addFilledOrFitPattern: P0, _exporter: P1, _type: P2): R;
    addTiledPattern_scale_exporter<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_addTiledPattern: P0, _scale: P1, _exporter: P2): R;
    addUseWrapperToPattern_withImageWrapper_scaleX_scaleY<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_addUseWrapperToPattern: P0, _withImageWrapper: P1, _scaleX: P2, _scaleY: P3): R;
    addImageDefinition_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addImageDefinition: P0, _exporter: P1): R;
    hasOpacity<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStyleFill<T = any> extends cocoa.classes._MSImmutableStyleFill {
      alloc<R = MSImmutableStyleFill>(): R;
      new: <R = MSImmutableStyleFill>() => R;
    }
  }
}

declare const MSImmutableStyleFill: cocoa.classes.MSImmutableStyleFill;
