/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProvider<T = any> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _loadItemOfClass_withLoadHandler_options_coerceForCoding_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = unknown, P3 = boolean, P4 = CDUnknownBlockType>(__loadItemOfClass: P0, _withLoadHandler: P1, _options: P2, _coerceForCoding: P3, _completionHandler: P4): R;
    _loadPreviewImageOfClass_options_coerceForCoding_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = CDUnknownBlockType>(__loadPreviewImageOfClass: P0, _options: P1, _coerceForCoding: P2, _completionHandler: P3): R;
    _loadItemOfClass_forTypeIdentifier_options_coerceForCoding_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = CDUnknownBlockType>(__loadItemOfClass: P0, _forTypeIdentifier: P1, _options: P2, _coerceForCoding: P3, _completionHandler: P4): R;
    loadItemForTypeIdentifier_options_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_loadItemForTypeIdentifier: P0, _options: P1, _completionHandler: P2): R;
    registerItemForTypeIdentifier_loadHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_registerItemForTypeIdentifier: P0, _loadHandler: P1): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithItem_typeIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_initWithItem: P0, _typeIdentifier: P1): R;
    hasItemConformingToTypeIdentifier<R = boolean, P0 = unknown>(_hasItemConformingToTypeIdentifier: P0): R;
    description<R = unknown>(): R;
    _loadObjectOfClass_options_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__loadObjectOfClass: P0, _options: P1, _completionHandler: P2): R;
    loadObjectOfClass_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadObjectOfClass: P0, _completionHandler: P1): R;
    canLoadObjectOfClass<R = boolean, P0 = unknown>(_canLoadObjectOfClass: P0): R;
    registerObjectOfClass_visibility_loadHandler<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_registerObjectOfClass: P0, _visibility: P1, _loadHandler: P2): R;
    registerObject_visibility<R = void, P0 = unknown, P1 = number>(_registerObject: P0, _visibility: P1): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    loadInPlaceFileRepresentationForTypeIdentifier_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadInPlaceFileRepresentationForTypeIdentifier: P0, _completionHandler: P1): R;
    loadFileRepresentationForTypeIdentifier_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadFileRepresentationForTypeIdentifier: P0, _completionHandler: P1): R;
    loadDataRepresentationForTypeIdentifier_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadDataRepresentationForTypeIdentifier: P0, _completionHandler: P1): R;
    registerFileRepresentationForTypeIdentifier_fileOptions_visibility_loadHandler<R = void, P0 = unknown, P1 = number, P2 = number, P3 = CDUnknownBlockType>(_registerFileRepresentationForTypeIdentifier: P0, _fileOptions: P1, _visibility: P2, _loadHandler: P3): R;
    registerDataRepresentationForTypeIdentifier_visibility_loadHandler<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_registerDataRepresentationForTypeIdentifier: P0, _visibility: P1, _loadHandler: P2): R;
    hasRepresentationConformingToTypeIdentifier_fileOptions<R = boolean, P0 = unknown, P1 = number>(_hasRepresentationConformingToTypeIdentifier: P0, _fileOptions: P1): R;
    registeredTypeIdentifiersWithFileOptions<R = unknown, P0 = number>(_registeredTypeIdentifiersWithFileOptions: P0): R;
    _setMetadataValue_forKey<R = void, P0 = unknown, P1 = unknown>(__setMetadataValue: P0, _forKey: P1): R;
    _metadataValueForKey<R = unknown, P0 = unknown>(__metadataValueForKey: P0): R;
    _representationForType<R = unknown, P0 = unknown>(__representationForType: P0): R;
    _setItemRepresentation<R = void, P0 = unknown>(__setItemRepresentation: P0): R;
    _representationConformingToType<R = unknown, P0 = unknown>(__representationConformingToType: P0): R;
    representations<R = unknown>(): R;
    _addRepresentationType_preferredRepresentation_loader<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(__addRepresentationType: P0, _preferredRepresentation: P1, _loader: P2): R;
    _addRepresentationType_v2_preferredRepresentation_loader<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(__addRepresentationType_v2: P0, _preferredRepresentation: P1, _loader: P2): R;
    _addRepresentationType_preferredRepresentation_visibility_loader<R = void, P0 = unknown, P1 = number, P2 = number, P3 = CDUnknownBlockType>(__addRepresentationType: P0, _preferredRepresentation: P1, _visibility: P2, _loader: P3): R;
    _availableTypesWithFilterBlock<R = unknown, P0 = CDUnknownBlockType>(__availableTypesWithFilterBlock: P0): R;
    _hasRepresentationConformingToType<R = boolean, P0 = unknown>(__hasRepresentationConformingToType: P0): R;
    _hasRepresentationOfType<R = boolean, P0 = unknown>(__hasRepresentationOfType: P0): R;
    _availableTypes<R = unknown>(): R;
    dealloc<R = void>(): R;
    _commonInitGenerateUUID<R = void, P0 = boolean>(__commonInitGenerateUUID: P0): R;
    loadPreviewImageWithOptions_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_loadPreviewImageWithOptions: P0, _completionHandler: P1): R;
    dataTransferDelegate<R = NSItemProviderDataTransferDelegate>(): R;
    setDataTransferDelegate<R = void, P0 = NSItemProviderDataTransferDelegate>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    _UUID<R = NSUUID>(): R;
    _preferredRepresentationByType<R = NSMutableDictionary>(): R;
    set_preferredRepresentationByType<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _representations<R = NSArray>(): R;
    _typeOrder<R = NSMutableOrderedSet>(): R;
    set_typeOrder<R = void, P0 = NSMutableOrderedSet>(_v: P0): R;
    _representationByType<R = NSMutableDictionary>(): R;
    set_representationByType<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _loadOperator<R = _NSItemProviderLoading>(): R;
    set_loadOperator<R = void, P0 = _NSItemProviderLoading>(_v: P0): R;
    registeredTypeIdentifiers<R = NSArray>(): R;
    _sanitizedSuggestedName<R = NSString>(): R;
    suggestedName<R = NSString>(): R;
    setSuggestedName<R = void, P0 = NSString>(_v: P0): R;
    previewImageHandler<R = CDUnknownBlockType>(): R;
    setPreviewImageHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    // + NSItemProvider(NSCloudKitSharing,NSItemSourceInfo,NSPrivate):
    _ckContainerID<R = unknown>(): R;
    _ckSourceAppBundleIdentifier<R = unknown>(): R;
    _ckContainerIdentifier<R = unknown>(): R;
    _ckShare<R = unknown>(): R;
    _ckDictionary<R = unknown>(): R;
    registerCloudKitShareWithPreparationHandler<R = void, P0 = CDUnknownBlockType>(_registerCloudKitShareWithPreparationHandler: P0): R;
    registerCloudKitShare_container<R = void, P0 = unknown, P1 = unknown>(_registerCloudKitShare: P0, _container: P1): R;
    _itemSourceInfo<R = unknown>(): R;
    setPreferredPresentationSize<R = void, P0 = CGSize>(_setPreferredPresentationSize: P0): R;
    setContainerFrame<R = void, P0 = CGRect>(_setContainerFrame: P0): R;
    setSourceFrame<R = void, P0 = CGRect>(_setSourceFrame: P0): R;
    preferredPresentationSize<R = CGSize>(): R;
    containerFrame<R = CGRect>(): R;
    sourceFrame<R = CGRect>(): R;
  }
  namespace classes {
    export interface NSItemProvider<T = any> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSItemProvider>(): R;
      new: <R = NSItemProvider>() => R;
      // + NSItemProvider(NSCloudKitSharing,NSItemSourceInfo,NSPrivate):
      
    }
  }
}

declare const NSItemProvider: cocoa.classes.NSItemProvider;
