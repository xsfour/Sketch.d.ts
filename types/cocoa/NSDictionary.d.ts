/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionary<T = any> {
    // + NSDictionary(NSDeprecatedKeyValueCoding,NSDictionary,NSDictionaryPortCoding,NSEqualObjectsForKeys,NSFileAttributes,NSKeyValueCoding,NSScriptAppleEventConversion,NSScriptLegacyPropertyListParsing,NSURLExtras,MSAttributedString,MSBaseArchiver,Manifest,ModelSyncSupport,TreeAsDictionarySupport,Typecheck):
    takeValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeValue: P0, _forKey: P1): R;
    initWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfURL: P0, _error: P1): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    writeToURL_error<R = boolean, P0 = unknown, P1 = unknown>(_writeToURL: P0, _error: P1): R;
    writeToURL_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToURL: P0, _atomically: P1): R;
    writeToFile_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToFile: P0, _atomically: P1): R;
    _stringToWrite<R = unknown>(): R;
    descriptionInStringsFileFormat<R = unknown>(): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    isEqualToDictionary_forKeys<R = boolean, P0 = unknown, P1 = unknown>(_isEqualToDictionary: P0, _forKeys: P1): R;
    fileGroupOwnerAccountID<R = unknown>(): R;
    fileOwnerAccountID<R = unknown>(): R;
    fileCreationDate<R = unknown>(): R;
    fileIsAppendOnly<R = boolean>(): R;
    fileIsImmutable<R = boolean>(): R;
    fileHFSTypeCode<R = number>(): R;
    fileHFSCreatorCode<R = number>(): R;
    fileExtensionHidden<R = boolean>(): R;
    fileSystemFileNumber<R = number>(): R;
    fileSystemNumber<R = number>(): R;
    fileGroupOwnerAccountNumber<R = number>(): R;
    fileGroupOwnerAccountName<R = unknown>(): R;
    fileOwnerAccountNumber<R = number>(): R;
    fileOwnerAccountName<R = unknown>(): R;
    filePosixPermissions<R = number>(): R;
    fileType<R = unknown>(): R;
    fileModificationDate<R = unknown>(): R;
    fileSize<R = number>(): R;
    takeStoredValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeStoredValue: P0, _forKey: P1): R;
    storedValueForKey<R = unknown, P0 = unknown>(_storedValueForKey: P0): R;
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _scriptingDescriptorOfRecordType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfRecordType: P0, _orReasonWhyNot: P1): R;
    _scriptFlagsForKey_containFlag<R = boolean, P0 = unknown, P1 = unknown>(__scriptFlagsForKey: P0, _containFlag: P1): R;
    _scriptTerminologyPluralName<R = unknown>(): R;
    _scriptTerminologyNameOrNames<R = unknown>(): R;
    _scriptTerminologyName<R = unknown>(): R;
    _scriptTerminologyDescription<R = unknown>(): R;
    _scriptIsYesForKey<R = boolean, P0 = unknown>(__scriptIsYesForKey: P0): R;
    _web_objectForMIMEType<R = unknown, P0 = unknown>(__web_objectForMIMEType: P0): R;
    _web_numberForKey<R = unknown, P0 = unknown>(__web_numberForKey: P0): R;
    _web_stringForKey<R = unknown, P0 = unknown>(__web_stringForKey: P0): R;
    _web_intForKey<R = number, P0 = unknown>(__web_intForKey: P0): R;
    dictionaryByTranslatingNSColorsToMSImmutableColorsInColorSpace<R = unknown, P0 = unknown>(_dictionaryByTranslatingNSColorsToMSImmutableColorsInColorSpace: P0): R;
    dictionaryByConvertingMSImmutableColorsToNSColorsInColorSpace<R = unknown, P0 = unknown>(_dictionaryByConvertingMSImmutableColorsToNSColorsInColorSpace: P0): R;
    dictionaryByConvertingNSColorsToMSImmutableColorsInColorSpace<R = unknown, P0 = unknown>(_dictionaryByConvertingNSColorsToMSImmutableColorsInColorSpace: P0): R;
    dictionaryByMappingComponentsDictionaryToMSImmutableColor<R = unknown>(): R;
    dictionaryByMappingFontDescriptorsToFont<R = unknown>(): R;
    dictionaryByRefreshingFontDescriptors<R = unknown>(): R;
    dictionaryByMappingFontToFontDescriptors<R = unknown>(): R;
    prepareStringAttributesAfterDecoding<R = unknown>(): R;
    prepareStringAttributesForEncoding<R = unknown>(): R;
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    pointForXKey_yKey<R = CGPoint, P0 = unknown, P1 = unknown>(_pointForXKey: P0, _yKey: P1): R;
    sizeForWidthKey_heightKey<R = CGSize, P0 = unknown, P1 = unknown>(_sizeForWidthKey: P0, _heightKey: P1): R;
    objectForKey_ofType<R = unknown, P0 = unknown, P1 = unknown>(_objectForKey: P0, _ofType: P1): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    treeAsDictionary<R = unknown>(): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace classes {
    export interface NSDictionary<T = any> {
      // + NSDictionary(NSDeprecatedKeyValueCoding,NSDictionary,NSDictionaryPortCoding,NSEqualObjectsForKeys,NSFileAttributes,NSKeyValueCoding,NSScriptAppleEventConversion,NSScriptLegacyPropertyListParsing,NSURLExtras,MSAttributedString,MSBaseArchiver,Manifest,ModelSyncSupport,TreeAsDictionarySupport,Typecheck):
      newWithContentsOf_immutable<R = unknown, P0 = unknown, P1 = boolean>(_newWithContentsOf: P0, _immutable: P1): R;
      dictionaryWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_dictionaryWithContentsOfURL: P0, _error: P1): R;
      dictionaryWithContentsOfURL<R = unknown, P0 = unknown>(_dictionaryWithContentsOfURL: P0): R;
      dictionaryWithContentsOfFile<R = unknown, P0 = unknown>(_dictionaryWithContentsOfFile: P0): R;
      supportsSecureCoding<R = boolean>(): R;
      _scriptingDictionaryOfType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDictionaryOfType: P0, _withDescriptor: P1): R;
    }
  }
}

declare const NSDictionary: cocoa.classes.NSDictionary;
