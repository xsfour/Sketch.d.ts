/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorConverterProtocol<T = any> extends cocoa.NSObjectProtocol {
    shouldConvertImmutableColor<R = boolean, P0 = cocoa.MSImmutableColor>(_shouldConvertImmutableColor: P0): R;
    shouldConvertColor<R = boolean, P0 = cocoa.MSColor>(_shouldConvertColor: P0): R;
    convertImmutableColor<R = cocoa.MSImmutableColor, P0 = cocoa.MSImmutableColor>(_convertImmutableColor: P0): R;
    convertColor<R = cocoa.MSColor, P0 = cocoa.MSColor>(_convertColor: P0): R;
  }
  namespace classes {
    export interface MSColorConverterProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorConverterProtocol: cocoa.classes.MSColorConverterProtocol;
