/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorsStoreConcreteSubclassProtocol<T = any> {
    colorsFromBacking<R = NSArray>(): R;
    writeColorsToBacking<R = boolean, P0 = NSArray>(_writeColorsToBacking: P0): R;
  }
  namespace classes {
    export interface NSFavoriteColorsStoreConcreteSubclassProtocol<T = any> {  }
  }
}
