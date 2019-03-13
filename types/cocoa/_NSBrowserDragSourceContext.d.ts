/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserDragSourceContext<T = any> extends NSObject {}
  namespace classes {
    export interface _NSBrowserDragSourceContext<T = any> extends NSObject {
      alloc<R = _NSBrowserDragSourceContext>(): R;
      new: <R = _NSBrowserDragSourceContext>() => R;
    }
  }
}
