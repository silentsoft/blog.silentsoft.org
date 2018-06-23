---
title: '[WordPress] Windows에서 Apache + Tomcat 조합으로 설치하는 방법 (6/6)'
layout: post
permalink: /archives/162
categories: wordpress
comments: true
---
먼저 Tomcat 서비스 포트를 81로 변경하자. (굳이 81번이 마음에 안든다면 다른걸로 설정해도 된다. 80번(Apache 포트)만 아니면 된다.)

```
<Server ...>
	<Service name="Catalina">
		...
		<Connector port="81" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" />
		...
	</Service>
</Server>
```

그리고 {apache}/conf/httpd.conf 파일에서 아래와 같이 httpd-vhosts.conf를 사용하도록 주석을 해제하자.

```
# Virtual hosts
Include conf/extra/httpd-vhosts.conf
```

http://silentsoft.kr에 대한 요청은 Apache가 처리하도록 하고, http://silentsoft.org에 대한 요청은 ProxyPass 설정을 통해 Tomcat에게 넘겨주도록 설정해보자.

{apache}/conf/extra/httpd-vhosts.conf 파일에 아래와 같이 Virtual Host를 설정하자.

```
<VirtualHost *:80>
	ServerName silentsoft.kr
	ServerAlias www.silentsoft.kr
	
	ErrorLog "logs/silentsoft.kr-error.log"
	CustomLog "logs/silentsoft.kr-access.log" common
	
	DocumentRoot "H:/Web Server/tomcat/webapps/silentsoft.kr/ROOT"
	<Directory "H:/Web Server/tomcat/webapps/silentsoft.kr/ROOT">
		Options Indexes FollowSymLinks MultiViews
		AllowOverride All
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>

<VirtualHost *:80>
	ServerName silentsoft.org
	ServerAlias www.silentsoft.org
	
	ErrorLog "logs/silentsoft.org-error.log"
	CustomLog "logs/silentsoft.org-access.log" common
	
	ProxyRequests off
	ProxyPreserveHost on
	<Proxy *>
		Order allow,deny
		Allow from all
	</Proxy>
	ProxyPass / http://localhost:81/
	ProxyPassReverse / http://localhost:81/
</VirtualHost>
```

위 설정을 자세히 보면 silentsoft.kr에 대한 요청은 DocumentRoot를 지정하여 Apache가 처리하도록 잡아두고, silentsoft.org에 대한 요청은 DocumentRoot를 지정하지 않고 ProxyPass를 통해 Tomcat 81 포트로 넘겨주는 것을 알 수 있다.

2편에서 작성했던 {apache}/startup.bat 파일을 실행하여 Apache를 기동하자.

이로써 모든 설치와 설정이 끝났다. Tomcat으로 기존 웹 서비스는 그대로 제공하면서 WordPress를 설치하는 방법에 대한 포스팅을 마무리하겠다.
