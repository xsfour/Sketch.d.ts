/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFormatter<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    isPartialStringValid_proposedSelectedRange_originalString_originalSelectedRange_errorDescription<R = boolean, P0 = unknown, P1 = cocoa._NSRange, P2 = unknown, P3 = cocoa._NSRange, P4 = unknown>(_isPartialStringValid: P0, _proposedSelectedRange: P1, _originalString: P2, _originalSelectedRange: P3, _errorDescription: P4): R;
    isPartialStringValid_newEditingString_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_isPartialStringValid: P0, _newEditingString: P1, _errorDescription: P2): R;
    getObjectValue_forString_range_error<R = boolean, P0 = unknown, P1 = unknown, P2 = cocoa._NSRange, P3 = unknown>(_getObjectValue: P0, _forString: P1, _range: P2, _error: P3): R;
    getObjectValue_forString_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_getObjectValue: P0, _forString: P1, _errorDescription: P2): R;
    editingStringForObjectValue<R = unknown, P0 = unknown>(_editingStringForObjectValue: P0): R;
    attributedStringForObjectValue_withDefaultAttributes<R = unknown, P0 = unknown, P1 = unknown>(_attributedStringForObjectValue: P0, _withDefaultAttributes: P1): R;
    stringForObjectValue<R = unknown, P0 = unknown>(_stringForObjectValue: P0): R;
    _invalidateCache<R = void>(): R;
    _tracksCacheGenerationCount<R = boolean>(): R;
    _cacheGenerationCount<R = number>(): R;
    _mayDecorateAttributedStringForObjectValue<R = boolean, P0 = unknown>(__mayDecorateAttributedStringForObjectValue: P0): R;
  }
  namespace classes {
    export interface NSFormatter<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSFormatter>(): R;
      new: <R = NSFormatter>() => R;
    }
  }
}

declare const NSFormatter: cocoa.classes.NSFormatter;
