/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableTextLayer<T = any> extends cocoa._MSImmutableTextLayer, cocoa.MSColorUserProtocol, cocoa.NSLayoutManagerDelegateProtocol, cocoa.MSFirstLineTypesetterDelegateProtocol {
    createTextStorage<R = unknown>(): R;
    lineHeight<R = number>(): R;
    defaultLineHeight<R = number, P0 = unknown>(_defaultLineHeight: P0): R;
    font<R = unknown>(): R;
    usedFontNames<R = unknown>(): R;
    startingPositionOnPath<R = number, P0 = unknown>(_startingPositionOnPath: P0): R;
    bezierPathFromGlyphsInBoundsWithParentGroup_layoutManager<R = unknown, P0 = unknown, P1 = unknown>(_bezierPathFromGlyphsInBoundsWithParentGroup: P0, _layoutManager: P1): R;
    firstUnderlyingShapePathWithParentGroup<R = unknown, P0 = unknown>(_firstUnderlyingShapePathWithParentGroup: P0): R;
    shapeToUseForTextOnPathWithParentGroup<R = unknown, P0 = unknown>(_shapeToUseForTextOnPathWithParentGroup: P0): R;
    textContainerSize<R = cocoa.CGSize>(): R;
    totalHeightOfFont<R = number, P0 = unknown>(_totalHeightOfFont: P0): R;
    migratePropertiesFromV97OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV97OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV80OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV80OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV77OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV77OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV76OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV76OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV44OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV44OrEarlierWithUnarchiver: P0): R;
    textStoragePoolInCache<R = unknown, P0 = unknown>(_textStoragePoolInCache: P0): R;
    addContentToTextElement_exporter_textStorage<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToTextElement: P0, _exporter: P1, _textStorage: P2): R;
    originForCharacterAttributes_exporter_layoutManager<R = cocoa.CGPoint, P0 = unknown, P1 = unknown, P2 = unknown>(_originForCharacterAttributes: P0, _exporter: P1, _layoutManager: P2): R;
    elementForSpan_origin_exporter_text<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = unknown, P3 = unknown>(_elementForSpan: P0, _origin: P1, _exporter: P2, _text: P3): R;
    spanInfoForRun_charAttributes_text_layoutManager<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = unknown>(_spanInfoForRun: P0, _charAttributes: P1, _text: P2, _layoutManager: P3): R;
    addSVGAttributes_forCharacterAttributes_exporter<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addSVGAttributes: P0, _forCharacterAttributes: P1, _exporter: P2): R;
    isEditingText<R = boolean>(): R;
    textLayout<R = cocoa.MSTextLayout>(): R;
    stringValue<R = cocoa.NSString>(): R;
    attributedStringValue<R = cocoa.NSAttributedString>(): R;
    fontSize<R = number>(): R;
    textAlignment<R = number>(): R;
    shouldUseBezierRepresentationForRendering<R = boolean>(): R;
    capHeightBounds<R = cocoa.CGRect>(): R;
    drawingPointForText<R = cocoa.CGPoint>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImmutableTextLayer<T = any> extends cocoa.classes._MSImmutableTextLayer, cocoa.classes.MSColorUserProtocol, cocoa.classes.NSLayoutManagerDelegateProtocol, cocoa.classes.MSFirstLineTypesetterDelegateProtocol {
      alloc<R = MSImmutableTextLayer>(): R;
      new: <R = MSImmutableTextLayer>() => R;
    }
  }
}

declare const MSImmutableTextLayer: cocoa.classes.MSImmutableTextLayer;
