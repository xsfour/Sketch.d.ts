/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProxyLabelCell<T = any> extends cocoa.NSCell {
    _usesBezeledSelectionStyle<R = boolean>(): R;
    set_usesBezeledSelectionStyle<R = void, P0 = boolean>(_v: P0): R;
    widgetName<R = cocoa.NSString>(): R;
    setWidgetName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSProxyLabelCell<T = any> extends cocoa.classes.NSCell {
      alloc<R = _NSProxyLabelCell>(): R;
      new: <R = _NSProxyLabelCell>() => R;
    }
  }
}
