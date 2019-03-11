/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowMenuBuilderTargetProtocol<T = any> {
    flowTargetAction<R = void, P0 = unknown>(_flowTargetAction: P0): R;
    removeFlowAction<R = void, P0 = unknown>(_removeFlowAction: P0): R;
    flowBackAction<R = void, P0 = unknown>(_flowBackAction: P0): R;
  }
  namespace classes {
    export interface MSFlowMenuBuilderTargetProtocol<T = any> {  }
  }
}

declare const MSFlowMenuBuilderTargetProtocol: cocoa.classes.MSFlowMenuBuilderTargetProtocol;
