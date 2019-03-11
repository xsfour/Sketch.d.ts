/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutConstraintParser<T = any> extends cocoa.NSObject {
    finishConstraint<R = void>(): R;
    findContainerView<R = void>(): R;
    rangeOfName<R = cocoa._NSRange>(): R;
    parseOp<R = void>(): R;
    parseConstant<R = number>(): R;
    parsePredicate<R = void>(): R;
    parsePredicateList<R = void>(): R;
    parsePredicateWithParentheses<R = void>(): R;
    parseConnection<R = void>(): R;
    flushWidthConstraints<R = void>(): R;
    parseView<R = unknown>(): R;
    parse<R = void>(): R;
    layoutItemForKey<R = unknown, P0 = unknown>(_layoutItemForKey: P0): R;
    metricForKey<R = unknown, P0 = unknown>(_metricForKey: P0): R;
    failWithDescription<R = void, P0 = unknown>(_failWithDescription: P0): R;
    description<R = unknown>(): R;
    descriptionLineWithCurrentCharacterPointer<R = unknown>(): R;
    constraints<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithFormat_options_metrics_views<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_initWithFormat: P0, _options: P1, _metrics: P2, _views: P3): R;
  }
  namespace classes {
    export interface NSLayoutConstraintParser<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSLayoutConstraintParser>(): R;
      new: <R = NSLayoutConstraintParser>() => R;
      constraintsWithVisualFormat_options_metrics_views<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_constraintsWithVisualFormat: P0, _options: P1, _metrics: P2, _views: P3): R;
    }
  }
}

declare const NSLayoutConstraintParser: cocoa.classes.NSLayoutConstraintParser;
