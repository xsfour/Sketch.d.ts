/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCornerRadiusInspectorValueAdaptorContext<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    componentStringWithMathValueForModel<R = unknown, P0 = unknown>(_componentStringWithMathValueForModel: P0): R;
    value<R = NSNumber>(): R;
    setValue<R = void, P0 = NSNumber>(_v: P0): R;
    mathOperator<R = NSString>(): R;
    setMathOperator<R = void, P0 = NSString>(_v: P0): R;
    componentString<R = NSString>(): R;
    setComponentString<R = void, P0 = NSString>(_v: P0): R;
    mode<R = number>(): R;
    setMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSCornerRadiusInspectorValueAdaptorContext<T = any> extends NSObject {
      alloc<R = MSCornerRadiusInspectorValueAdaptorContext>(): R;
      new: <R = MSCornerRadiusInspectorValueAdaptorContext>() => R;
    }
  }
}

declare const MSCornerRadiusInspectorValueAdaptorContext: cocoa.classes.MSCornerRadiusInspectorValueAdaptorContext;
