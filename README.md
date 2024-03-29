# subscribe-hodu-front-end-project
## ✍기술스택
**HTML , CSS , JavaScript**

### 🐕개요
> 호두(고양이) 구독 홈페이지 프런트엔드 제작 프로젝트이다.
> 
> **카카오맵 API**와 **Picsum 홈페이지 이미지**를 사용하였으며, JS를 이용한 **무한 스크롤 이미지(스로틀링)** 구현을 중점으로 작성하였다. 

<img src="https://github.com/YoHanKi/subscribe-hodu-front-end-project/assets/139758405/f437bfcb-e62b-401b-af22-f63a3f38d103" width="300">

## 2024-01-16
### HTML 추가사항
- 상단 네비게이터
- 헤더 메인 표지
- 메인 이미지와 설명내용
- 메인 JS 이미지 처리 공간
- 푸터 카카오지도
- 구독박스
- 푸터 링크
- 모달창

### CSS 추가사항
- 상단 네비게이터 스타일 추가
- 헤더 메인 표지 스타일 추가
- 메인 이미지와 설명내용 스타일 추가



*🔨당일 수정 내용*
```
HTML의 Semantic한 태그 사용을 중점으로 먼저 작성하였다. 
이 후 CSS 작성 중 HTML 태그를 수정하였다.
```

## 2024-01-17
### CSS 추가사항
- 메인 JS 이미지 처리 공간 스타일 추가
- kakaomap 관련 스타일 추가
- 푸터 구독박스 스타일 추가
- 푸터 링크 스타일 추가

### JavaScript 추가사항
- 메인 이미지 출력


*🔨당일 수정 내용*
```
전체적인 CSS 스타일을 추가하였다. 
KakaoMap API와 JS를 사용(fetch)하여 중앙에 있는 메인 이미지 출력을 구현하였다.
```

## 2024-01-18
### javaScript 추가사항
- 버튼 클릭 시 이미지 출력 추가
- 스크롤 감지+스로틀링 추가

<img src="https://github.com/YoHanKi/subscribe-hodu-front-end-project/assets/139758405/cd61a162-2b9e-43b2-9310-574774a53a17" width="300">


*🔨당일 수정 내용*
```
메인 이미지 출력에 있어 Show more 버튼 클릭 시 발생하도록 구현하였다.
또한 무한 이미지를 위한 스크롤 감지와 스로틀링으로 민감도를 수정하였다.
```
## 2024-01-22


### HTML 추가사항
- 이미지 로딩 화면을 추가를 위해 로딩 이미지 div 추가
- 입력창에서 엔터 입력 시 모달창 활성화
- 사이드바 구현

### CSS 추가사항
- 이미지 로딩 화면 추가 작성
- 사이드바 구현

### JavaScript 추가사항
- 이미지 로딩화면 추가
- 상단 높이 기준 1000px 아래로 이동해야 top 버튼 활성화 추가
- 사이드바 구현
  
<img src="https://github.com/YoHanKi/subscribe-hodu-front-end-project/assets/139758405/90d39c81-7d98-4382-9df7-ace891f61467" width="300">

🔨*당일 수정 내용*
```
- 유지보수 편의성을 위해 디렉토리를 전체적으로 변경하였다.
- 브랜치를 develop과 feature 브랜치를 생성하였다.
- body에 생성하는 무한스크롤이 하단 구독박스의 접근성을 해친다고 생각되어 좌측의 따로 구현하였다.
```

## 2024-01-23


### HTML 추가사항
- 귀여운 고양이를 추가했습니다.

### CSS 추가사항
- 귀여운 고양이가 손을 핥는 모션을 추가했습니다.


🔨*당일 수정 내용*
```
- 고양이가 손을 핥을 수 있도록 교육시켰다.
```


## 🌈Branch
> 브랜치는 main branch, develop branch, feature branch 총 3개의 브랜치를 사용한다.
> 
> (참조 : 백승진님 깃허브[https://github.com/BaxDailyGit/landing-page] 와 박인수멘토님의 교육을 토대로 작성)


## 🌞Commit Convention
> 커밋 컨벤션은 아래의 내용을 참고하여 작성한다.
> 
> (참조 : 백승진님 깃허브[https://github.com/BaxDailyGit/landing-page] 와 박인수멘토님의 교육을 토대로 작성)

 |Tag Name|Description|
|------|---|
|Feat|새로운 기능 추가|
|Fix|버그 수정|
|Design|CSS 등 사용자 UI 디자인 변경|
|!BREAKING CHANGE|커다란 API 변경의 경우|
|!HOTFIX|급하게 치명적인 버그를 고쳐야하는 경우|
|Style|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|Refactor|프로덕션 코드 리팩토링|
|Comment|필요한 주석 추가 및 변경|
|Docs|문서 수정|
|Test|테스트 코드, 리펙토링 테스트 코드 추가|
|Chore|빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트|
|Rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
|Remove|파일을 삭제하는 작업만 수행한 경우|
