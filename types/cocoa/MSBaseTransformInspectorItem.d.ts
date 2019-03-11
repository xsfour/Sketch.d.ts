/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseTransformInspectorItem<T = any> extends cocoa.MSInspectorItem {
    areAllLayersFlippedVertically<R = boolean>(): R;
    areAllLayersFlippedHorizontally<R = boolean>(): R;
    clearFlipSegmentedControl<R = void>(): R;
    updateFlipSegmentedControl<R = void>(): R;
    textFieldAction<R = void, P0 = unknown>(_textFieldAction: P0): R;
    initWithTitle_textFieldLabel<R = unknown, P0 = unknown, P1 = unknown>(_initWithTitle: P0, _textFieldLabel: P1): R;
    textFieldTitle<R = cocoa.NSString>(): R;
    setTextFieldTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    itemTitle<R = cocoa.NSString>(): R;
    setItemTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    titleLabel<R = cocoa.NSTextField>(): R;
    setTitleLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    textFieldLabel<R = cocoa.NSTextField>(): R;
    setTextFieldLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    textFieldFormatter<R = cocoa.MSMathNumberFormatter>(): R;
    setTextFieldFormatter<R = void, P0 = cocoa.MSMathNumberFormatter>(_v: P0): R;
    flipSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setFlipSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    textField<R = cocoa.MSUpDownTextField>(): R;
    setTextField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSBaseTransformInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSBaseTransformInspectorItem>(): R;
      new: <R = MSBaseTransformInspectorItem>() => R;
    }
  }
}

declare const MSBaseTransformInspectorItem: cocoa.classes.MSBaseTransformInspectorItem;
