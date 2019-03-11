/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTouchBarItemController<T = any> extends cocoa.NSObject {
    _showTextListPanel<R = void, P0 = unknown>(__showTextListPanel: P0): R;
    _changeTextList<R = void, P0 = unknown>(__changeTextList: P0): R;
    _changeTextAlignment<R = void, P0 = unknown>(__changeTextAlignment: P0): R;
    _reconfigureTextStyle<R = void>(): R;
    _changeTextStyle<R = void, P0 = unknown>(__changeTextStyle: P0): R;
    _changeTextColor<R = void, P0 = unknown>(__changeTextColor: P0): R;
    setSelectedAttributesWithEnumrator<R = void, P0 = cocoa.CDUnknownBlockType>(_setSelectedAttributesWithEnumrator: P0): R;
    setSelectedAttributes_isMultiple<R = void, P0 = unknown, P1 = boolean>(_setSelectedAttributes: P0, _isMultiple: P1): R;
    loadNib<R = void>(): R;
    itemForIdentifier<R = unknown, P0 = unknown>(_itemForIdentifier: P0): R;
    dealloc<R = void>(): R;
    textList<R = cocoa.NSButton>(): R;
    setTextList<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    textAlignments<R = cocoa.NSSegmentedControl>(): R;
    setTextAlignments<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    textAlignment<R = cocoa.NSButton>(): R;
    setTextAlignment<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    textStyle<R = cocoa.NSSegmentedControl>(): R;
    setTextStyle<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    colorPicker<R = cocoa.NSButton>(): R;
    setColorPicker<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    textListViewController<R = cocoa.NSViewController>(): R;
    setTextListViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    client<R = cocoa.NSTextTouchBarItemControllerClient>(): R;
    setClient<R = void, P0 = cocoa.NSTextTouchBarItemControllerClient>(_v: P0): R;
    usesNarrowTextStyleItem<R = boolean>(): R;
    setUsesNarrowTextStyleItem<R = void, P0 = boolean>(_v: P0): R;
    effectiveTextListViewController<R = cocoa.NSViewController>(): R;
    textFormatItem<R = cocoa.NSGroupTouchBarItem>(): R;
    textListItem<R = cocoa.NSPopoverTouchBarItem>(): R;
    textAlignmentItem<R = cocoa.NSPopoverTouchBarItem>(): R;
    textStyleItem<R = cocoa.NSCustomTouchBarItem>(): R;
    colorPickerItem<R = cocoa.NSColorPickerTouchBarItem>(): R;
  }
  namespace classes {
    export interface NSTextTouchBarItemController<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTextTouchBarItemController>(): R;
      new: <R = NSTextTouchBarItemController>() => R;
      nibForItems<R = unknown>(): R;
    }
  }
}

declare const NSTextTouchBarItemController: cocoa.classes.NSTextTouchBarItemController;
