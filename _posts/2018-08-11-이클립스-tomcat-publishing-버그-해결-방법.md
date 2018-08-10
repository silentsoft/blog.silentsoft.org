---
title: '[이클립스] Tomcat publishing 버그 해결 방법'
layout: post
permalink: /archives/188
categories: tip
comments: true
---
가끔 이클립스에서 Tomcat publishing을 해도 실제 Tomcat webapps 폴더에 publishing 되지 않는 버그가 있다.

예전에는 서버 탭에서 해당 서버를 우클릭하여 `Clean Tomcat Work Directory`를 하거나, 서버를 펼쳐서 문제의 모듈을 우클릭해서 `Clean Module Work Directory`를 하면 해결됐었던 것 같은데, 무슨 영문인지 이 메뉴들을 눌러도 이클립스가 아무런 일을 수행하지 않았다.

Tomcat 문제인가 싶어서 다시 깔아도 보고, 서버 설정에 `Modules auto reload by default` 설정도 바꿔봤지만 결과는 똑같았다.

그래서 혹시나, 프로젝트 탐색기에서 프로젝트를 새로고침했더니 무슨 일 있었냐는 듯 publishing이 매우 잘 된다.

~~납득할 만한 이유와 조치라면 기억에라도 남아서 다음에 똑같은 문제가 발생했을 때 헤매지라도 않는데, 1년에 3번정도 이런 일이 있을 때 마다 3시간 동안 삽질하는데에 환멸을 느껴서 이번 기회에 블로그에 남기는걸로...~~ 