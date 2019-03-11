/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDGeometryChangeRecord<T = any> extends cocoa._UIViewLFLDChangeRecord {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithGeometricPropertyName_value_currentLayoutView_methodName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithGeometricPropertyName: P0, _value: P1, _currentLayoutView: P2, _methodName: P3): R;
    currentLayoutMethodName<R = cocoa.NSString>(): R;
    currentLayoutView<R = cocoa.NSView>(): R;
    geometricPropertyValue<R = cocoa.NSValue>(): R;
    geometricPropertyName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface _UIViewLFLDGeometryChangeRecord<T = any> extends cocoa.classes._UIViewLFLDChangeRecord {
      alloc<R = _UIViewLFLDGeometryChangeRecord>(): R;
      new: <R = _UIViewLFLDGeometryChangeRecord>() => R;
    }
  }
}
