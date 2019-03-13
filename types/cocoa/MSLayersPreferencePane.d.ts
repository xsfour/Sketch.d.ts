/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayersPreferencePane<T = any> extends MSPreferencePane {}
  namespace classes {
    export interface MSLayersPreferencePane<T = any> extends MSPreferencePane {
      alloc<R = MSLayersPreferencePane>(): R;
      new: <R = MSLayersPreferencePane>() => R;
    }
  }
}

declare const MSLayersPreferencePane: cocoa.classes.MSLayersPreferencePane;
