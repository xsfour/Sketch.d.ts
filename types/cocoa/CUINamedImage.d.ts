/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CUINamedImage<T = any> {
    // + CUINamedImage(NSAlignmentRect):
    NS_alignmentRect<R = CGRect>(): R;
  }
  namespace classes {
    export interface CUINamedImage<T = any> {
      // + CUINamedImage(NSAlignmentRect):
      
    }
  }
}

declare const CUINamedImage: cocoa.classes.CUINamedImage;
