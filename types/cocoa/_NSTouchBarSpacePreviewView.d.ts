/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarSpacePreviewView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSTouchBarSpacePreviewView<T = any> extends NSView {
      alloc<R = _NSTouchBarSpacePreviewView>(): R;
      new: <R = _NSTouchBarSpacePreviewView>() => R;
    }
  }
}
