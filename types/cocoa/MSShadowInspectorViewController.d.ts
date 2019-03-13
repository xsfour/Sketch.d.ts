/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShadowInspectorViewController<T = any> extends MSColorStylePartInspectorViewController {
    sectionTitle<R = unknown>(): R;
    title<R = unknown>(): R;
    keyPath<R = unknown>(): R;
    isSpreadFieldAvailable<R = boolean>(): R;
    allowsNegativeSpread<R = boolean>(): R;
    spreadAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setSpreadAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    radiusAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setRadiusAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    yOffsetAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setYOffsetAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    xOffsetAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setXOffsetAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    spreadField<R = MSUpDownTextField>(): R;
    setSpreadField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    blurRadiusField<R = MSUpDownTextField>(): R;
    setBlurRadiusField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    yOffsetField<R = MSUpDownTextField>(): R;
    setYOffsetField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    xOffsetField<R = MSUpDownTextField>(): R;
    setXOffsetField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSShadowInspectorViewController<T = any> extends MSColorStylePartInspectorViewController {
      alloc<R = MSShadowInspectorViewController>(): R;
      new: <R = MSShadowInspectorViewController>() => R;
    }
  }
}

declare const MSShadowInspectorViewController: cocoa.classes.MSShadowInspectorViewController;
