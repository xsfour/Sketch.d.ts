/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutManagerRulerHelper<T = any> extends cocoa.NSObject {
    defaultLineHeightForFont<R = number, P0 = unknown>(_defaultLineHeightForFont: P0): R;
    _rulerAccViewStylesAction<R = void, P0 = unknown>(__rulerAccViewStylesAction: P0): R;
    _rulerAccViewSpacingAction<R = void, P0 = unknown>(__rulerAccViewSpacingAction: P0): R;
    _rulerAccViewListsAction<R = void, P0 = unknown>(__rulerAccViewListsAction: P0): R;
    _rulerAccViewAlignmentAction<R = void, P0 = unknown>(__rulerAccViewAlignmentAction: P0): R;
    _doUserSetListMarkerFormat_options<R = void, P0 = unknown, P1 = number>(__doUserSetListMarkerFormat: P0, _options: P1): R;
    _doUserSetListMarkerFormat_options_startingItemNumber_forceStartingItemNumber<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(__doUserSetListMarkerFormat: P0, _options: P1, _startingItemNumber: P2, _forceStartingItemNumber: P3): R;
    _markerLevelForRange<R = number, P0 = cocoa._NSRange>(__markerLevelForRange: P0): R;
    _doUserSetListMarkerFormat_options_startingItemNumber_inRange_level<R = void, P0 = unknown, P1 = number, P2 = number, P3 = cocoa._NSRange, P4 = number>(__doUserSetListMarkerFormat: P0, _options: P1, _startingItemNumber: P2, _inRange: P3, _level: P4): R;
    _doUserRemoveMarkerFormatInRange<R = void, P0 = cocoa._NSRange>(__doUserRemoveMarkerFormatInRange: P0): R;
    _doUserSetAttributes_removeAttributes<R = void, P0 = unknown, P1 = unknown>(__doUserSetAttributes: P0, _removeAttributes: P1): R;
    _doUserParagraphStyleLineHeightMultiple_min_max_lineSpacing_paragraphSpacingBefore_after_isFinal<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = boolean>(__doUserParagraphStyleLineHeightMultiple: P0, _min: P1, _max: P2, _lineSpacing: P3, _paragraphSpacingBefore: P4, _after: P5, _isFinal: P6): R;
    _rulerAccView<R = unknown>(): R;
    _rulerAccViewSetUpLists<R = void>(): R;
    _rulerAccViewUpdateStyles<R = void, P0 = unknown>(__rulerAccViewUpdateStyles: P0): R;
    rulerAccessoryViewForTextView_paragraphStyle_ruler_enabled<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_rulerAccessoryViewForTextView: P0, _paragraphStyle: P1, _ruler: P2, _enabled: P3): R;
    rulerMarkersForTextView_paragraphStyle_ruler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_rulerMarkersForTextView: P0, _paragraphStyle: P1, _ruler: P2): R;
    dealloc<R = void>(): R;
    initWithLayoutManager<R = unknown, P0 = unknown>(_initWithLayoutManager: P0): R;
    lists<R = cocoa.NSPopUpButton>(): R;
    setLists<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    styles<R = cocoa.NSPopUpButton>(): R;
    setStyles<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    decimalTabWell<R = cocoa.NSTabWell>(): R;
    setDecimalTabWell<R = void, P0 = cocoa.NSTabWell>(_v: P0): R;
    rightTabWell<R = cocoa.NSTabWell>(): R;
    setRightTabWell<R = void, P0 = cocoa.NSTabWell>(_v: P0): R;
    centerTabWell<R = cocoa.NSTabWell>(): R;
    setCenterTabWell<R = void, P0 = cocoa.NSTabWell>(_v: P0): R;
    leftTabWell<R = cocoa.NSTabWell>(): R;
    setLeftTabWell<R = void, P0 = cocoa.NSTabWell>(_v: P0): R;
    spacings<R = cocoa.NSPopUpButton>(): R;
    setSpacings<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    alignments<R = cocoa.NSControl>(): R;
    setAlignments<R = void, P0 = cocoa.NSControl>(_v: P0): R;
    rulerAccessoryView<R = cocoa.NSBox>(): R;
    setRulerAccessoryView<R = void, P0 = cocoa.NSBox>(_v: P0): R;
  }
  namespace classes {
    export interface _NSLayoutManagerRulerHelper<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSLayoutManagerRulerHelper>(): R;
      new: <R = _NSLayoutManagerRulerHelper>() => R;
    }
  }
}
