/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPageListController<T = any> extends cocoa.MSSidebarListController, cocoa.BCOutlineViewDataControllerDataSourceProtocol, cocoa.BCOutlineViewDataControllerDelegateProtocol {
    pasteboardWriterClass<R = unknown>(): R;
    duplicatePages<R = void, P0 = unknown>(_duplicatePages: P0): R;
    removePageWithValidation<R = void, P0 = unknown>(_removePageWithValidation: P0): R;
    addPage_after<R = void, P0 = unknown, P1 = unknown>(_addPage: P0, _after: P1): R;
    dataController_removeNodes<R = void, P0 = unknown, P1 = unknown>(_dataController: P0, _removeNodes: P1): R;
    pageForNode<R = unknown, P0 = unknown>(_pageForNode: P0): R;
    selectedPages<R = cocoa.NSArray>(): R;
    setSelectedPages<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    defaultFirstResponder<R = cocoa.NSView>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPageListController<T = any> extends cocoa.classes.MSSidebarListController, cocoa.classes.BCOutlineViewDataControllerDataSourceProtocol, cocoa.classes.BCOutlineViewDataControllerDelegateProtocol {
      alloc<R = MSPageListController>(): R;
      new: <R = MSPageListController>() => R;
    }
  }
}

declare const MSPageListController: cocoa.classes.MSPageListController;
