/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualFormatLayoutRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithVisualFormat_options_metrics_rects_containerRect<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithVisualFormat: P0, _options: P1, _metrics: P2, _rects: P3, _containerRect: P4): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSVisualFormatLayoutRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = NSVisualFormatLayoutRule>(): R;
      new: <R = NSVisualFormatLayoutRule>() => R;
      ruleWithVisualFormat_options_metrics_views<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_ruleWithVisualFormat: P0, _options: P1, _metrics: P2, _views: P3): R;
      ruleWithVisualFormat_options_metrics_rects_containerRect<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown>(_ruleWithVisualFormat: P0, _options: P1, _metrics: P2, _rects: P3, _containerRect: P4): R;
    }
  }
}

declare const NSVisualFormatLayoutRule: cocoa.classes.NSVisualFormatLayoutRule;
