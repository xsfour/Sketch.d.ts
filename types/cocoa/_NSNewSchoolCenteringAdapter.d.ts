/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNewSchoolCenteringAdapter<T = any> extends cocoa.NSSaveAccessoryAdapter {
    accFrameChanged<R = void, P0 = unknown>(_accFrameChanged: P0): R;
    adapt_andTrackConstraints<R = void, P0 = unknown, P1 = unknown>(_adapt: P0, _andTrackConstraints: P1): R;
    trackedConstraints<R = cocoa.NSArray>(): R;
    setTrackedConstraints<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSNewSchoolCenteringAdapter<T = any> extends cocoa.classes.NSSaveAccessoryAdapter {
      alloc<R = _NSNewSchoolCenteringAdapter>(): R;
      new: <R = _NSNewSchoolCenteringAdapter>() => R;
    }
  }
}
