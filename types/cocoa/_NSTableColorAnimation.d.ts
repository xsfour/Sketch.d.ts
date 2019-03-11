/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableColorAnimation<T = any> extends cocoa.CABasicAnimation {
    setToValue<R = void, P0 = unknown>(_setToValue: P0): R;
    setFromValue<R = void, P0 = unknown>(_setFromValue: P0): R;
  }
  namespace classes {
    export interface _NSTableColorAnimation<T = any> extends cocoa.classes.CABasicAnimation {  }
  }
}
