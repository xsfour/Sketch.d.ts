/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers27MSConditionallyOffsetButton<T = any> extends NSButton {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    setYOffset_forOperatingSystemVersion_backingScaleFactor<R = void, P0 = number, P1 = unknown, P2 = number>(_setYOffset: P0, _forOperatingSystemVersion: P1, _backingScaleFactor: P2): R;
    yOffsetFor<R = number, P0 = number>(_yOffsetFor: P0): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers27MSConditionallyOffsetButton<T = any> extends NSButton {
      alloc<R = _TtC17SketchControllers27MSConditionallyOffsetButton>(): R;
      new: <R = _TtC17SketchControllers27MSConditionallyOffsetButton>() => R;
    }
  }
}
