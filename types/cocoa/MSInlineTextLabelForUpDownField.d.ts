/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelForUpDownField<T = any> extends MSTextLabelForUpDownField {
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineTextLabelForUpDownField<T = any> extends MSTextLabelForUpDownField {
      alloc<R = MSInlineTextLabelForUpDownField>(): R;
      new: <R = MSInlineTextLabelForUpDownField>() => R;
      labelWithImage<R = unknown, P0 = unknown>(_labelWithImage: P0): R;
    }
  }
}

declare const MSInlineTextLabelForUpDownField: cocoa.classes.MSInlineTextLabelForUpDownField;
