/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSSharedStylesPopUpButtonCellDelegateProtocol, cocoa.NSMenuDelegateProtocol {
    renameSharedObjectAction<R = void, P0 = unknown>(_renameSharedObjectAction: P0): R;
    renameSharedObject<R = void, P0 = unknown>(_renameSharedObject: P0): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    menuBuilder<R = cocoa.MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = cocoa.MSForeignObjectMenuBuilder>(_v: P0): R;
    renameBlock<R = cocoa.CDUnknownBlockType>(): R;
    setRenameBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    renamingObject<R = cocoa.MSSharedObject>(): R;
    setRenamingObject<R = void, P0 = cocoa.MSSharedObject>(_v: P0): R;
    editNameField<R = cocoa.NSTextField>(): R;
    setEditNameField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    sharedObjectsPopUpButton<R = cocoa.MSShareableObjectPopUpButton>(): R;
    setSharedObjectsPopUpButton<R = void, P0 = cocoa.MSShareableObjectPopUpButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedStylesInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSSharedStylesPopUpButtonCellDelegateProtocol, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSSharedStylesInspectorItem>(): R;
      new: <R = MSSharedStylesInspectorItem>() => R;
    }
  }
}

declare const MSSharedStylesInspectorItem: cocoa.classes.MSSharedStylesInspectorItem;
