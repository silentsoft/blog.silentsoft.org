---
title: macOS 업데이트 후 xcrun error 해결 방법
layout: post
permalink: /archives/190
categories: tip
comments: true
---

macOS를 업데이트하고 터미널을 사용하다보면 필연적으로 아래와 같은 에러를 마주하게 된다.

```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

아래의 명령어를 통해 빠르게 해결하고 하던 작업에 집중하자.

```
xcode-select --install
```

~~1년에 한 번 macOS 업데이트 할 때마다 명령어 까먹어서 블로그에 박제를..~~
