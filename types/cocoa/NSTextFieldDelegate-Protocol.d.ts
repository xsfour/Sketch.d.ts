/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFieldDelegateProtocol<T = any> {
    textField_textView_shouldSelectCandidateAtIndex<R = boolean, P0 = NSTextField, P1 = NSTextView, P2 = number>(_textField: P0, _textView: P1, _shouldSelectCandidateAtIndex: P2): R;
    textField_textView_candidates_forSelectedRange<R = NSArray, P0 = NSTextField, P1 = NSTextView, P2 = NSArray, P3 = _NSRange>(_textField: P0, _textView: P1, _candidates: P2, _forSelectedRange: P3): R;
    textField_textView_candidatesForSelectedRange<R = NSArray, P0 = NSTextField, P1 = NSTextView, P2 = _NSRange>(_textField: P0, _textView: P1, _candidatesForSelectedRange: P2): R;
  }
  namespace classes {
    export interface NSTextFieldDelegateProtocol<T = any> {  }
  }
}
