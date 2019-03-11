/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFieldDelegateProtocol<T = any> {
    textField_textView_shouldSelectCandidateAtIndex<R = boolean, P0 = cocoa.NSTextField, P1 = cocoa.NSTextView, P2 = number>(_textField: P0, _textView: P1, _shouldSelectCandidateAtIndex: P2): R;
    textField_textView_candidates_forSelectedRange<R = cocoa.NSArray, P0 = cocoa.NSTextField, P1 = cocoa.NSTextView, P2 = cocoa.NSArray, P3 = cocoa._NSRange>(_textField: P0, _textView: P1, _candidates: P2, _forSelectedRange: P3): R;
    textField_textView_candidatesForSelectedRange<R = cocoa.NSArray, P0 = cocoa.NSTextField, P1 = cocoa.NSTextView, P2 = cocoa._NSRange>(_textField: P0, _textView: P1, _candidatesForSelectedRange: P2): R;
  }
  namespace classes {
    export interface NSTextFieldDelegateProtocol<T = any> {  }
  }
}

declare const NSTextFieldDelegateProtocol: cocoa.classes.NSTextFieldDelegateProtocol;
