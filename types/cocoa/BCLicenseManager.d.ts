/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseManager<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    apiURLForMethod_queryItems<R = unknown, P0 = unknown, P1 = unknown>(_apiURLForMethod: P0, _queryItems: P1): R;
    apiURL<R = unknown>(): R;
    fetchLicenseMetadata<R = void, P0 = cocoa.CDUnknownBlockType>(_fetchLicenseMetadata: P0): R;
    metadataAPIURL<R = unknown>(): R;
    websiteAvailableVersionsURL<R = unknown>(): R;
    websiteRenewalURLForLicenseKey<R = unknown, P0 = unknown>(_websiteRenewalURLForLicenseKey: P0): R;
    websiteRenewalURL<R = unknown>(): R;
    currentVersion<R = unknown>(): R;
    processURL_handler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_processURL: P0, _handler: P1): R;
    performUnregisterCall<R = void, P0 = unknown>(_performUnregisterCall: P0): R;
    unregister<R = void>(): R;
    unregisterWithPrompt<R = void>(): R;
    licenseStateChanged<R = void>(): R;
    completeUpdateWithHandler_status_info_error<R = void, P0 = cocoa.CDUnknownBlockType, P1 = number, P2 = unknown, P3 = unknown>(_completeUpdateWithHandler: P0, _status: P1, _info: P2, _error: P3): R;
    checkForDeploymentKeyWithPath_removeFile_completionHandler<R = void, P0 = unknown, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_checkForDeploymentKeyWithPath: P0, _removeFile: P1, _completionHandler: P2): R;
    requestTrialLicenseWithHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_requestTrialLicenseWithHandler: P0): R;
    fallbackToTrial_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_fallbackToTrial: P0, _completionHandler: P1): R;
    processLicenseRefreshResult_error_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_processLicenseRefreshResult: P0, _error: P1, _completionHandler: P2): R;
    tryToRefreshLicense_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_tryToRefreshLicense: P0, _completionHandler: P1): R;
    processDataOfRegistration_handler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_processDataOfRegistration: P0, _handler: P1): R;
    registerWithLicenseKey_handler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_registerWithLicenseKey: P0, _handler: P1): R;
    numberOfDaysLeftInTrialMode<R = number>(): R;
    canRenewLicense<R = boolean>(): R;
    canInstallUpdates<R = boolean>(): R;
    updateExpirationDate<R = unknown>(): R;
    registeredEmailAddress<R = unknown>(): R;
    currentLicenseType<R = number>(): R;
    licenseVariantIsSupported<R = boolean, P0 = unknown>(_licenseVariantIsSupported: P0): R;
    licenseVersionIsSupported<R = boolean, P0 = unknown>(_licenseVersionIsSupported: P0): R;
    validateLicenseWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_validateLicenseWithCompletionHandler: P0): R;
    refreshLicenseIfNeededWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_refreshLicenseIfNeededWithCompletionHandler: P0): R;
    refreshLicenseWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_refreshLicenseWithCompletionHandler: P0): R;
    updateLicenseWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_updateLicenseWithCompletionHandler: P0): R;
    initWithApplicationID_publicCertificate_licenseURL_applicationBuildDate_applicationVariant<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithApplicationID: P0, _publicCertificate: P1, _licenseURL: P2, _applicationBuildDate: P3, _applicationVariant: P4): R;
    applicationVariant<R = cocoa.NSString>(): R;
    setApplicationVariant<R = void, P0 = cocoa.NSString>(_v: P0): R;
    applicationBuildDate<R = cocoa.NSDate>(): R;
    setApplicationBuildDate<R = void, P0 = cocoa.NSDate>(_v: P0): R;
    completedLoadingLicense<R = boolean>(): R;
    setCompletedLoadingLicense<R = void, P0 = boolean>(_v: P0): R;
    urlSession<R = cocoa.NSURLSession>(): R;
    setUrlSession<R = void, P0 = cocoa.NSURLSession>(_v: P0): R;
    licenseURL<R = cocoa.NSURL>(): R;
    setLicenseURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    publicCertificate<R = cocoa.NSString>(): R;
    setPublicCertificate<R = void, P0 = cocoa.NSString>(_v: P0): R;
    applicationID<R = cocoa.NSString>(): R;
    setApplicationID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    license<R = cocoa.BCLicense>(): R;
    setLicense<R = void, P0 = cocoa.BCLicense>(_v: P0): R;
    canUseCloud<R = boolean>(): R;
  }
  namespace classes {
    export interface BCLicenseManager<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCLicenseManager>(): R;
      new: <R = BCLicenseManager>() => R;
    }
  }
}

declare const BCLicenseManager: cocoa.classes.BCLicenseManager;
