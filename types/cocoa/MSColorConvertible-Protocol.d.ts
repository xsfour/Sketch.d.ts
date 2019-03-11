/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorConvertibleProtocol<T = any> extends cocoa.NSObjectProtocol {
    convertColorsUsing<R = void, P0 = cocoa.MSColorConverter>(_convertColorsUsing: P0): R;
  }
  namespace classes {
    export interface MSColorConvertibleProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorConvertibleProtocol: cocoa.classes.MSColorConvertibleProtocol;
