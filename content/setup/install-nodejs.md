---
title: "Install Node.js in CentOS"
metaTitle: ""
metaDescription: ""
---

# 1. Install NVM

wget 이 설치되어 있는지 확인합니다. 
wget 은 아래 명령어로 설치할 수 있습니다.

```bash
sudo yum install wget
```

wget 이 설치되어 있다면, nvm 을 설치합니다

```bash
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install
```

설치 완료후, `.bashrc` 를 로딩합니다
```bash
source ~/.bashrc
```

# 2. Install Node.js

`nvm` 으로 node.js 를 설치할 수 있습니다.

```bash

# lts 버전 설치
nvm isntall --lts

```

