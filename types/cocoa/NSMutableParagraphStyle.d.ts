/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableParagraphStyle<T = any> {
    // + NSMutableParagraphStyle(MSFixedLineHeight,Striping):
    removeUnsupportedAttributes<R = void>(): R;
    fixedLineHeight_ms<R = number>(): R;
    setFixedLineHeight_ms<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSMutableParagraphStyle<T = any> {
      // + NSMutableParagraphStyle(MSFixedLineHeight,Striping):
      
    }
  }
}

declare const NSMutableParagraphStyle: cocoa.classes.NSMutableParagraphStyle;
