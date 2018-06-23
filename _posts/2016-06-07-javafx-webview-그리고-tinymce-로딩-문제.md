---
title: '[JavaFx] WebView 그리고 TinyMCE 로딩 문제'
layout: post
permalink: /archives/16
categories: programming
tags: javafx
comments: true
---
JavaFx의 WebView를 통해 TinyMCE가 포함된 html 파일을 로딩할 때 jar파일에 html파일을 포함시키는 경우 배포(운영) 환경에서 로딩이 안된다.

이런 경우, html 파일과 TinyMCE js 모두 jar 파일 밖으로 빼면 잘 된다.

```
ex)
+---lib
        App.jar
+---ext
    \---html
            Editor.html
    \---js
        \---tinymce
                ...
```
