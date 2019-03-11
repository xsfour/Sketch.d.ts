/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayersPreferencePane<T = any> extends cocoa.MSPreferencePane {}
  namespace classes {
    export interface MSLayersPreferencePane<T = any> extends cocoa.classes.MSPreferencePane {
      alloc<R = MSLayersPreferencePane>(): R;
      new: <R = MSLayersPreferencePane>() => R;
    }
  }
}

declare const MSLayersPreferencePane: cocoa.classes.MSLayersPreferencePane;
