/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingScoreKeeper<T = any> extends NSObject {}
  namespace classes {
    export interface _NSScrollingScoreKeeper<T = any> extends NSObject {
      alloc<R = _NSScrollingScoreKeeper>(): R;
      new: <R = _NSScrollingScoreKeeper>() => R;
      playScrollRecordingData_atWindow_location_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = CDUnknownBlockType>(_playScrollRecordingData: P0, _atWindow: P1, _location: P2, _completionHandler: P3): R;
      scrollRecordingDataFromEventArray<R = unknown, P0 = unknown>(_scrollRecordingDataFromEventArray: P0): R;
    }
  }
}
