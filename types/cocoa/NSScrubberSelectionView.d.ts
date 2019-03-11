/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionView<T = any> extends cocoa.NSScrubberArrangedView {}
  namespace classes {
    export interface NSScrubberSelectionView<T = any> extends cocoa.classes.NSScrubberArrangedView {
      alloc<R = NSScrubberSelectionView>(): R;
      new: <R = NSScrubberSelectionView>() => R;
    }
  }
}

declare const NSScrubberSelectionView: cocoa.classes.NSScrubberSelectionView;
