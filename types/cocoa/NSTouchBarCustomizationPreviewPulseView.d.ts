/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewPulseView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    contentImage<R = cocoa.NSImage>(): R;
    setContentImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    pulseColor<R = cocoa.NSColor>(): R;
    setPulseColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewPulseView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTouchBarCustomizationPreviewPulseView>(): R;
      new: <R = NSTouchBarCustomizationPreviewPulseView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewPulseView: cocoa.classes.NSTouchBarCustomizationPreviewPulseView;
