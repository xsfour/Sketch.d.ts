/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeGridSheet<T = any> extends cocoa.CHSheetController {
    defaultBoxSize<R = cocoa.CGSize>(): R;
    layerCount<R = number>(): R;
    layersHaveSameSize<R = boolean>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    validatePaddingFields<R = void>(): R;
    registerMarginDefaults<R = void>(): R;
    awakeFromNib<R = void>(): R;
    shouldFilHolesButton<R = cocoa.NSButton>(): R;
    setShouldFilHolesButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    confirmButton<R = cocoa.NSButton>(): R;
    setConfirmButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    subtextField<R = cocoa.NSTextField>(): R;
    setSubtextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    shouldFillHoles<R = number>(): R;
    setShouldFillHoles<R = void, P0 = number>(_v: P0): R;
    verticalPadding<R = number>(): R;
    setVerticalPadding<R = void, P0 = number>(_v: P0): R;
    horizontalPadding<R = number>(): R;
    setHorizontalPadding<R = void, P0 = number>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    numberOfRows<R = number>(): R;
    setNumberOfRows<R = void, P0 = number>(_v: P0): R;
    hasVerticalPadding<R = boolean>(): R;
    setHasVerticalPadding<R = void, P0 = boolean>(_v: P0): R;
    hasHorizontalPadding<R = boolean>(): R;
    setHasHorizontalPadding<R = void, P0 = boolean>(_v: P0): R;
    doc<R = cocoa.MSDocument>(): R;
    setDoc<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
  }
  namespace classes {
    export interface MSMakeGridSheet<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSMakeGridSheet>(): R;
      new: <R = MSMakeGridSheet>() => R;
    }
  }
}

declare const MSMakeGridSheet: cocoa.classes.MSMakeGridSheet;
