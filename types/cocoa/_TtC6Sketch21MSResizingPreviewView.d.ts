/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC6Sketch21MSResizingPreviewView<T = any> extends cocoa.NSView {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    runAnimation<R = void>(): R;
    awakeFromNib<R = void>(): R;
    resizingConstraint<R = number>(): R;
    setResizingConstraint<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _TtC6Sketch21MSResizingPreviewView<T = any> extends cocoa.classes.NSView {
      alloc<R = _TtC6Sketch21MSResizingPreviewView>(): R;
      new: <R = _TtC6Sketch21MSResizingPreviewView>() => R;
    }
  }
}
