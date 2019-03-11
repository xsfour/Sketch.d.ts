/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShadowInspectorViewController<T = any> extends cocoa.MSColorStylePartInspectorViewController {
    sectionTitle<R = unknown>(): R;
    title<R = unknown>(): R;
    keyPath<R = unknown>(): R;
    isSpreadFieldAvailable<R = boolean>(): R;
    allowsNegativeSpread<R = boolean>(): R;
    spreadAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setSpreadAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    radiusAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setRadiusAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    yOffsetAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setYOffsetAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    xOffsetAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setXOffsetAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    spreadField<R = cocoa.MSUpDownTextField>(): R;
    setSpreadField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    blurRadiusField<R = cocoa.MSUpDownTextField>(): R;
    setBlurRadiusField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    yOffsetField<R = cocoa.MSUpDownTextField>(): R;
    setYOffsetField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    xOffsetField<R = cocoa.MSUpDownTextField>(): R;
    setXOffsetField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    type<R = cocoa.NSString>(): R;
    setType<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSShadowInspectorViewController<T = any> extends cocoa.classes.MSColorStylePartInspectorViewController {
      alloc<R = MSShadowInspectorViewController>(): R;
      new: <R = MSShadowInspectorViewController>() => R;
    }
  }
}

declare const MSShadowInspectorViewController: cocoa.classes.MSShadowInspectorViewController;
