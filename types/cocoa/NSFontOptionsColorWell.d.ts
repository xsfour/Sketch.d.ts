/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontOptionsColorWell<T = any> extends NSColorWell {}
  namespace classes {
    export interface NSFontOptionsColorWell<T = any> extends NSColorWell {
      alloc<R = NSFontOptionsColorWell>(): R;
      new: <R = NSFontOptionsColorWell>() => R;
    }
  }
}

declare const NSFontOptionsColorWell: cocoa.classes.NSFontOptionsColorWell;
