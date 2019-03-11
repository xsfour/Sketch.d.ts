/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDate<T = any> {
    // + NSDate(NSCalendarDateStuff,NSDate,NSDatePortCoding,NSNaturalLanguageDate,NSScriptAppleEventConversion,NSURLExtras,NTP):
    descriptionWithCalendarFormat_timeZone_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_descriptionWithCalendarFormat: P0, _timeZone: P1, _locale: P2): R;
    dateWithCalendarFormat_timeZone<R = unknown, P0 = unknown, P1 = unknown>(_dateWithCalendarFormat: P0, _timeZone: P1): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    _scriptingDateDescriptor<R = unknown>(): R;
    _web_isToday<R = boolean>(): R;
    _web_compareDay<R = number, P0 = unknown>(__web_compareDay: P0): R;
    _web_RFC1123DateString<R = unknown>(): R;
    NTPRepresentation_bc<R = number>(): R;
  }
  namespace classes {
    export interface NSDate<T = any> {
      // + NSDate(NSCalendarDateStuff,NSDate,NSDatePortCoding,NSNaturalLanguageDate,NSScriptAppleEventConversion,NSURLExtras,NTP):
      dateWithNaturalLanguageString_locale<R = unknown, P0 = unknown, P1 = unknown>(_dateWithNaturalLanguageString: P0, _locale: P1): R;
      dateWithNaturalLanguageString<R = unknown, P0 = unknown>(_dateWithNaturalLanguageString: P0): R;
      dateWithNaturalLanguageString_date_locale<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dateWithNaturalLanguageString: P0, _date: P1, _locale: P2): R;
      _scriptingDateWithDescriptor<R = unknown, P0 = unknown>(__scriptingDateWithDescriptor: P0): R;
      dateWithNTPRepresentation_bc<R = unknown, P0 = number>(_dateWithNTPRepresentation_bc: P0): R;
      NTPEpoch_bc<R = unknown>(): R;
    }
  }
}

declare const NSDate: cocoa.classes.NSDate;
