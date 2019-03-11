/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAnalytics<T = any> extends cocoa.BCSingleton, cocoa.MSActionObserverProtocol {
    cxx_destruct<R = void>(): R;
    trackEvent_withInterval_conditional<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_trackEvent: P0, _withInterval: P1, _conditional: P2): R;
    trackEvent_withValue<R = void, P0 = unknown, P1 = unknown>(_trackEvent: P0, _withValue: P1): R;
    trackScreenWithName<R = void, P0 = unknown>(_trackScreenWithName: P0): R;
    stopTracking<R = void>(): R;
    sendAppInfo<R = void>(): R;
    startTracking<R = void>(): R;
    googleAnalytics<R = cocoa.MSGoogleAnalyticsWrapper>(): R;
    setGoogleAnalytics<R = void, P0 = cocoa.MSGoogleAnalyticsWrapper>(_v: P0): R;
    monthlyTimer<R = cocoa.NSTimer>(): R;
    setMonthlyTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    weeklyTimer<R = cocoa.NSTimer>(): R;
    setWeeklyTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    dailyTimer<R = cocoa.NSTimer>(): R;
    setDailyTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    hourlyTimer<R = cocoa.NSTimer>(): R;
    setHourlyTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAnalytics<T = any> extends cocoa.classes.BCSingleton, cocoa.classes.MSActionObserverProtocol {  }
  }
}

declare const MSAnalytics: cocoa.classes.MSAnalytics;
