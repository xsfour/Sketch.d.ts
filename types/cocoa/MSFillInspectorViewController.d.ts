/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillInspectorViewController<T = any> extends cocoa.MSColorStylePartInspectorViewController, cocoa.MSColorHexStringTransformerDelegateProtocol {
    hexFieldAction<R = void, P0 = unknown>(_hexFieldAction: P0): R;
    updateFillPropertyPopUp<R = void>(): R;
    hexTransformer<R = cocoa.MSColorHexStringTransformer>(): R;
    setHexTransformer<R = void, P0 = cocoa.MSColorHexStringTransformer>(_v: P0): R;
    hexField<R = cocoa.NSTextField>(): R;
    setHexField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    contextPopUpLabel<R = cocoa.NSTextField>(): R;
    setContextPopUpLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    fillTypeLabel<R = cocoa.NSTextField>(): R;
    setFillTypeLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    opacityAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setOpacityAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    fills<R = cocoa.NSArrayController>(): R;
    setFills<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    fillPropertiesPopUp<R = cocoa.NSPopUpButton>(): R;
    setFillPropertiesPopUp<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    opacityField<R = cocoa.MSUpDownTextField>(): R;
    setOpacityField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFillInspectorViewController<T = any> extends cocoa.classes.MSColorStylePartInspectorViewController, cocoa.classes.MSColorHexStringTransformerDelegateProtocol {
      alloc<R = MSFillInspectorViewController>(): R;
      new: <R = MSFillInspectorViewController>() => R;
    }
  }
}

declare const MSFillInspectorViewController: cocoa.classes.MSFillInspectorViewController;
