---
title: Travis CI, Sonarcloud 연동할 때 Not authorized 에러 해결 방법
layout: post
permalink: /archives/196
categories: ci-cd
tags: travis-ci
comments: true
---

~~아니 저한테 왜이러세요 분명 시키는대로 했다구요~~

```yml
addons:
  sonarcloud:
    organization: "..."
    token:
      secure: "...."
```

```
[ERROR] Failed to execute goal org.sonarsource.scanner.maven:sonar-maven-plugin:3.9.1.2184:sonar (default-cli) on project : Not authorized. Please check the property sonar.login or SONAR_TOKEN env variable -> [Help 1]
```

Sonarcloud 홈페이지에서 Travis CI로 연동할 때 아래와 같이 토큰을 암호화하라고 안내한다.

```
$ travis encrypt 1234567890abcdefghijklmnopqrstuvwxyz
```

travis-ci`.org`를 사용할 때에는 문제가 없었으나, 2021년 6월부터 travis-ci`.com`으로 통합된 뒤로 `--pro` 옵션을 사용해야 한다.

`--pro` 옵션을 사용하기 위해서는 먼저 로그인을 해야하는데, 이제 깃허브에서 패스워드로 로그인하는 것을 허용하지 않으므로 토큰을 사용해서 로그인해야 한다.

`https://github.com/settings/tokens`에서 토큰을 생성한 후에 아래와 같이 로그인하면 된다.

```
$ travis login --pro --github-token ghp_xxxxx...
```

만약 로그인에 성공하면 `Successfully logged in as username!` 라는 메시지가 출력되는데, 이제 encrypt 수행 시 `--pro` 옵션을 사용하면 된다.

```
$ travis encrypt --pro 1234567890abcdefghijklmnopqrstuvwxyz
```

근데 이게 기분탓인지(?) 이것마저 안되는 경우가 있는데, 큰 따옴표로 토큰을 감싸주면 되더라. (에이 아니겠지 설마.. 내가 복붙을 잘못했겠지..??)

```
$ travis encrypt --pro "1234567890abcdefghijklmnopqrstuvwxyz"
```

자주 사용하는 스크립트가 아니다보니 로그인을 하지 않고 `--pro` 옵션없이 encrypt를 수행한다던가, 로그인은 했는데 `--pro` 옵션은 빼먹었다던가 하여간 명확한 에러 메세지가 안뜨다보니 한 번 함정에 빠지기 시작하면 시간을 너무 많이 뺐기는 것 같다.