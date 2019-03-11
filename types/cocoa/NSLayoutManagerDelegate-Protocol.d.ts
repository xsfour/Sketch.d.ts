/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutManagerDelegateProtocol<T = any> {
    layoutManager_shouldUseTemporaryAttributes_forDrawingToScreen_atCharacterIndex_effectiveRange<R = cocoa.NSDictionary, P0 = cocoa.NSLayoutManager, P1 = cocoa.NSDictionary, P2 = boolean, P3 = number, P4 = cocoa._NSRange>(_layoutManager: P0, _shouldUseTemporaryAttributes: P1, _forDrawingToScreen: P2, _atCharacterIndex: P3, _effectiveRange: P4): R;
    layoutManager_textContainer_didChangeGeometryFromSize<R = void, P0 = cocoa.NSLayoutManager, P1 = cocoa.NSTextContainer, P2 = cocoa.CGSize>(_layoutManager: P0, _textContainer: P1, _didChangeGeometryFromSize: P2): R;
    layoutManager_didCompleteLayoutForTextContainer_atEnd<R = void, P0 = cocoa.NSLayoutManager, P1 = cocoa.NSTextContainer, P2 = boolean>(_layoutManager: P0, _didCompleteLayoutForTextContainer: P1, _atEnd: P2): R;
    layoutManagerDidInvalidateLayout<R = void, P0 = cocoa.NSLayoutManager>(_layoutManagerDidInvalidateLayout: P0): R;
    layoutManager_shouldSetLineFragmentRect_lineFragmentUsedRect_baselineOffset_inTextContainer_forGlyphRange<R = boolean, P0 = cocoa.NSLayoutManager, P1 = cocoa.CGRect, P2 = cocoa.CGRect, P3 = number, P4 = cocoa.NSTextContainer, P5 = cocoa._NSRange>(_layoutManager: P0, _shouldSetLineFragmentRect: P1, _lineFragmentUsedRect: P2, _baselineOffset: P3, _inTextContainer: P4, _forGlyphRange: P5): R;
    layoutManager_boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex<R = cocoa.CGRect, P0 = cocoa.NSLayoutManager, P1 = number, P2 = cocoa.NSTextContainer, P3 = cocoa.CGRect, P4 = cocoa.CGPoint, P5 = number>(_layoutManager: P0, _boundingBoxForControlGlyphAtIndex: P1, _forTextContainer: P2, _proposedLineFragment: P3, _glyphPosition: P4, _characterIndex: P5): R;
    layoutManager_shouldBreakLineByHyphenatingBeforeCharacterAtIndex<R = boolean, P0 = cocoa.NSLayoutManager, P1 = number>(_layoutManager: P0, _shouldBreakLineByHyphenatingBeforeCharacterAtIndex: P1): R;
    layoutManager_shouldBreakLineByWordBeforeCharacterAtIndex<R = boolean, P0 = cocoa.NSLayoutManager, P1 = number>(_layoutManager: P0, _shouldBreakLineByWordBeforeCharacterAtIndex: P1): R;
    layoutManager_shouldUseAction_forControlCharacterAtIndex<R = number, P0 = cocoa.NSLayoutManager, P1 = number, P2 = number>(_layoutManager: P0, _shouldUseAction: P1, _forControlCharacterAtIndex: P2): R;
    layoutManager_paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = cocoa.NSLayoutManager, P1 = number, P2 = cocoa.CGRect>(_layoutManager: P0, _paragraphSpacingAfterGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = cocoa.NSLayoutManager, P1 = number, P2 = cocoa.CGRect>(_layoutManager: P0, _paragraphSpacingBeforeGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = cocoa.NSLayoutManager, P1 = number, P2 = cocoa.CGRect>(_layoutManager: P0, _lineSpacingAfterGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_shouldGenerateGlyphs_properties_characterIndexes_font_forGlyphRange<R = number, P0 = cocoa.NSLayoutManager, P1 = number, P2 = number, P3 = number, P4 = cocoa.NSFont, P5 = cocoa._NSRange>(_layoutManager: P0, _shouldGenerateGlyphs: P1, _properties: P2, _characterIndexes: P3, _font: P4, _forGlyphRange: P5): R;
  }
  namespace classes {
    export interface NSLayoutManagerDelegateProtocol<T = any> {  }
  }
}

declare const NSLayoutManagerDelegateProtocol: cocoa.classes.NSLayoutManagerDelegateProtocol;
