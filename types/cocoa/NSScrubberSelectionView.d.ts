/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionView<T = any> extends NSScrubberArrangedView {}
  namespace classes {
    export interface NSScrubberSelectionView<T = any> extends NSScrubberArrangedView {
      alloc<R = NSScrubberSelectionView>(): R;
      new: <R = NSScrubberSelectionView>() => R;
    }
  }
}

declare const NSScrubberSelectionView: cocoa.classes.NSScrubberSelectionView;
