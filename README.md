## 📆 구글 캘린더
React와 Redux를 사용하여 전역 상태관리를 경험하고 마주하는 에러들을 풀어나가며 성장하기 위해 시작된 프로젝트입니다.

### 로컬 실행
```bash
git clone https://github.com/04ian80/google-calendar.git
npm install
npm start
```

### 스택
<div style='align:center;'>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
</div>

### 진행단계
- [x] 프로젝트 세팅
- [x] Nav 바(헤더) UI 구현
- [ ] Nav 바(헤더) 기능 구현
- [ ] 메인 달력 페이지 UI + 기능 구현
- [ ] 이벤트 생성 페이지 UI + 기능 구현
- [ ] 이벤트 상세 페이지 UI + 기능 구현
- [ ] 테스트 코드 작성 및 리팩토링
- [ ] 배포

### 디렉토리
```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜DateFormatComboBox.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜HeaderDate.tsx
 ┃ ┃ ┗ 📜HeaderLogo.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AdjacentArrows.tsx
 ┃ ┃ ┣ 📜ButtonField.tsx
 ┃ ┃ ┣ 📜ComboBox.tsx
 ┃ ┃ ┣ 📜Dropdown.tsx
 ┃ ┃ ┗ 📜TodayButton.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜HomeLayout.tsx
 ┃ ┗ 📂main
 ┃ ┃ ┗ 📜MainTemplate.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useDateFormat.ts
 ┣ 📂lib
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜colors.ts
 ┃ ┗ 📜types.ts
 ┣ 📂pages
 ┃ ┣ 📜EventDetailPage.tsx
 ┃ ┣ 📜EventPostPage.tsx
 ┃ ┗ 📜Main.tsx
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┗ 📜setupTests.ts
```
