/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudShareUploadControllerDelegateProtocol<T = any> extends NSObjectProtocol {
    cloudShareController_didChangeProgress<R = void, P0 = MSCloudShareUploadController, P1 = NSProgress>(_cloudShareController: P0, _didChangeProgress: P1): R;
    cloudShareController_uploadDidFailWithError<R = void, P0 = MSCloudShareUploadController, P1 = NSError>(_cloudShareController: P0, _uploadDidFailWithError: P1): R;
    cloudShareControllerDidCancelUploading<R = void, P0 = MSCloudShareUploadController>(_cloudShareControllerDidCancelUploading: P0): R;
    cloudShareController_didUploadShare<R = void, P0 = MSCloudShareUploadController, P1 = SCKShare>(_cloudShareController: P0, _didUploadShare: P1): R;
  }
  namespace classes {
    export interface MSCloudShareUploadControllerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
