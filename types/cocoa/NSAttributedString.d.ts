/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAttributedString<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSMutableCopyingProtocol, cocoa.NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    enumerateAttribute_inRange_options_usingBlock<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = number, P3 = cocoa.CDUnknownBlockType>(_enumerateAttribute: P0, _inRange: P1, _options: P2, _usingBlock: P3): R;
    enumerateAttributesInRange_options_usingBlock<R = void, P0 = cocoa._NSRange, P1 = number, P2 = cocoa.CDUnknownBlockType>(_enumerateAttributesInRange: P0, _options: P1, _usingBlock: P2): R;
    attribute_atIndex_longestEffectiveRange_inRange<R = unknown, P0 = unknown, P1 = number, P2 = cocoa._NSRange, P3 = cocoa._NSRange>(_attribute: P0, _atIndex: P1, _longestEffectiveRange: P2, _inRange: P3): R;
    attributesAtIndex_longestEffectiveRange_inRange<R = unknown, P0 = number, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_attributesAtIndex: P0, _longestEffectiveRange: P1, _inRange: P2): R;
    description<R = unknown>(): R;
    isEqualToAttributedString<R = boolean, P0 = unknown>(_isEqualToAttributedString: P0): R;
    hash<R = number>(): R;
    length<R = number>(): R;
    attributedStringByWeaklyAddingAttributes<R = unknown, P0 = unknown>(_attributedStringByWeaklyAddingAttributes: P0): R;
    attributedSubstringFromRange_replacingCharactersInRanges_numberOfRanges_withString<R = unknown, P0 = cocoa._NSRange, P1 = cocoa._NSRange, P2 = number, P3 = unknown>(_attributedSubstringFromRange: P0, _replacingCharactersInRanges: P1, _numberOfRanges: P2, _withString: P3): R;
    attributedSubstringFromRange<R = unknown, P0 = cocoa._NSRange>(_attributedSubstringFromRange: P0): R;
    attribute_atIndex_effectiveRange<R = unknown, P0 = unknown, P1 = number, P2 = cocoa._NSRange>(_attribute: P0, _atIndex: P1, _effectiveRange: P2): R;
    attributesAtIndex_effectiveRange<R = unknown, P0 = number, P1 = cocoa._NSRange>(_attributesAtIndex: P0, _effectiveRange: P1): R;
    scriptingContains<R = boolean, P0 = unknown>(_scriptingContains: P0): R;
    scriptingEndsWith<R = boolean, P0 = unknown>(_scriptingEndsWith: P0): R;
    scriptingBeginsWith<R = boolean, P0 = unknown>(_scriptingBeginsWith: P0): R;
    scriptingIsGreaterThan<R = boolean, P0 = unknown>(_scriptingIsGreaterThan: P0): R;
    scriptingIsGreaterThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsGreaterThanOrEqualTo: P0): R;
    scriptingIsLessThan<R = boolean, P0 = unknown>(_scriptingIsLessThan: P0): R;
    scriptingIsLessThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsLessThanOrEqualTo: P0): R;
    scriptingIsEqualTo<R = boolean, P0 = unknown>(_scriptingIsEqualTo: P0): R;
    _attributesAreEqualToAttributesInAttributedString<R = boolean, P0 = unknown>(__attributesAreEqualToAttributesInAttributedString: P0): R;
    _createAttributedSubstringWithRange<R = unknown, P0 = cocoa._NSRange>(__createAttributedSubstringWithRange: P0): R;
    _cfTypeID<R = number>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    string<R = cocoa.NSString>(): R;
    // + NSAttributedString(KitAddition,NSAttributedStringAttachmentConveniences,NSAttributedStringDeprecatedKitAdditions,NSAttributedStringPasteboardAdditions,NSStringDrawingExtension,NSTextScriptingAdditions,CHAttributedString,CHAttributedStringAdditions,Chocolat,ColorSpaceConversion,MSAttributedStringInternalSupport,MSBaseArchiver,MSList,TreeAsDictionarySupport):
    docFormatFromRange_documentAttributes<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_docFormatFromRange: P0, _documentAttributes: P1): R;
    RTFDFileWrapperFromRange_documentAttributes<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_RTFDFileWrapperFromRange: P0, _documentAttributes: P1): R;
    RTFDFromRange_documentAttributes<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_RTFDFromRange: P0, _documentAttributes: P1): R;
    RTFFromRange_documentAttributes<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_RTFFromRange: P0, _documentAttributes: P1): R;
    _attachmentFileWrapperDescription<R = unknown, P0 = boolean>(__attachmentFileWrapperDescription: P0): R;
    URLAtIndex_effectiveRange<R = unknown, P0 = number, P1 = cocoa._NSRange>(_URLAtIndex: P0, _effectiveRange: P1): R;
    pasteboardPropertyListForType<R = unknown, P0 = unknown>(_pasteboardPropertyListForType: P0): R;
    writingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_writingOptionsForType: P0, _pasteboard: P1): R;
    writableTypesForPasteboard<R = unknown, P0 = unknown>(_writableTypesForPasteboard: P0): R;
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = unknown>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
    _drawCenteredVerticallyInRect_options_scrollable_styleEffectConfiguration_referenceCell_referenceView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number, P2 = boolean, P3 = unknown, P4 = unknown, P5 = unknown>(__drawCenteredVerticallyInRect: P0, _options: P1, _scrollable: P2, _styleEffectConfiguration: P3, _referenceCell: P4, _referenceView: P5): R;
    _drawCenteredVerticallyInRect_scrollable_styledTextOptions<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean, P2 = unknown>(__drawCenteredVerticallyInRect: P0, _scrollable: P1, _styledTextOptions: P2): R;
    _drawCenteredVerticallyInRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(__drawCenteredVerticallyInRect: P0): R;
    _sizeWithSize<R = cocoa.CGSize, P0 = cocoa.CGSize>(__sizeWithSize: P0): R;
    attachments<R = unknown>(): R;
    attributesMatch_comparison<R = boolean, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_attributesMatch: P0, _comparison: P1): R;
    attributesMatch<R = boolean, P0 = unknown>(_attributesMatch: P0): R;
    attributeOrNil_atIndex<R = unknown, P0 = unknown, P1 = number>(_attributeOrNil: P0, _atIndex: P1): R;
    attributedStringWithHighlightColor<R = unknown, P0 = unknown>(_attributedStringWithHighlightColor: P0): R;
    translatedToColorSpace<R = unknown, P0 = unknown>(_translatedToColorSpace: P0): R;
    convertedToColorSpace<R = unknown, P0 = unknown>(_convertedToColorSpace: P0): R;
    attributedStringWithDocumentColorSpace_convert<R = unknown, P0 = unknown, P1 = boolean>(_attributedStringWithDocumentColorSpace: P0, _convert: P1): R;
    standardAttributedStringWithDocumentColorSpace<R = unknown, P0 = unknown>(_standardAttributedStringWithDocumentColorSpace: P0): R;
    initWithString_attributedStringAttributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _attributedStringAttributes: P1): R;
    attributedStringAttributes<R = unknown>(): R;
    attributedStringByApplyingBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_attributedStringByApplyingBlock: P0): R;
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    attributeForKey<R = unknown, P0 = unknown>(_attributeForKey: P0): R;
    currentListStyle<R = unknown>(): R;
    treeAsDictionary<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    archiveReferenceIdentifier_bc<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSAttributedString<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSMutableCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSAttributedString>(): R;
      new: <R = NSAttributedString>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      _setAttributedDictionaryClass<R = void, P0 = unknown>(__setAttributedDictionaryClass: P0): R;
      // + NSAttributedString(KitAddition,NSAttributedStringAttachmentConveniences,NSAttributedStringDeprecatedKitAdditions,NSAttributedStringPasteboardAdditions,NSStringDrawingExtension,NSTextScriptingAdditions,CHAttributedString,CHAttributedStringAdditions,Chocolat,ColorSpaceConversion,MSAttributedStringInternalSupport,MSBaseArchiver,MSList,TreeAsDictionarySupport):
      writableTextFileTypesForDocumentTypes<R = unknown>(): R;
      attributedStringWithAttachment<R = unknown, P0 = unknown>(_attributedStringWithAttachment: P0): R;
      textUnfilteredPasteboardTypes<R = unknown>(): R;
      textUnfilteredFileTypes<R = unknown>(): R;
      textPasteboardTypes<R = unknown>(): R;
      textFileTypes<R = unknown>(): R;
      readingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_readingOptionsForType: P0, _pasteboard: P1): R;
      readableTypesForPasteboard<R = unknown, P0 = unknown>(_readableTypesForPasteboard: P0): R;
      textTypes<R = unknown>(): R;
      textUnfilteredTypes<R = unknown>(): R;
      attributedStringWithString_font<R = unknown, P0 = unknown, P1 = unknown>(_attributedStringWithString: P0, _font: P1): R;
      attributedStringWithString_attributes<R = unknown, P0 = unknown, P1 = unknown>(_attributedStringWithString: P0, _attributes: P1): R;
    }
  }
}

declare const NSAttributedString: cocoa.classes.NSAttributedString;
