/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCache<T = any> {
    // + NSCache(NSPrivate_Enumeration):
    mapTableRepresentation<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCache<T = any> {
      // + NSCache(NSPrivate_Enumeration):
      
    }
  }
}

declare const NSCache: cocoa.classes.NSCache;
