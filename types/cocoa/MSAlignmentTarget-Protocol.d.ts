/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentTargetProtocol<T = any> {
    guideInfo<R = unknown>(): R;
    setGuideInfo<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface MSAlignmentTargetProtocol<T = any> {  }
  }
}
