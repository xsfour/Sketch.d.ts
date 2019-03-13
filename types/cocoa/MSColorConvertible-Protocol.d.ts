/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorConvertibleProtocol<T = any> extends NSObjectProtocol {
    convertColorsUsing<R = void, P0 = MSColorConverter>(_convertColorsUsing: P0): R;
  }
  namespace classes {
    export interface MSColorConvertibleProtocol<T = any> extends NSObjectProtocol {  }
  }
}
