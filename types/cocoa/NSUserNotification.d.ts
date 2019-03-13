/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserNotification<T = any> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    _secureEncodedUserInfo<R = unknown>(): R;
    _setIdentityImage_withIdentifier<R = void, P0 = unknown, P1 = unknown>(__setIdentityImage: P0, _withIdentifier: P1): R;
    _areIdentifiersEqual<R = boolean, P0 = unknown>(__areIdentifiersEqual: P0): R;
    _setActivationType<R = void, P0 = number>(__setActivationType: P0): R;
    _setSnoozedDate<R = void, P0 = number>(__setSnoozedDate: P0): R;
    _setSnoozeInterval<R = void, P0 = number>(__setSnoozeInterval: P0): R;
    _setSnoozed<R = void, P0 = boolean>(__setSnoozed: P0): R;
    _setRemote<R = void, P0 = boolean>(__setRemote: P0): R;
    _setPresented<R = void, P0 = boolean>(__setPresented: P0): R;
    _setActualDeliveryDate<R = void, P0 = unknown>(__setActualDeliveryDate: P0): R;
    _contentImageData<R = NSData>(): R;
    set_contentImageData<R = void, P0 = NSData>(_v: P0): R;
    _identityImageData<R = NSData>(): R;
    set_identityImageData<R = void, P0 = NSData>(_v: P0): R;
    _hasContentImage<R = boolean>(): R;
    contentImage<R = NSImage>(): R;
    setContentImage<R = void, P0 = NSImage>(_v: P0): R;
    _nextFireDate<R = NSDate>(): R;
    _actionButtonIsSnooze<R = boolean>(): R;
    set_actionButtonIsSnooze<R = void, P0 = boolean>(_v: P0): R;
    _allDayEvent<R = boolean>(): R;
    set_allDayEvent<R = void, P0 = boolean>(_v: P0): R;
    _alternateActionButtonTitles<R = NSArray>(): R;
    set_alternateActionButtonTitles<R = void, P0 = NSArray>(_v: P0): R;
    _alternateActionIndex<R = number>(): R;
    _alwaysShowAlternateActionMenu<R = boolean>(): R;
    set_alwaysShowAlternateActionMenu<R = void, P0 = boolean>(_v: P0): R;
    _badgeCount<R = number>(): R;
    set_badgeCount<R = void, P0 = number>(_v: P0): R;
    _clearable<R = boolean>(): R;
    set_clearable<R = void, P0 = boolean>(_v: P0): R;
    _dateString<R = NSString>(): R;
    set_dateString<R = void, P0 = NSString>(_v: P0): R;
    _deliveryExpiration<R = NSDateComponents>(): R;
    set_deliveryExpiration<R = void, P0 = NSDateComponents>(_v: P0): R;
    _dismissAfterDuration<R = boolean>(): R;
    set_dismissAfterDuration<R = void, P0 = boolean>(_v: P0): R;
    _displayStyle<R = number>(): R;
    set_displayStyle<R = void, P0 = number>(_v: P0): R;
    _eventDate<R = NSDate>(): R;
    set_eventDate<R = void, P0 = NSDate>(_v: P0): R;
    _hasAttachment<R = boolean>(): R;
    set_hasAttachment<R = void, P0 = boolean>(_v: P0): R;
    _identityImage<R = NSImage>(): R;
    set_identityImage<R = void, P0 = NSImage>(_v: P0): R;
    _identityImageHasBorder<R = boolean>(): R;
    set_identityImageHasBorder<R = void, P0 = boolean>(_v: P0): R;
    _identityImageStyle<R = number>(): R;
    set_identityImageStyle<R = void, P0 = number>(_v: P0): R;
    _ignoresDoNotDisturb<R = boolean>(): R;
    set_ignoresDoNotDisturb<R = void, P0 = boolean>(_v: P0): R;
    _imageURL<R = NSURL>(): R;
    set_imageURL<R = void, P0 = NSURL>(_v: P0): R;
    _lockscreenOnly<R = boolean>(): R;
    set_lockscreenOnly<R = void, P0 = boolean>(_v: P0): R;
    _persistent<R = boolean>(): R;
    set_persistent<R = void, P0 = boolean>(_v: P0): R;
    _poofsOnCancel<R = boolean>(): R;
    set_poofsOnCancel<R = void, P0 = boolean>(_v: P0): R;
    _proxyIdentifier<R = NSString>(): R;
    set_proxyIdentifier<R = void, P0 = NSString>(_v: P0): R;
    _remote<R = boolean>(): R;
    _showsButtons<R = boolean>(): R;
    set_showsButtons<R = void, P0 = boolean>(_v: P0): R;
    _snoozeInterval<R = number>(): R;
    _snoozed<R = boolean>(): R;
    _snoozedDate<R = number>(): R;
    _storageID<R = unknown>(): R;
    set_storageID<R = void, P0 = unknown>(_v: P0): R;
    _style<R = number>(): R;
    set_style<R = void, P0 = number>(_v: P0): R;
    _substitutesEmojiInResponse<R = boolean>(): R;
    set_substitutesEmojiInResponse<R = void, P0 = boolean>(_v: P0): R;
    actionButtonTitle<R = NSString>(): R;
    setActionButtonTitle<R = void, P0 = NSString>(_v: P0): R;
    activationType<R = number>(): R;
    actualDeliveryDate<R = NSDate>(): R;
    additionalActions<R = NSArray>(): R;
    setAdditionalActions<R = void, P0 = NSArray>(_v: P0): R;
    additionalActivationAction<R = NSUserNotificationAction>(): R;
    deliveryDate<R = NSDate>(): R;
    setDeliveryDate<R = void, P0 = NSDate>(_v: P0): R;
    deliveryRepeatInterval<R = NSDateComponents>(): R;
    setDeliveryRepeatInterval<R = void, P0 = NSDateComponents>(_v: P0): R;
    deliveryTimeZone<R = NSTimeZone>(): R;
    setDeliveryTimeZone<R = void, P0 = NSTimeZone>(_v: P0): R;
    duration<R = NSDateComponents>(): R;
    setDuration<R = void, P0 = NSDateComponents>(_v: P0): R;
    hasActionButton<R = boolean>(): R;
    setHasActionButton<R = void, P0 = boolean>(_v: P0): R;
    hasReplyButton<R = boolean>(): R;
    setHasReplyButton<R = void, P0 = boolean>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    informativeText<R = NSString>(): R;
    setInformativeText<R = void, P0 = NSString>(_v: P0): R;
    otherButtonTitle<R = NSString>(): R;
    setOtherButtonTitle<R = void, P0 = NSString>(_v: P0): R;
    peopleIdentifiers<R = NSArray>(): R;
    setPeopleIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    presented<R = boolean>(): R;
    remote<R = boolean>(): R;
    response<R = NSAttributedString>(): R;
    responsePlaceholder<R = NSString>(): R;
    setResponsePlaceholder<R = void, P0 = NSString>(_v: P0): R;
    soundName<R = NSString>(): R;
    setSoundName<R = void, P0 = NSString>(_v: P0): R;
    subtitle<R = NSString>(): R;
    setSubtitle<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserNotification<T = any> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSUserNotification>(): R;
      new: <R = NSUserNotification>() => R;
      _closestDatesForStartDate_earliestDate_timeZone_deliveryRepeatInterval_returnDateBefore_returnDateAfter<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__closestDatesForStartDate: P0, _earliestDate: P1, _timeZone: P2, _deliveryRepeatInterval: P3, _returnDateBefore: P4, _returnDateAfter: P5): R;
      supportsSecureCoding<R = boolean>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      alloc<R = unknown>(): R;
    }
  }
}

declare const NSUserNotification: cocoa.classes.NSUserNotification;
