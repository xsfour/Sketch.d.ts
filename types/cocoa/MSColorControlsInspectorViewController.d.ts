/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsInspectorViewController<T = any> extends MSStylePartInspectorViewController {
    reset<R = void, P0 = unknown>(_reset: P0): R;
    contrastField<R = MSUpDownTextField>(): R;
    setContrastField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    brightnessField<R = MSUpDownTextField>(): R;
    setBrightnessField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    saturationField<R = MSUpDownTextField>(): R;
    setSaturationField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    hueField<R = MSUpDownTextField>(): R;
    setHueField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    contrastAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setContrastAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    brightnessAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setBrightnessAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    saturationAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setSaturationAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    hueAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setHueAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorControlsInspectorViewController<T = any> extends MSStylePartInspectorViewController {
      alloc<R = MSColorControlsInspectorViewController>(): R;
      new: <R = MSColorControlsInspectorViewController>() => R;
      setupTextField_adaptor_valueTransformer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setupTextField: P0, _adaptor: P1, _valueTransformer: P2): R;
    }
  }
}

declare const MSColorControlsInspectorViewController: cocoa.classes.MSColorControlsInspectorViewController;
