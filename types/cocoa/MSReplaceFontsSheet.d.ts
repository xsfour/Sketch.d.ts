/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontsSheet<T = any> extends cocoa.CHSheetController, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.BCPopoverDelegateProtocol, cocoa.NSWindowDelegateProtocol {
    closePopover<R = boolean>(): R;
    displayNameForSystemFontname<R = unknown, P0 = unknown>(_displayNameForSystemFontname: P0): R;
    fontFamilyAction<R = void, P0 = unknown>(_fontFamilyAction: P0): R;
    reloadFontWeightPopup_familyName_row<R = void, P0 = unknown, P1 = unknown, P2 = number>(_reloadFontWeightPopup: P0, _familyName: P1, _row: P2): R;
    fontWeightAction<R = void, P0 = unknown>(_fontWeightAction: P0): R;
    changeFontFamilyTo_forRow<R = void, P0 = unknown, P1 = number>(_changeFontFamilyTo: P0, _forRow: P1): R;
    updateFonts<R = void>(): R;
    setObject<R = void, P0 = unknown>(_setObject: P0): R;
    systemFontsChanged<R = void, P0 = unknown>(_systemFontsChanged: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    viewController<R = cocoa.NSViewController>(): R;
    setViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    fonts<R = cocoa.NSMutableArray>(): R;
    setFonts<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSReplaceFontsSheet<T = any> extends cocoa.classes.CHSheetController, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.BCPopoverDelegateProtocol, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSReplaceFontsSheet>(): R;
      new: <R = MSReplaceFontsSheet>() => R;
      dontReplaceFontLabel<R = unknown>(): R;
    }
  }
}

declare const MSReplaceFontsSheet: cocoa.classes.MSReplaceFontsSheet;
