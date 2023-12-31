interface IdescriptionValue {
  [key: string]: string | string[];
}
interface IdetailData {
  img: string[];
  description: IdescriptionValue;
}
interface IviewProjectData {
  [key: string]: IdetailData;
}
const viewProjectData: IviewProjectData = {
  twitter: {
    img: [],
    description: {
      진행기간: "2023.04.03 ~ 2023.05.12",
      구성인원: "1명",
      역할: "Frontend 개발자",
      "Github Repository": "https://github.com/hasuhwan/next-nodebird",
      "프로젝트 이유":
        "이전에 진행했던, 팀 프로젝트에서의 아쉬운 점과 모르고 넘어갔던 내용을 채우기 위한 프로젝트 입니다.",
      "사용한 기술스택": [
        "Frontend: JavaScript, Next.js, React.js, styled Components, Redux, Ant Design",
        "Backend: Node.js, Express.js, Sequelize, Passport",
        "Tools: Github,  Visual Studio Code",
      ],
      "프로젝트를 통해 배운 점": [
        "이전 팀 프로젝트에서 이유없는 Next.js 프레임워크의 사용 대신 CSR과 SSR의 차이 숙지를 바탕으로 필요시 SSR을 적용 시켰습니다. 예시로, 새로고침 시 로그인 상태인지 체크했을 때 기존 CSR의 경우 화면 렌더링 후 요청을 통했기 때문에 일시적이지만 사용자가 느낄 수 있을 정도의 비로그인 상태의 화면이 렌더링 되어있었습니다. 이를 개선하기 위해서 브라우저에서 처음 요청이 프론트엔드 서버에 왔을 때 프론트엔드 서버에서 백엔드 서버에 데이터를 요청하여 데이터까지 구성시킨 상태로 브라우저에 제공하여 로그인되어있는 상태의 화면을 바로 렌더링하였습니다.",
        "기존 팀프로젝트에서 백엔드 개발자들과 원활하지 않은 소통이 있었습니다. 그 이유는 동료 개발자의 개발 내용에 대한 무지가 가장 컸다고 생각했습니다. 그래서 node.js 환경에서 express 프레임워크를 이용하여 통신을 하였고, DB에 대해서 무지하지만,  sequelize를 이용하여 테이블을 구축하였습니다. 이러한 작업을 통해 백엔드 개발자와 이야기 할 때 프론트엔드에서 필요로하는것이 무엇인지, 백엔드에서 필요로하는것이 무엇인지, 얕게 나마 알게되었습니다. 그래서 백엔드에서 통신 준비가 되어있지 않아도, 종속적이게 기다리는 것이 아니라 들어오는 데이터 형식과 프로퍼티에 맞게 더미데이터를 만드는 작업을 경험해봤습니다.",
        "리덕스를 사용하여 상태관리를 함으로써 컴포넌트 기반의 props drilling 문제를 해결하였습니다.",
        "처음부터 리덕스 툴킷을 사용하지 않고, 리듀서와 액션을 만들어보고, immer를 적용하여 불변성 유지의 어려움에서 벗어나 보고, 마지막으로 리듀서 툴킷을 사용하여 이점을 알수 있었습니다. 또한 이번에는 리덕스 성크를 이용하지 않고 리덕스 사가를 이용하여 두 미들웨어의 차이를 알수 있었습니다.",
      ],
    },
  },
  challenge: {
    img: [
      "challenge/challengeHomePage.gif",
      "challenge/challengeHabit.gif",
      "challenge/challengePostHabit.gif",
      "challenge/challengePostAuth.gif",
      "challenge/challengeSearchHabit.gif",
      "challenge/challengeCategory.gif",
      "challenge/challengeReview.gif",
      "challenge/challengeMypage.gif",
    ],
    description: {
      진행기간: "2023.01.03 ~ 2023.02.02",
      구성인원: "7명",
      역할: "Frontend 개발자",
      "Github Repository": "https://github.com/codestates-seb/66Challenge",
      "Team Notion":
        "https://codestates.notion.site/5aaf9053ee9c41bfb866e9ac4f4763ea",
      "프로젝트 이유":
        "어떠한 행동을 66일 동안 꾸준히 반복하게 된다면, 그것은 습관이 된다는 이야기를 바탕으로 좋은 습관 만들기 챌린지 애플리케이션을 개발하고자 시작했습니다.",
      "프로젝트 내용":
        "사용자 요구사항 정의서를 바탕으로 사용자가 불편함 없이 애플리케이션을 사용할 수 있도록 습관 게시글 CRUD 구현 및 각 사용자 별 상황 및 상태에 따른 상호작용 가능여부 구현을 주축으로 비슷한 주제의 기존 제품을 참고하여 개발했습니다.",
      "사용한 기술스택": [
        "Frontend: TypeScript, Next.js, PWA, Firebase, styled Components, Tailwind CSS, Prettier, Redux, Chart.js, Amazon AWS, Jenkins, PM2, NGINX",
        "Backend: Spring, Spring Security, Spring Boot, Tomcat, Github Actions, NGINX, Amazon AWS, MySQL",
        "Tools: Notion, Github, IntelliJ IDEA, Visual Studio Code",
      ],
      "본인이 기여한 점": [
        "회원가입 및 로그인 text 유효성 검사를 통해 서버 통신 전에 사용자가 잘못된 기입을 했다는 것을 알려줄 수 있도록 했습니다.",
        "사용자의 접근성을 높이기 위하여 PWA를 적용시켰습니다.",
        "신규 사용자의 유입 및 사용자의 재접근의 정도를 높이기 위해 push 알림 구현 및 카카오톡 공유하기를 적용했습니다.",
        "Intersection Observer API를 이용하여 게시글을 나누어 필요 시 더 호출하는 방법으로 무한 스크롤을 구현 했습니다.",
        "검색엔진 최적화를 위하여 next/head의 Head 컴포넌트를 통해 홈, 게시글에 따른 link, title, meta 태그를 등록했습니다.",
        "Redux와 Rdeux-toolkit을 사용하여 여러 컴포넌트에서 공통적으로 사용하는 상태 값을 전역 상태로 관리할 수 있도록 하였고, 새로고침 시 매번 다시 불러올 필요가 없는 상태에 관하여 휘발되지 않도록 Redux-Persist를 사용하여 불필요한 서버 통신을 줄였습니다. 비동기 함수의 결과에 따른 상태의 변경이 필요 시, Redux-thunk를 사용하여 불필요한 호출을 줄였습니다.",
      ],
      "어려웠던 점 및 개선 노력": [
        "회원가입 및 로그인 컴포넌트 구현 시  react-hook-form 라이브러리의 watch 메서드를 사용할 경우 사용자의 입력 값을 통해 매번 유효성을 확인할 수 있었지만 매번 유효성 검사를 통한 렌더링 횟수는 불필요하다고 생각했고, 이메일 및 닉네임 중복여부를 확인하는 것 또한 버튼을 통하여 중복여부를 체크하는 것은 사용자의 편의에 좋지 않다고 생각했습니다. 문제를 개선하고자 다른 애플리케이션의 흐름을 참고하여 focus 되어있던 컴포넌트에서 focus가 벗어 났을 때 유효성 검사를 하는 방식을 통해 반복을 줄였습니다. 또한 이메일 및 닉네임 중복확인 버튼 또한 같은 방법으로 focus가 벗어났을 때 중복 여부를 확인하도록 하고 문제가 있을 때만 사용자에게 알려주는 방식으로 개선하였습니다.",
        "여러 게시물을 수평으로 나열하여 가로 스크롤이 적용되어 있는 컴포넌트가 모바일에서는 화면을 드래그 함으로써 이동되었지만, PC에서는 화면을 드래그했을 때 이동이 되지 않는 점을 파악하지 못했었습니다. 문제를 해결하기 위해 캐러셀과 드래그 방식을 지원해 주는 라이브러리 사용을 고려했지만, 게시물이 많은 경우 계속된 드래그에서 불편함을 느껴 마우스 휠 이벤트를 통해 횡 스크롤의 이동을 생각했고 구현했습니다. 그러나 상위 컴포넌트에 세로 스크롤이 있고 하위 컴포넌트에 가로 스크롤이 있을 때, 하위 컴포넌트에서의 마우스 휠 이벤트는 발생은 상위 페이지 컴포넌트에서 또한 발생시켜 세로와 가로가 같이 움직이게 되는 문제가 발생했습니다. 문제를 해결하기 위해 가로 스크롤 컴포넌트에서휠 이벤트가 발생했을 때,  이동한 거리를 세로에 적용하여 시각적으로 변화가 없도록 하려고 하였지만, 이는 시각적으로 오히려 에러가 발생한 모습으로 나타났습니다. 결과적으로 선택한 방법은 하위 컴포넌트에서 휠 이벤트 발생 시 상위 컴포넌트의 overflow 속성을 hidden으로 설정함으로써 세로 스크롤은 존재하지 않게 되어 가로 스크롤만의 이동을 발생시켰고, 하위 컴포넌트를 벗어나 휠 이벤트를 발생시킬 경우 overflow 속성을 초기화시켜 시각적으로 가로 스크롤과 세로 스크롤을 독립적으로 움직이는 모습을 구현했습니다.",
        "github의 프로젝트 repository를 public으로 바꿈으로써 비공개로 유지해야 하는 환경 변수들이 github에 올라가지 않도록 해야 했고, 이는 애플리케이션의 자동화 배포 시 repository에 연결되어 있음이 치명적으로 나타났습니다. 이를 해결하기 위해 ec2 서버에 따로 환경 변수 파일을 넣어놓고 빌드 시 repository의 파일들과 ec2의 환경 변수 파일을 합쳐서 build 하도록 해서 해결했습니다.",
        "사용자의 재접근성을 위해 push 알림을 구현하는 과정에서 firebase의 messaging 기능을 이용하였습니다. next.js의 자체적 api를 통해 메시지를 전달하는 것은 성공하였으나, 주기적으로 push 알림을 보내는 것은 불가하였고, 백엔드 개발자와의 협업으로 scheduling에 성공했습니다. 처음 목표는 사용자가 애플리케이션을 사용하고 있는 중이라면, push 알림을 보여주지 않고, background 상태일 때만 보여주려 했으나, 알맞게 적용되지 않았고, 그 규칙 또한 불규칙하여, 대안으로 background, foreground 구분하지 않고 message를 캐치하여 보여주는 방법으로 구현했습니다.",
      ],
    },
  },
  stackoverflow: {
    img: [],
    description: {
      진행기간: "2022.12.15 ~ 2023.01.03",
      구성인원: "6명",
      역할: "Frontend 개발자",
      "Github Repository": "https://github.com/codestates-seb/seb41_pre_018",
      "프로젝트 이유":
        "게시글 CRUD를 기반으로 복잡하지 않으며, 세계적으로 인기있는 stack overflow를 백엔드 개발자와 협업을 함으로써 협업 유의사항 및 프로세스를 습득하기 위한 프로젝트입니다.",
      "프로젝트 내용":
        "stack overflow를 모방하며 핵심 기능들 중, 회원가입, 로그인, 게시글 CRUD, 답변 CRUD 및 투표 기능을 구현합니다.",
      "사용한 기술스택": [
        "Frontend: HTML, CSS, Styled-Component, React, Redux",
        "Backend: Java, Java Spring, Spring Security, Spring Boot, Spring Data JPA, MySQL",
        "Tools: Notion, Github, IntelliJ IDEA, Visual Studio Code",
      ],
      "본인이 기여한 점": [
        "회원가입 및 로그인 text 유효성 검사를 통해 서버 통신 전에 사용자가 잘못된 기입을 했다는 것을 알려줄 수 있도록 했습니다.",
        "전체 게시글 또는 검색한 게시글의 양이 많을 경우를 대비하여 page를 나누어 렌더링 하였습니다.",
      ],
      "어려웠던 점 및 개선 노력": [
        "전체 게시글에 대한 수를 전달받지 못하여, 페이지를 나눔에 있어서, 하단에 만들어야하는 버튼 갯수 파악에 어려움이 있었습니다. 결국 전체 게시글에 대한 수는 제공되지 않아 전체 데이터를 한번 긁어와서 갯수를 파악하고 버튼을 만드는 작업을 통해 페이지네이션의 의미가 사라지고 말았습니다.",
        "회원가입 페이지에서 사용자가 값을 입력할 때 마다 유효성 검사를 하여 구현하였으나, react-hook-form의 watch 메서드는 실행 시 매번 리렌더링이 일어나서, 불필요한 자원 낭비가 발생했을거라고 생각합니다. 특정 상황에서 유효성을 검사하는 방법으로 재구성 한다면 불필요한 자원 낭비가 줄어들 것 입니다.",
      ],
      "아쉬웠던 점": [
        "누군가의 질문에 답변이 생성되는 등 순수 질문에서 벗어나 다른 액션이 일어난다면, 질문 삭제가 안되는 오류가 있습니다. 액션을 통해 다른 테이블에 추가가 되면서 단방향으로 이루어진 관계이기 때문에 삭제에 오류가 발생한 것으로 판단했습니다. 물론 대다수의 팀원들이 처음 협업하고 배우는 입장이기 때문에 발생한 문제라고 생각하지만, 제대로 된 CRUD 구현이 되지 않아서 치명적으로 다가왔습니다.",
        "여러 개발자들과 함께하는 첫 프로젝트였습니다. 기술적인 발전이 주를 이룬 것 보다 협업에서 소통의 중요성을 크게 느꼈습니다. 서로의 의견을 완벽하게 이해하지는 못하더라도 기본 지식의 부재는 부족한 소통으로 이어졌다고 생각합니다. 원활한 협업을 위하여 기본 상식정도는 알아야할 필요성을 느꼈습니다.",
      ],
    },
  },
};
export { viewProjectData };
export type { IdetailData, IdescriptionValue };
