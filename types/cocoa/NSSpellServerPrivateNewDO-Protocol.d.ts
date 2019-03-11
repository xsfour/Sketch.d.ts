/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellServerPrivateNewDOProtocol<T = any> {
    _invalidateDictionary_newTime<R = void, P0 = cocoa.NSString, P1 = number>(__invalidateDictionary: P0, _newTime: P1): R;
    _setWords_inDictionary<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSString>(__setWords: P0, _inDictionary: P1): R;
    _wordsInDictionary<R = cocoa.NSArray, P0 = cocoa.NSString>(__wordsInDictionary: P0): R;
    _appendWord_toDictionary<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(__appendWord: P0, _toDictionary: P1): R;
    _isWord_inDictionary<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(__isWord: P0, _inDictionary: P1): R;
    _forgetWord_inDictionary<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(__forgetWord: P0, _inDictionary: P1): R;
    _learnWord_inDictionary<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(__learnWord: P0, _inDictionary: P1): R;
    _prefixesForPinyinInputString_language<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = cocoa.NSString>(__prefixesForPinyinInputString: P0, _language: P1): R;
    _extendedAlternativesForPinyinInputString_language<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = cocoa.NSString>(__extendedAlternativesForPinyinInputString: P0, _language: P1): R;
    _alternativesForPinyinInputString_language<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = cocoa.NSString>(__alternativesForPinyinInputString: P0, _language: P1): R;
    _stringForInputString_language<R = cocoa.NSString, P0 = cocoa.NSString, P1 = cocoa.NSString>(__stringForInputString: P0, _language: P1): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language_options<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSDictionary>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language_options<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSDictionary>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionsForPartialWordRange_inString_language_options<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSDictionary>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionsForPartialWordRange_inString_language<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWordRange_inString_language_options<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSDictionary>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestGuessesForWordRange_inString_language<R = cocoa.NSArray, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = cocoa.NSString>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWord_inLanguage<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = cocoa.NSString>(__suggestGuessesForWord: P0, _inLanguage: P1): R;
    _recordResponse_toCorrection_forWord_language<R = void, P0 = number, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.NSString>(__recordResponse: P0, _toCorrection: P1, _forWord: P2, _language: P3): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_optionsData_orthography_learnedDictionaries<R = cocoa.NSData, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = number, P3 = number, P4 = cocoa.NSData, P5 = cocoa.NSOrthography, P6 = cocoa.NSArray>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _optionsData: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_options_orthography_learnedDictionaries<R = cocoa.NSData, P0 = cocoa._NSRange, P1 = cocoa.NSString, P2 = number, P3 = number, P4 = cocoa.NSDictionary, P5 = cocoa.NSOrthography, P6 = cocoa.NSArray>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _options: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromCheckingString_offset_types_optionsData_orthography_learnedDictionaries_wordCount<R = cocoa.NSData, P0 = cocoa.NSString, P1 = number, P2 = number, P3 = cocoa.NSData, P4 = cocoa.NSOrthography, P5 = cocoa.NSArray, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _optionsData: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _dataFromCheckingString_offset_types_options_orthography_learnedDictionaries_wordCount<R = cocoa.NSData, P0 = cocoa.NSString, P1 = number, P2 = number, P3 = cocoa.NSDictionary, P4 = cocoa.NSOrthography, P5 = cocoa.NSArray, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkString_offset_types_options_orthography_learnedDictionaries_wordCount<R = cocoa.NSArray, P0 = cocoa.NSString, P1 = number, P2 = number, P3 = cocoa.NSDictionary, P4 = cocoa.NSOrthography, P5 = cocoa.NSArray, P6 = number>(__checkString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkGrammarInString_language_details<R = cocoa._NSRange, P0 = cocoa.NSString, P1 = cocoa.NSString, P2 = unknown>(__checkGrammarInString: P0, _language: P1, _details: P2): R;
    _findMisspelledWordInString_language_learnedDictionaries_wordCount_countOnly<R = cocoa._NSRange, P0 = cocoa.NSString, P1 = cocoa.NSString, P2 = cocoa.NSArray, P3 = number, P4 = string>(__findMisspelledWordInString: P0, _language: P1, _learnedDictionaries: P2, _wordCount: P3, _countOnly: P4): R;
  }
  namespace classes {
    export interface NSSpellServerPrivateNewDOProtocol<T = any> {  }
  }
}

declare const NSSpellServerPrivateNewDOProtocol: cocoa.classes.NSSpellServerPrivateNewDOProtocol;
