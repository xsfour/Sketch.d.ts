/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSound<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol, cocoa.NSPasteboardReadingProtocol, cocoa.NSPasteboardWritingProtocol {
    cxx_destruct<R = void>(): R;
    _systemSoundIDCreateIfNecessary<R = number, P0 = boolean>(__systemSoundIDCreateIfNecessary: P0): R;
    writeToPasteboard<R = void, P0 = unknown>(_writeToPasteboard: P0): R;
    initWithPasteboard<R = unknown, P0 = unknown>(_initWithPasteboard: P0): R;
    _qtMovieDidEnd<R = void, P0 = unknown>(__qtMovieDidEnd: P0): R;
    _updateSoundShouldLoopByStoredLoopFlag<R = void>(): R;
    _updateVolumeByStoredVolume<R = void>(): R;
    stop<R = boolean>(): R;
    play<R = boolean>(): R;
    resume<R = boolean>(): R;
    pause<R = boolean>(): R;
    channelMapping<R = unknown>(): R;
    setChannelMapping<R = void, P0 = unknown>(_setChannelMapping: P0): R;
    _setChannelMapping_error<R = boolean, P0 = unknown, P1 = unknown>(__setChannelMapping: P0, _error: P1): R;
    _setAudioDeviceUID_channels_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__setAudioDeviceUID: P0, _channels: P1, _error: P2): R;
    _setPlayingAndRetainIfUnset<R = void>(): R;
    _unsetPlayingReturningIfWasSet<R = boolean>(): R;
    _registersName<R = boolean>(): R;
    _setRegistersName<R = void, P0 = boolean>(__setRegistersName: P0): R;
    setName<R = boolean, P0 = unknown>(_setName: P0): R;
    url<R = unknown>(): R;
    _url<R = unknown>(): R;
    _isValidDecodedChannelMap_error<R = boolean, P0 = unknown, P1 = unknown>(__isValidDecodedChannelMap: P0, _error: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithContentsOfURL_byReference<R = unknown, P0 = unknown, P1 = boolean>(_initWithContentsOfURL: P0, _byReference: P1): R;
    initWithContentsOfFile_byReference<R = unknown, P0 = unknown, P1 = boolean>(_initWithContentsOfFile: P0, _byReference: P1): R;
    _allocateExtraFields<R = boolean>(): R;
    dealloc<R = void>(): R;
    _postInitialization<R = void>(): R;
    currentTime<R = number>(): R;
    setCurrentTime<R = void, P0 = number>(_v: P0): R;
    duration<R = number>(): R;
    loops<R = boolean>(): R;
    setLoops<R = void, P0 = boolean>(_v: P0): R;
    volume<R = number>(): R;
    setVolume<R = void, P0 = number>(_v: P0): R;
    playing<R = boolean>(): R;
    playbackDeviceIdentifier<R = cocoa.NSString>(): R;
    setPlaybackDeviceIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    delegate<R = cocoa.NSSoundDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSSoundDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSound<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSPasteboardReadingProtocol, cocoa.classes.NSPasteboardWritingProtocol {
      alloc<R = NSSound>(): R;
      new: <R = NSSound>() => R;
      _alertType<R = number>(): R;
      _setAlertType<R = void, P0 = number>(__setAlertType: P0): R;
      _areUISoundEffectsEnabled<R = boolean>(): R;
      playSound_flags_completionHandler<R = boolean, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_playSound: P0, _flags: P1, _completionHandler: P2): R;
      canInitWithPasteboard<R = boolean, P0 = unknown>(_canInitWithPasteboard: P0): R;
      _forceSoundEngine<R = void, P0 = number>(__forceSoundEngine: P0): R;
      soundNamed<R = unknown, P0 = unknown>(_soundNamed: P0): R;
      _searchForSoundNamed<R = unknown, P0 = unknown>(__searchForSoundNamed: P0): R;
      soundUnfilteredPasteboardTypes<R = unknown>(): R;
      soundUnfilteredFileTypes<R = unknown>(): R;
      soundUnfilteredTypes<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSSound: cocoa.classes.NSSound;
