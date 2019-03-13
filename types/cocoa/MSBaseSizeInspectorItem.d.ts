/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseSizeInspectorItem<T = any> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
    showSizeAlertForValue<R = void, P0 = number>(_showSizeAlertForValue: P0): R;
    interTextFieldButtonAction<R = void, P0 = unknown>(_interTextFieldButtonAction: P0): R;
    setupAccessoryButton<R = void>(): R;
    updateUI<R = void>(): R;
    allowFloatValues<R = boolean>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    interTextFieldButton<R = NSButton>(): R;
    setInterTextFieldButton<R = void, P0 = NSButton>(_v: P0): R;
    heightField<R = MSInlineUpDownTextField>(): R;
    setHeightField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    widthField<R = MSInlineUpDownTextField>(): R;
    setWidthField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    heightAdapter<R = MSSizeInspectorValueAdaptor>(): R;
    setHeightAdapter<R = void, P0 = MSSizeInspectorValueAdaptor>(_v: P0): R;
    widthAdapter<R = MSSizeInspectorValueAdaptor>(): R;
    setWidthAdapter<R = void, P0 = MSSizeInspectorValueAdaptor>(_v: P0): R;
    accessory<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseSizeInspectorItem<T = any> extends MSInspectorItem, MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSBaseSizeInspectorItem>(): R;
      new: <R = MSBaseSizeInspectorItem>() => R;
    }
  }
}

declare const MSBaseSizeInspectorItem: cocoa.classes.MSBaseSizeInspectorItem;
