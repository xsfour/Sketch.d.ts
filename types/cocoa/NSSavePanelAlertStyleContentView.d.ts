/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelAlertStyleContentView<T = any> extends cocoa.NSView {
    setMessage<R = void, P0 = unknown>(_setMessage: P0): R;
    stopTimerForSpeaking<R = void>(): R;
    startTimerForSpeaking<R = void>(): R;
    cancelAlertSpeaking<R = void>(): R;
    informativeMessageTextField<R = cocoa.NSTextField>(): R;
    setInformativeMessageTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    messageTextField<R = cocoa.NSTextField>(): R;
    setMessageTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    iconView<R = cocoa.NSImageView>(): R;
    setIconView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
  }
  namespace classes {
    export interface NSSavePanelAlertStyleContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSavePanelAlertStyleContentView>(): R;
      new: <R = NSSavePanelAlertStyleContentView>() => R;
    }
  }
}

declare const NSSavePanelAlertStyleContentView: cocoa.classes.NSSavePanelAlertStyleContentView;
