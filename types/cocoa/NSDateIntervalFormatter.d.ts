/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateIntervalFormatter<T = any> extends cocoa.NSFormatter {
    _stringFromDate_toDate<R = unknown, P0 = unknown, P1 = unknown>(__stringFromDate: P0, _toDate: P1): R;
    stringFromDateInterval<R = unknown, P0 = unknown>(_stringFromDateInterval: P0): R;
    stringFromDate_toDate<R = unknown, P0 = unknown, P1 = unknown>(_stringFromDate: P0, _toDate: P1): R;
    setBoundaryStyle<R = void, P0 = number>(_setBoundaryStyle: P0): R;
    boundaryStyle<R = number>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    timeStyle<R = number>(): R;
    setTimeStyle<R = void, P0 = number>(_v: P0): R;
    dateStyle<R = number>(): R;
    setDateStyle<R = void, P0 = number>(_v: P0): R;
    dateTemplate<R = cocoa.NSString>(): R;
    setDateTemplate<R = void, P0 = cocoa.NSString>(_v: P0): R;
    timeZone<R = cocoa.NSTimeZone>(): R;
    setTimeZone<R = void, P0 = cocoa.NSTimeZone>(_v: P0): R;
    calendar<R = cocoa.NSCalendar>(): R;
    setCalendar<R = void, P0 = cocoa.NSCalendar>(_v: P0): R;
    locale<R = cocoa.NSLocale>(): R;
    setLocale<R = void, P0 = cocoa.NSLocale>(_v: P0): R;
  }
  namespace classes {
    export interface NSDateIntervalFormatter<T = any> extends cocoa.classes.NSFormatter {
      alloc<R = NSDateIntervalFormatter>(): R;
      new: <R = NSDateIntervalFormatter>() => R;
    }
  }
}

declare const NSDateIntervalFormatter: cocoa.classes.NSDateIntervalFormatter;
