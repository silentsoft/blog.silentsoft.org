---
title: cURL communication error 60 SSL certificate problem 해결 방법
layout: post
permalink: /archives/170
categories: wordpress
comments: true
---
1\. https://curl.haxx.se/ca/cacert.pem 접속

2\. 오른쪽 클릭 -> 다른 이름으로 저장 -> "cacert.pem"

3\. php.ini 파일을 다음과 같이 설정 (절대 경로는 서버 환경에 맞게 수정 필요)

```
extension=php_curl.dll
curl.cainfo = "H:/Web Server/php/cacert.pem"
```

4\. 웹 서버 재시작
