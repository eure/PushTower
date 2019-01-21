#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "PTClient.h"

FOUNDATION_EXPORT double PushTowerClientVersionNumber;
FOUNDATION_EXPORT const unsigned char PushTowerClientVersionString[];

