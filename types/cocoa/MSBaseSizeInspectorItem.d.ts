/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseSizeInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol {
    showSizeAlertForValue<R = void, P0 = number>(_showSizeAlertForValue: P0): R;
    interTextFieldButtonAction<R = void, P0 = unknown>(_interTextFieldButtonAction: P0): R;
    setupAccessoryButton<R = void>(): R;
    updateUI<R = void>(): R;
    allowFloatValues<R = boolean>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    interTextFieldButton<R = cocoa.NSButton>(): R;
    setInterTextFieldButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    heightField<R = cocoa.MSInlineUpDownTextField>(): R;
    setHeightField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    widthField<R = cocoa.MSInlineUpDownTextField>(): R;
    setWidthField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    heightAdapter<R = cocoa.MSSizeInspectorValueAdaptor>(): R;
    setHeightAdapter<R = void, P0 = cocoa.MSSizeInspectorValueAdaptor>(_v: P0): R;
    widthAdapter<R = cocoa.MSSizeInspectorValueAdaptor>(): R;
    setWidthAdapter<R = void, P0 = cocoa.MSSizeInspectorValueAdaptor>(_v: P0): R;
    accessory<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseSizeInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSBaseSizeInspectorItem>(): R;
      new: <R = MSBaseSizeInspectorItem>() => R;
    }
  }
}

declare const MSBaseSizeInspectorItem: cocoa.classes.MSBaseSizeInspectorItem;
