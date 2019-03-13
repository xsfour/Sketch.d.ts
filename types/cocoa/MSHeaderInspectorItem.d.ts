/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeaderInspectorItem<T = any> extends MSInspectorItem {
    setButtonTarget_action_image_alternate<R = void, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown>(_setButtonTarget: P0, _action: P1, _image: P2, _alternate: P3): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    headerButton<R = NSButton>(): R;
    setHeaderButton<R = void, P0 = NSButton>(_v: P0): R;
    label<R = NSTextField>(): R;
    setLabel<R = void, P0 = NSTextField>(_v: P0): R;
    wantsSeparatorInset<R = boolean>(): R;
    setWantsSeparatorInset<R = void, P0 = boolean>(_v: P0): R;
    wantsSeparator<R = boolean>(): R;
    setWantsSeparator<R = void, P0 = boolean>(_v: P0): R;
    buttonDisabled<R = boolean>(): R;
    setButtonDisabled<R = void, P0 = boolean>(_v: P0): R;
    buttonState<R = number>(): R;
    setButtonState<R = void, P0 = number>(_v: P0): R;
    buttonToolTip<R = NSString>(): R;
    setButtonToolTip<R = void, P0 = NSString>(_v: P0): R;
    labelText<R = NSString>(): R;
    setLabelText<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSHeaderInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSHeaderInspectorItem>(): R;
      new: <R = MSHeaderInspectorItem>() => R;
    }
  }
}

declare const MSHeaderInspectorItem: cocoa.classes.MSHeaderInspectorItem;
