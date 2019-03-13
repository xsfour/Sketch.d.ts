/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelAlertStyleContentView<T = any> extends NSView {
    setMessage<R = void, P0 = unknown>(_setMessage: P0): R;
    stopTimerForSpeaking<R = void>(): R;
    startTimerForSpeaking<R = void>(): R;
    cancelAlertSpeaking<R = void>(): R;
    informativeMessageTextField<R = NSTextField>(): R;
    setInformativeMessageTextField<R = void, P0 = NSTextField>(_v: P0): R;
    messageTextField<R = NSTextField>(): R;
    setMessageTextField<R = void, P0 = NSTextField>(_v: P0): R;
    iconView<R = NSImageView>(): R;
    setIconView<R = void, P0 = NSImageView>(_v: P0): R;
  }
  namespace classes {
    export interface NSSavePanelAlertStyleContentView<T = any> extends NSView {
      alloc<R = NSSavePanelAlertStyleContentView>(): R;
      new: <R = NSSavePanelAlertStyleContentView>() => R;
    }
  }
}

declare const NSSavePanelAlertStyleContentView: cocoa.classes.NSSavePanelAlertStyleContentView;
