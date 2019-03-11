/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCandidateBarCorrectionPanel<T = any> extends cocoa.NSCorrectionPanel {}
  namespace classes {
    export interface _NSCandidateBarCorrectionPanel<T = any> extends cocoa.classes.NSCorrectionPanel {
      alloc<R = _NSCandidateBarCorrectionPanel>(): R;
      new: <R = _NSCandidateBarCorrectionPanel>() => R;
    }
  }
}
