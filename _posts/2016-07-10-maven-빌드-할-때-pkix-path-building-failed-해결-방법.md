---
title: Maven 빌드 할 때 PKIX path building failed 해결 방법
layout: post
permalink: /archives/21
categories: build
tags: maven
comments: true
---
필자가 이클립스 Luna에서 Neon으로 넘어오면서 갑자기 [빌드가 안된다거나](https://blog.silentsoft.org/archives/19), 이번 포스팅의 주제인 PKIX 에러가 난다거나 하는 등의 난감한 상황들을 겪었다. 그럴 때마다, 또 앞으로 벌어지는 난감한 상황들에 대해 포스팅을 쓸 테지만, 누군가에게 꼭 도움이 되었으면 좋겠다.

Maven 빌드 할 때 아래와 같이 PKIX 에러가 나는 경우가 있다.

```
from/to central (https://repo.maven.apache.org/maven2): sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

사용하는 디펜던시가 https 레파지토리에 있다거나, 빌드 할 때 사용되는 Maven 플러그인을 다운로드할 때 https로 요청하는 경우, 정상적으로 연결이 되지 않으면 발생하는 에러이다.

구글링해보면 돌아다니는 InstallCert.java를 다운로드해서 컴파일하고 실행하는 등의 인증서 추가를 통한 해결 방법이 나오는데, SSL 통신이 아닌 Maven 빌드 할 때 발생하는 PKIX 에러는 아래와 같은 방법으로 근본적인 문제를 해결할 수 있다.

해결 방법은 매우 간단한데, pom.xml에서 https 프로토콜을 http로 바꿔주기만 하면 해결된다.

이클립스에서 pom.xml 파일을 열고, Effective POM 탭을 열어보면 아래와 같은 설정 정보가 보인다.

```
...
  <repositories>
    <repository>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
      <id>central</id>
      <name>Central Repository</name>
      <url>https://repo.maven.apache.org/maven2</url>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <releases>
        <updatePolicy>never</updatePolicy>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
      <id>central</id>
      <name>Central Repository</name>
      <url>https://repo.maven.apache.org/maven2</url>
    </pluginRepository>
  </pluginRepositories>
...
```

이것을 그대로 복사하여 pom.xml 탭에서 https가 아닌 http로 재정의해주면 된다.

```
<project
    xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

...
 
  <repositories>
    <repository>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
      <id>central</id>
      <name>Central Repository</name>
      <url>http://repo.maven.apache.org/maven2</url>
    </repository>
  </repositories>
  <pluginRepositories>
    <pluginRepository>
      <releases>
        <updatePolicy>never</updatePolicy>
      </releases>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
      <id>central</id>
      <name>Central Repository</name>
      <url>http://repo.maven.apache.org/maven2</url>
    </pluginRepository>
  </pluginRepositories> 

  <properties>
    ...
  </properties>

...
```
