/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorsStoreConcreteSubclassProtocol<T = any> {
    colorsFromBacking<R = cocoa.NSArray>(): R;
    writeColorsToBacking<R = boolean, P0 = cocoa.NSArray>(_writeColorsToBacking: P0): R;
  }
  namespace classes {
    export interface NSFavoriteColorsStoreConcreteSubclassProtocol<T = any> {  }
  }
}

declare const NSFavoriteColorsStoreConcreteSubclassProtocol: cocoa.classes.NSFavoriteColorsStoreConcreteSubclassProtocol;
