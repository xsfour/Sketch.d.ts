/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTextfieldManager<T = any> extends cocoa.NSObject, cocoa.MSInspectorValueAdaptorChangeObserverProtocol {
    cxx_destruct<R = void>(): R;
    handleValueDidChange<R = void>(): R;
    initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5): R;
    initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_hideSelectionOnEdit_resetPointsOnEdit<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = boolean, P7 = boolean>(_initWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5, _hideSelectionOnEdit: P6, _resetPointsOnEdit: P7): R;
    resetPointsOnEdit<R = boolean>(): R;
    setResetPointsOnEdit<R = void, P0 = boolean>(_v: P0): R;
    hideSelectionOnEdit<R = boolean>(): R;
    setHideSelectionOnEdit<R = void, P0 = boolean>(_v: P0): R;
    touchBarItems<R = cocoa.NSArray>(): R;
    setTouchBarItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    textField<R = cocoa.MSUpDownTextField>(): R;
    setTextField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    adaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    item<R = cocoa.MSInspectorItem>(): R;
    setItem<R = void, P0 = cocoa.MSInspectorItem>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorTextfieldManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSInspectorValueAdaptorChangeObserverProtocol {
      alloc<R = MSInspectorTextfieldManager>(): R;
      new: <R = MSInspectorTextfieldManager>() => R;
      managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_managerWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5): R;
    }
  }
}

declare const MSInspectorTextfieldManager: cocoa.classes.MSInspectorTextfieldManager;
