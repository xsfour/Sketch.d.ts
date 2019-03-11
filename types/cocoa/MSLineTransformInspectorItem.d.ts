/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineTransformInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol {
    updateButtonState<R = void, P0 = unknown>(_updateButtonState: P0): R;
    rotationAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setRotationAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    lengthAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setLengthAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    flipVerticalButton<R = cocoa.NSButton>(): R;
    setFlipVerticalButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    flipHorizontalButton<R = cocoa.NSButton>(): R;
    setFlipHorizontalButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    rotationField<R = cocoa.MSInlineUpDownTextField>(): R;
    setRotationField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    lengthField<R = cocoa.MSInlineUpDownTextField>(): R;
    setLengthField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLineTransformInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSLineTransformInspectorItem>(): R;
      new: <R = MSLineTransformInspectorItem>() => R;
    }
  }
}

declare const MSLineTransformInspectorItem: cocoa.classes.MSLineTransformInspectorItem;
