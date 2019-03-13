/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPickerBaseView<T = any> extends NSControl {
    cxx_destruct<R = void>(): R;
    drawMarkerInRect<R = void, P0 = CGRect>(_drawMarkerInRect: P0): R;
    markerShadow<R = unknown>(): R;
    drawCheckerboardPatternInRect<R = void, P0 = CGRect>(_drawCheckerboardPatternInRect: P0): R;
    drawContentInRect_dirtyRect<R = void, P0 = CGRect, P1 = CGRect>(_drawContentInRect: P0, _dirtyRect: P1): R;
    contentBounds<R = CGRect>(): R;
    initInBounds<R = unknown, P0 = CGRect>(_initInBounds: P0): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    action<R = string>(): R;
    target<R = unknown>(): R;
    bc_action<R = string>(): R;
    setBc_action<R = void, P0 = string>(_v: P0): R;
    bc_target<R = unknown>(): R;
    setBc_target<R = void, P0 = unknown>(_v: P0): R;
    hideSelection<R = boolean>(): R;
    setHideSelection<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface BCColorPickerBaseView<T = any> extends NSControl {
      alloc<R = BCColorPickerBaseView>(): R;
      new: <R = BCColorPickerBaseView>() => R;
      darkShadow<R = unknown>(): R;
      drawFrameInRect_forView_block<R = void, P0 = CGRect, P1 = unknown, P2 = CDUnknownBlockType>(_drawFrameInRect: P0, _forView: P1, _block: P2): R;
      drawFrameInRect_outlineWidth_block<R = void, P0 = CGRect, P1 = number, P2 = CDUnknownBlockType>(_drawFrameInRect: P0, _outlineWidth: P1, _block: P2): R;
    }
  }
}

declare const BCColorPickerBaseView: cocoa.classes.BCColorPickerBaseView;
