/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PKModularServiceProtocol<T = any> extends NSObjectProtocol {
    communicationsFailed<R = void, P0 = PKSubsystemServicePersonality>(_communicationsFailed: P0): R;
    endUsing<R = void, P0 = PKSubsystemServicePersonality>(_endUsing: P0): R;
    beginUsing_withBundle<R = void, P0 = PKSubsystemServicePersonality, P1 = NSBundle>(_beginUsing: P0, _withBundle: P1): R;
  }
  namespace classes {
    export interface PKModularServiceProtocol<T = any> extends NSObjectProtocol {
      initForPlugInKit<R = PKModularService>(): R;
    }
  }
}
