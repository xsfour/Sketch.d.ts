/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGroupActionGroup<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGroupActionGroup<T = any> extends MSActionGroup {
      alloc<R = MSGroupActionGroup>(): R;
      new: <R = MSGroupActionGroup>() => R;
    }
  }
}

declare const MSGroupActionGroup: cocoa.classes.MSGroupActionGroup;
