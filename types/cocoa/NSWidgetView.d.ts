/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWidgetView<T = any> extends cocoa.NSView {
    _queryWidgetMetrics<R = unknown, P0 = unknown>(__queryWidgetMetrics: P0): R;
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    layerContentsRedrawPolicy<R = number>(): R;
    widgetDefinition<R = cocoa.NSDictionary>(): R;
    setWidgetDefinition<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    scalableAxes<R = number>(): R;
    baselineOffsetFromBottom<R = number>(): R;
    contentInsets<R = cocoa.NSEdgeInsets>(): R;
    baseWidgetKeys<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface NSWidgetView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSWidgetView>(): R;
      new: <R = NSWidgetView>() => R;
    }
  }
}

declare const NSWidgetView: cocoa.classes.NSWidgetView;
