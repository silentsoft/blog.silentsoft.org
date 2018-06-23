---
title: JUnit + Spring 테스트 설정
layout: post
permalink: /archives/25
categories: programming
tags: spring
comments: true
---
JUnit으로 Spring을 테스트할 때 xml 설정 파일(context, servlet ...)을 로딩해서 실제로 WAS를 구동했을 때와 동일한 환경을 구성해야 할 필요가 있다.

아래와 같이 AbstractTest 클래스를 만들고, 테스트 클래스에서 상속받기만 하면 된다.

```
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:META-INF/config/spring/application-context.xml", "classpath*:META-INF/config/springmvc/application-servlet.xml"})
public class AbstractTest {

    public AbstractTest() {
        // Perform common initialization here.
    }

}
```
