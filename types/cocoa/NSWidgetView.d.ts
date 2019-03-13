/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWidgetView<T = any> extends NSView {
    _queryWidgetMetrics<R = unknown, P0 = unknown>(__queryWidgetMetrics: P0): R;
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    layerContentsRedrawPolicy<R = number>(): R;
    widgetDefinition<R = NSDictionary>(): R;
    setWidgetDefinition<R = void, P0 = NSDictionary>(_v: P0): R;
    scalableAxes<R = number>(): R;
    baselineOffsetFromBottom<R = number>(): R;
    contentInsets<R = NSEdgeInsets>(): R;
    baseWidgetKeys<R = NSDictionary>(): R;
  }
  namespace classes {
    export interface NSWidgetView<T = any> extends NSView {
      alloc<R = NSWidgetView>(): R;
      new: <R = NSWidgetView>() => R;
    }
  }
}

declare const NSWidgetView: cocoa.classes.NSWidgetView;
