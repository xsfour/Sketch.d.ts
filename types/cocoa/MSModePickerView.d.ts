/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModePickerView<T0 = void, T1 = void, T2 = void> extends NSView {
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
    labelField<R = NSTextField>(): R;
    setLabelField<R = void, P0 = NSTextField>(_v: P0): R;
    button6<R = NSButton>(): R;
    setButton6<R = void, P0 = NSButton>(_v: P0): R;
    button5<R = NSButton>(): R;
    setButton5<R = void, P0 = NSButton>(_v: P0): R;
    button4<R = NSButton>(): R;
    setButton4<R = void, P0 = NSButton>(_v: P0): R;
    button3<R = NSButton>(): R;
    setButton3<R = void, P0 = NSButton>(_v: P0): R;
    button2<R = NSButton>(): R;
    setButton2<R = void, P0 = NSButton>(_v: P0): R;
    button1<R = NSButton>(): R;
    setButton1<R = void, P0 = NSButton>(_v: P0): R;
    delegate<R = MSModeModePickerDelegate>(): R;
    setDelegate<R = void, P0 = MSModeModePickerDelegate>(_v: P0): R;
    pickerMode<R = number>(): R;
    setPickerMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSModePickerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSModePickerView>(): R;
      new: <R = MSModePickerView>() => R;
    }
  }
}

declare const MSModePickerView: cocoa.MSModePickerView.CLASS;
