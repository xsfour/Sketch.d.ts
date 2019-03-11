/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTwoTextFieldInspectorItem<T = any> extends cocoa.MSInspectorItem {
    interTextFieldButtonAction<R = void, P0 = unknown>(_interTextFieldButtonAction: P0): R;
    textField2Action<R = void, P0 = unknown>(_textField2Action: P0): R;
    textField1Action<R = void, P0 = unknown>(_textField1Action: P0): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    setupLabels<R = void>(): R;
    initWithTitle_field1Label_field2Label_nibName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithTitle: P0, _field1Label: P1, _field2Label: P2, _nibName: P3): R;
    initWithTitle_field1Label_field2Label<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithTitle: P0, _field1Label: P1, _field2Label: P2): R;
    field2<R = cocoa.NSString>(): R;
    setField2<R = void, P0 = cocoa.NSString>(_v: P0): R;
    field1<R = cocoa.NSString>(): R;
    setField1<R = void, P0 = cocoa.NSString>(_v: P0): R;
    itemTitle<R = cocoa.NSString>(): R;
    setItemTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    interTextFieldButton<R = cocoa.NSButton>(): R;
    setInterTextFieldButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    textField2<R = cocoa.MSInlineUpDownTextField>(): R;
    setTextField2<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    textField1<R = cocoa.MSInlineUpDownTextField>(): R;
    setTextField1<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    itemLabel<R = cocoa.NSTextField>(): R;
    setItemLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSTwoTextFieldInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSTwoTextFieldInspectorItem>(): R;
      new: <R = MSTwoTextFieldInspectorItem>() => R;
    }
  }
}

declare const MSTwoTextFieldInspectorItem: cocoa.classes.MSTwoTextFieldInspectorItem;
