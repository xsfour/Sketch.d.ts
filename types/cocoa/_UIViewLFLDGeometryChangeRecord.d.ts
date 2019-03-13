/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDGeometryChangeRecord<T = any> extends _UIViewLFLDChangeRecord {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithGeometricPropertyName_value_currentLayoutView_methodName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithGeometricPropertyName: P0, _value: P1, _currentLayoutView: P2, _methodName: P3): R;
    currentLayoutMethodName<R = NSString>(): R;
    currentLayoutView<R = NSView>(): R;
    geometricPropertyValue<R = NSValue>(): R;
    geometricPropertyName<R = NSString>(): R;
  }
  namespace classes {
    export interface _UIViewLFLDGeometryChangeRecord<T = any> extends _UIViewLFLDChangeRecord {
      alloc<R = _UIViewLFLDGeometryChangeRecord>(): R;
      new: <R = _UIViewLFLDGeometryChangeRecord>() => R;
    }
  }
}
