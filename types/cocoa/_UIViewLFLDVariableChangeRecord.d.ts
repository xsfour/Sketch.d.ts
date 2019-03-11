/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDVariableChangeRecord<T = any> extends cocoa._UIViewLFLDChangeRecord {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithVariable_inLayoutEngine<R = unknown, P0 = unknown, P1 = unknown>(_initWithVariable: P0, _inLayoutEngine: P1): R;
    variableDelegate<R = cocoa.NSView>(): R;
    value<R = number>(): R;
    variable<R = cocoa.NSISVariable>(): R;
  }
  namespace classes {
    export interface _UIViewLFLDVariableChangeRecord<T = any> extends cocoa.classes._UIViewLFLDChangeRecord {
      alloc<R = _UIViewLFLDVariableChangeRecord>(): R;
      new: <R = _UIViewLFLDVariableChangeRecord>() => R;
    }
  }
}
