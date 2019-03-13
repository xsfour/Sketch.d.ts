/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillInspectorViewController<T = any> extends MSColorStylePartInspectorViewController, MSColorHexStringTransformerDelegateProtocol {
    hexFieldAction<R = void, P0 = unknown>(_hexFieldAction: P0): R;
    updateFillPropertyPopUp<R = void>(): R;
    hexTransformer<R = MSColorHexStringTransformer>(): R;
    setHexTransformer<R = void, P0 = MSColorHexStringTransformer>(_v: P0): R;
    hexField<R = NSTextField>(): R;
    setHexField<R = void, P0 = NSTextField>(_v: P0): R;
    contextPopUpLabel<R = NSTextField>(): R;
    setContextPopUpLabel<R = void, P0 = NSTextField>(_v: P0): R;
    fillTypeLabel<R = NSTextField>(): R;
    setFillTypeLabel<R = void, P0 = NSTextField>(_v: P0): R;
    opacityAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setOpacityAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    fills<R = NSArrayController>(): R;
    setFills<R = void, P0 = NSArrayController>(_v: P0): R;
    fillPropertiesPopUp<R = NSPopUpButton>(): R;
    setFillPropertiesPopUp<R = void, P0 = NSPopUpButton>(_v: P0): R;
    opacityField<R = MSUpDownTextField>(): R;
    setOpacityField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFillInspectorViewController<T = any> extends MSColorStylePartInspectorViewController, MSColorHexStringTransformerDelegateProtocol {
      alloc<R = MSFillInspectorViewController>(): R;
      new: <R = MSFillInspectorViewController>() => R;
    }
  }
}

declare const MSFillInspectorViewController: cocoa.classes.MSFillInspectorViewController;
