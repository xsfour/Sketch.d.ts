/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSParagraphStyleItem<T = any> extends cocoa.MSInspectorItem {
    firstOccurrenceOfAttributeWithName<R = unknown, P0 = unknown>(_firstOccurrenceOfAttributeWithName: P0): R;
    changeFontPropertiesOfTextObjectsInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_changeFontPropertiesOfTextObjectsInBlock: P0): R;
    transformPopUpAction<R = void, P0 = unknown>(_transformPopUpAction: P0): R;
    prepareTransformPopUpButton<R = void>(): R;
    decorationButtonAction<R = void, P0 = unknown>(_decorationButtonAction: P0): R;
    prepareDecorationButton<R = void>(): R;
    awakeFromNib<R = void>(): R;
    titleItem<R = cocoa.NSMenuItem>(): R;
    setTitleItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    transformControl<R = cocoa.NSSegmentedControl>(): R;
    setTransformControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    decorationButton<R = cocoa.NSPopUpButton>(): R;
    setDecorationButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    textItem<R = cocoa.MSTextLayerItem>(): R;
    setTextItem<R = void, P0 = cocoa.MSTextLayerItem>(_v: P0): R;
  }
  namespace classes {
    export interface MSParagraphStyleItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSParagraphStyleItem>(): R;
      new: <R = MSParagraphStyleItem>() => R;
    }
  }
}

declare const MSParagraphStyleItem: cocoa.classes.MSParagraphStyleItem;
