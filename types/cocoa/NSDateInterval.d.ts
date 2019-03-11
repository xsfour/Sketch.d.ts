/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateInterval<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    containsDate<R = boolean, P0 = unknown>(_containsDate: P0): R;
    intersectionWithDateInterval<R = unknown, P0 = unknown>(_intersectionWithDateInterval: P0): R;
    intersectsDateInterval<R = boolean, P0 = unknown>(_intersectsDateInterval: P0): R;
    isEqualToDateInterval<R = boolean, P0 = unknown>(_isEqualToDateInterval: P0): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    initWithStartDate_endDate<R = unknown, P0 = unknown, P1 = unknown>(_initWithStartDate: P0, _endDate: P1): R;
    initWithStartDate_duration<R = unknown, P0 = unknown, P1 = number>(_initWithStartDate: P0, _duration: P1): R;
    duration<R = number>(): R;
    endDate<R = cocoa.NSDate>(): R;
    startDate<R = cocoa.NSDate>(): R;
  }
  namespace classes {
    export interface NSDateInterval<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSDateInterval>(): R;
      new: <R = NSDateInterval>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSDateInterval: cocoa.classes.NSDateInterval;
