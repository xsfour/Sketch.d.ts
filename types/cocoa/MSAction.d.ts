/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAction<T = any> extends cocoa.NSResponder, cocoa.NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    handlesKeyEvent<R = boolean, P0 = unknown>(_handlesKeyEvent: P0): R;
    submenuActionIDs<R = unknown>(): R;
    containsActionWithID<R = boolean, P0 = unknown>(_containsActionWithID: P0): R;
    doPerformAction<R = void, P0 = unknown>(_doPerformAction: P0): R;
    cleanName<R = unknown>(): R;
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    contextForActionObservers<R = unknown>(): R;
    imageForToolbarCustomisationSheet<R = unknown>(): R;
    makeToolbarItemForToolbar<R = unknown, P0 = boolean>(_makeToolbarItemForToolbar: P0): R;
    validateToolbarItem<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    menuItems<R = unknown>(): R;
    menuItemsForMenu<R = unknown, P0 = unknown>(_menuItemsForMenu: P0): R;
    isSelectable<R = boolean>(): R;
    toolbarItem<R = cocoa.NSToolbarItem>(): R;
    setToolbarItem<R = void, P0 = cocoa.NSToolbarItem>(_v: P0): R;
    controller<R = cocoa.MSActionController>(): R;
    setController<R = void, P0 = cocoa.MSActionController>(_v: P0): R;
    isActive<R = boolean>(): R;
    hasSubMenu<R = boolean>(): R;
    validationStatus<R = number>(): R;
    validate<R = boolean>(): R;
    shortcutCharacter<R = number>(): R;
    label<R = cocoa.NSString>(): R;
    image<R = cocoa.NSImage>(): R;
    imageName<R = cocoa.NSString>(): R;
    hasDynamicTitle<R = boolean>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    tooltip<R = cocoa.NSString>(): R;
    mayShowInToolbar<R = boolean>(): R;
    labelForToolbarCustomisationSheet<R = cocoa.NSString>(): R;
    imageForToolbar<R = cocoa.NSImage>(): R;
    labelForToolbar<R = cocoa.NSString>(): R;
    menuItemForToolbarItem<R = cocoa.NSMenuItem>(): R;
    labelForMenu<R = cocoa.NSString>(): R;
    preferredMenuAction<R = string>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAction<T = any> extends cocoa.classes.NSResponder, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSAction>(): R;
      new: <R = MSAction>() => R;
      classNamesToImageNamesDictionary<R = unknown>(): R;
      imageName<R = unknown>(): R;
    }
  }
}

declare const MSAction: cocoa.classes.MSAction;
