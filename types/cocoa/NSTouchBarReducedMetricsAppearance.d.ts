/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarReducedMetricsAppearance<T = any> extends NSAppearance {}
  namespace classes {
    export interface NSTouchBarReducedMetricsAppearance<T = any> extends NSAppearance {
      alloc<R = NSTouchBarReducedMetricsAppearance>(): R;
      new: <R = NSTouchBarReducedMetricsAppearance>() => R;
    }
  }
}

declare const NSTouchBarReducedMetricsAppearance: cocoa.classes.NSTouchBarReducedMetricsAppearance;
