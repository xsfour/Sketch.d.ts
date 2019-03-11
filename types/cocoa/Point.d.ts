/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface Point<T = any> {}
  namespace classes {
    export interface Point<T = any> {  }
  }
}

declare const Point: cocoa.classes.Point;
