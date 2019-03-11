/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSheetBase<T = any> extends cocoa.CHSheetController, cocoa.NSWindowDelegateProtocol {
    lightColorUpdated<R = void, P0 = unknown>(_lightColorUpdated: P0): R;
    darkColorUpdated<R = void, P0 = unknown>(_darkColorUpdated: P0): R;
    prepareColorPickers<R = void>(): R;
    cancelAction<R = void, P0 = unknown>(_cancelAction: P0): R;
    turnOffForcedDrawing<R = void>(): R;
    gridChanged<R = void, P0 = unknown>(_gridChanged: P0): R;
    refreshCanvas<R = void, P0 = unknown>(_refreshCanvas: P0): R;
    refreshView<R = void>(): R;
    buildApplicableRootLayerList<R = unknown>(): R;
    awakeFromNib<R = void>(): R;
    applyTemplateObjectToLayer<R = void, P0 = unknown>(_applyTemplateObjectToLayer: P0): R;
    applyObject_toLayer<R = void, P0 = unknown, P1 = unknown>(_applyObject: P0, _toLayer: P1): R;
    defaultObject<R = unknown>(): R;
    document<R = unknown>(): R;
    baseObjectForRootLayer<R = unknown, P0 = unknown>(_baseObjectForRootLayer: P0): R;
    lightColorButton<R = cocoa.MSColorWell>(): R;
    setLightColorButton<R = void, P0 = cocoa.MSColorWell>(_v: P0): R;
    darkColorButton<R = cocoa.MSColorWell>(): R;
    setDarkColorButton<R = void, P0 = cocoa.MSColorWell>(_v: P0): R;
    templateObject<R = cocoa.MSBaseGrid>(): R;
    setTemplateObject<R = void, P0 = cocoa.MSBaseGrid>(_v: P0): R;
    originalSettings<R = cocoa.NSMapTable>(): R;
    setOriginalSettings<R = void, P0 = cocoa.NSMapTable>(_v: P0): R;
    lightColor<R = cocoa.NSColor>(): R;
    setLightColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    darkColor<R = cocoa.NSColor>(): R;
    setDarkColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGridSheetBase<T = any> extends cocoa.classes.CHSheetController, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSGridSheetBase>(): R;
      new: <R = MSGridSheetBase>() => R;
    }
  }
}

declare const MSGridSheetBase: cocoa.classes.MSGridSheetBase;
