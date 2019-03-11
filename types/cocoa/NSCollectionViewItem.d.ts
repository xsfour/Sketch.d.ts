/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewItem<T = any> extends cocoa.NSViewController, cocoa.NSCopyingProtocol, cocoa.NSCollectionViewElementProtocol {
    cxx_destruct<R = void>(): R;
    representedObject<R = unknown>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    _draggingItemView<R = unknown>(): R;
    _draggingImageForView<R = unknown, P0 = unknown>(__draggingImageForView: P0): R;
    _setDragging<R = void, P0 = boolean>(__setDragging: P0): R;
    _dragging<R = boolean>(): R;
    _hasOpaquePartsInRect<R = boolean, P0 = cocoa.CGRect>(__hasOpaquePartsInRect: P0): R;
    _titleViews<R = unknown>(): R;
    _isLoaded<R = boolean>(): R;
    _shouldLoadFromNib<R = boolean>(): R;
    _setSelectedWithoutNotification<R = void, P0 = boolean>(__setSelectedWithoutNotification: P0): R;
    _needsToCopyConnections<R = boolean>(): R;
    _declaredKeys<R = unknown>(): R;
    _setSelected_animated<R = void, P0 = boolean, P1 = boolean>(__setSelected: P0, _animated: P1): R;
    isHighlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_setHighlighted: P0): R;
    _setHighlighted_animated<R = void, P0 = boolean, P1 = boolean>(__setHighlighted: P0, _animated: P1): R;
    _setReuseIdentifier<R = void, P0 = unknown>(__setReuseIdentifier: P0): R;
    reuseIdentifier<R = unknown>(): R;
    _isInCollapsedSectionEndZone<R = boolean>(): R;
    _isHiddenForReuse<R = boolean>(): R;
    _setHiddenForReuse<R = void, P0 = boolean>(__setHiddenForReuse: P0): R;
    _markAsDequeued<R = void>(): R;
    _wasDequeued<R = boolean>(): R;
    _clearUpdateAnimation<R = void>(): R;
    _addUpdateAnimation<R = void>(): R;
    _isInUpdateAnimation<R = boolean>(): R;
    _invalidatePreferredAttributes<R = void>(): R;
    _arePreferredAttributesValid<R = boolean>(): R;
    _preferredLayoutAttributesFittingAttributes<R = unknown, P0 = unknown>(__preferredLayoutAttributesFittingAttributes: P0): R;
    _setLayoutAttributes<R = void, P0 = unknown>(__setLayoutAttributes: P0): R;
    _setBaseLayoutAttributes<R = void, P0 = unknown>(__setBaseLayoutAttributes: P0): R;
    _layoutAttributes<R = unknown>(): R;
    _copyConnectionsToItem<R = void, P0 = unknown>(__copyConnectionsToItem: P0): R;
    _copyConnectionsOfObject_prototypeItem_toObject_item<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__copyConnectionsOfObject: P0, _prototypeItem: P1, _toObject: P2, _item: P3): R;
    _accessibilityIndexPath<R = unknown>(): R;
    _setAccessibilityIndexPathForTransientElement<R = void, P0 = unknown>(__setAccessibilityIndexPathForTransientElement: P0): R;
    _accessibilityIndexPathForTransientElement<R = unknown>(): R;
    _setAccessibilityTransientElement<R = void, P0 = boolean>(__setAccessibilityTransientElement: P0): R;
    _isAccessibilityTransientElement<R = boolean>(): R;
    accessibilityHitTest<R = unknown, P0 = cocoa.CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityIdentifierAttribute<R = unknown>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    accessibilityIndexAttribute<R = unknown>(): R;
    accessibilityContentSiblingBelowAttribute<R = unknown>(): R;
    accessibilityContentSiblingAboveAttribute<R = unknown>(): R;
    _contentSiblingWithSelector<R = unknown, P0 = string>(__contentSiblingWithSelector: P0): R;
    accessibilityNextContentSiblingAttribute<R = unknown>(): R;
    accessibilityPreviousContentSiblingAttribute<R = unknown>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    isHiddenOrHasHiddenAncestor<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    _section<R = unknown>(): R;
    collectionView<R = cocoa.NSCollectionView>(): R;
    setCollectionView<R = void, P0 = cocoa.NSCollectionView>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    draggingImageComponents<R = cocoa.NSArray>(): R;
    textField<R = cocoa.NSTextField>(): R;
    setTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    imageView<R = cocoa.NSImageView>(): R;
    setImageView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    highlightState<R = number>(): R;
    setHighlightState<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCollectionViewItem<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSCollectionViewItem>(): R;
      new: <R = NSCollectionViewItem>() => R;
      _collectionViewItemForView<R = unknown, P0 = unknown>(__collectionViewItemForView: P0): R;
    }
  }
}

declare const NSCollectionViewItem: cocoa.classes.NSCollectionViewItem;
