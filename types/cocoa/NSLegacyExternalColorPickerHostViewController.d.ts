/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyExternalColorPickerHostViewController<T = any> extends cocoa.NSViewController, cocoa.NSLegacyExternalColorPickerHostViewControllerProtocol, cocoa.NSRemoteViewDelegateProtocol, cocoa.NSColorPickingInternalProtocol {
    preparePickerWithSandboxExtension_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_preparePickerWithSandboxExtension: P0, _completionHandler: P1): R;
    remoteView<R = unknown>(): R;
    description<R = unknown>(): R;
    initWithPickerMask_colorPanel_bundleURL<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithPickerMask: P0, _colorPanel: P1, _bundleURL: P2): R;
    _currentColor<R = cocoa.NSColor>(): R;
    set_currentColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    pickerIdentifier<R = cocoa.NSString>(): R;
    isActivePicker<R = boolean>(): R;
    setIsActivePicker<R = void, P0 = boolean>(_v: P0): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace classes {
    export interface NSLegacyExternalColorPickerHostViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSLegacyExternalColorPickerHostViewControllerProtocol, cocoa.classes.NSRemoteViewDelegateProtocol, cocoa.classes.NSColorPickingInternalProtocol {
      alloc<R = NSLegacyExternalColorPickerHostViewController>(): R;
      new: <R = NSLegacyExternalColorPickerHostViewController>() => R;
      warmup<R = void>(): R;
    }
  }
}

declare const NSLegacyExternalColorPickerHostViewController: cocoa.classes.NSLegacyExternalColorPickerHostViewController;
