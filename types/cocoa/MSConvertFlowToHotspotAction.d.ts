/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertFlowToHotspotAction<T = any> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    convertFlowToHotspot<R = void, P0 = unknown>(_convertFlowToHotspot: P0): R;
  }
  namespace classes {
    export interface MSConvertFlowToHotspotAction<T = any> extends MSFlowBaseAction {
      alloc<R = MSConvertFlowToHotspotAction>(): R;
      new: <R = MSConvertFlowToHotspotAction>() => R;
    }
  }
}

declare const MSConvertFlowToHotspotAction: cocoa.classes.MSConvertFlowToHotspotAction;
