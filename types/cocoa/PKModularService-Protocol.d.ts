/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PKModularServiceProtocol<T = any> extends cocoa.NSObjectProtocol {
    communicationsFailed<R = void, P0 = cocoa.PKSubsystemServicePersonality>(_communicationsFailed: P0): R;
    endUsing<R = void, P0 = cocoa.PKSubsystemServicePersonality>(_endUsing: P0): R;
    beginUsing_withBundle<R = void, P0 = cocoa.PKSubsystemServicePersonality, P1 = cocoa.NSBundle>(_beginUsing: P0, _withBundle: P1): R;
  }
  namespace classes {
    export interface PKModularServiceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      initForPlugInKit<R = cocoa.PKModularService>(): R;
    }
  }
}

declare const PKModularServiceProtocol: cocoa.classes.PKModularServiceProtocol;
