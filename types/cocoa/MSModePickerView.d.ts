/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModePickerView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    buttons<R = unknown>(): R;
    deselectAllButtons<R = void>(): R;
    cellForMode<R = unknown, P0 = number>(_cellForMode: P0): R;
    buttonForMode<R = unknown, P0 = number>(_buttonForMode: P0): R;
    labelForMode<R = unknown, P0 = number>(_labelForMode: P0): R;
    pickerModeForEvent<R = number, P0 = unknown>(_pickerModeForEvent: P0): R;
    highlightCount<R = number>(): R;
    addTrackingAreaForButton<R = void, P0 = unknown>(_addTrackingAreaForButton: P0): R;
    buttonAction<R = void, P0 = unknown>(_buttonAction: P0): R;
    awakeFromNib<R = void>(): R;
    labelField<R = cocoa.NSTextField>(): R;
    setLabelField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    button6<R = cocoa.NSButton>(): R;
    setButton6<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    button5<R = cocoa.NSButton>(): R;
    setButton5<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    button4<R = cocoa.NSButton>(): R;
    setButton4<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    button3<R = cocoa.NSButton>(): R;
    setButton3<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    button2<R = cocoa.NSButton>(): R;
    setButton2<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    button1<R = cocoa.NSButton>(): R;
    setButton1<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    delegate<R = cocoa.MSModeModePickerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSModeModePickerDelegate>(_v: P0): R;
    pickerMode<R = number>(): R;
    setPickerMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSModePickerView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSModePickerView>(): R;
      new: <R = MSModePickerView>() => R;
    }
  }
}

declare const MSModePickerView: cocoa.classes.MSModePickerView;
