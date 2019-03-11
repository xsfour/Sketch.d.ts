/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSValueTransformer<T = any> extends cocoa.NSObject {
    reverseTransformedValue<R = unknown, P0 = unknown>(_reverseTransformedValue: P0): R;
    transformedValue<R = unknown, P0 = unknown>(_transformedValue: P0): R;
  }
  namespace classes {
    export interface NSValueTransformer<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSValueTransformer>(): R;
      new: <R = NSValueTransformer>() => R;
      allowsReverseTransformation<R = boolean>(): R;
      transformedValueClass<R = unknown>(): R;
      valueTransformerNames<R = unknown>(): R;
      valueTransformerForName<R = unknown, P0 = unknown>(_valueTransformerForName: P0): R;
      setValueTransformer_forName<R = void, P0 = unknown, P1 = unknown>(_setValueTransformer: P0, _forName: P1): R;
    }
  }
}

declare const NSValueTransformer: cocoa.classes.NSValueTransformer;
