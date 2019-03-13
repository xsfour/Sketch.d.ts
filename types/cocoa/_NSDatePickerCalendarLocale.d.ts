/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerCalendarLocale<T = any> extends NSLocale {
    _prefs<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    dealloc<R = void>(): R;
    initWithLocale_calendar<R = unknown, P0 = unknown, P1 = unknown>(_initWithLocale: P0, _calendar: P1): R;
  }
  namespace classes {
    export interface _NSDatePickerCalendarLocale<T = any> extends NSLocale {  }
  }
}
