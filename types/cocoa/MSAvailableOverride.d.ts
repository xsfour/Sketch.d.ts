/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAvailableOverride<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithOverridePoint_master_affectedLayer_overrideValue_otherOverrides_inParent_document_editable<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown, P7 = boolean>(_initWithOverridePoint: P0, _master: P1, _affectedLayer: P2, _overrideValue: P3, _otherOverrides: P4, _inParent: P5, _document: P6, _editable: P7): R;
    affectedLayerDefault<R = unknown>(): R;
    internalOverrideValue<R = cocoa.MSOverrideValue>(): R;
    isEditable<R = boolean>(): R;
    overridePoint<R = cocoa.MSOverridePoint>(): R;
    affectedLayer<R = cocoa.MSImmutableLayer>(): R;
    master<R = cocoa.MSImmutableSymbolMaster>(): R;
    parent<R = cocoa.MSAvailableOverride>(): R;
    defaultIsItselfAnOverride<R = boolean>(): R;
    hasOverride<R = boolean>(): R;
    overrideValue<R = unknown>(): R;
    defaultValue<R = unknown>(): R;
    currentValue<R = unknown>(): R;
    children<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSAvailableOverride<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSAvailableOverride>(): R;
      new: <R = MSAvailableOverride>() => R;
      enumerateOverrides_withBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_enumerateOverrides: P0, _withBlock: P1): R;
      flattenAvailableOverrides<R = unknown, P0 = unknown>(_flattenAvailableOverrides: P0): R;
      availableOverrideWithOverridePoint_master_overrideValue_otherOverrides_inParent_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_availableOverrideWithOverridePoint: P0, _master: P1, _overrideValue: P2, _otherOverrides: P3, _inParent: P4, _document: P5): R;
    }
  }
}

declare const MSAvailableOverride: cocoa.classes.MSAvailableOverride;
