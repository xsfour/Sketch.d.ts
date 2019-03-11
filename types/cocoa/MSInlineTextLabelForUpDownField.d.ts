/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelForUpDownField<T = any> extends cocoa.MSTextLabelForUpDownField {
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineTextLabelForUpDownField<T = any> extends cocoa.classes.MSTextLabelForUpDownField {
      alloc<R = MSInlineTextLabelForUpDownField>(): R;
      new: <R = MSInlineTextLabelForUpDownField>() => R;
      labelWithImage<R = unknown, P0 = unknown>(_labelWithImage: P0): R;
    }
  }
}

declare const MSInlineTextLabelForUpDownField: cocoa.classes.MSInlineTextLabelForUpDownField;
