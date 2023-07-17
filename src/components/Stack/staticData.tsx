import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiNextdotjs, SiStyledcomponents } from "react-icons/si";
type arrValue = (string | JSX.Element[])[];
interface IstackValue {
  [key: string]: arrValue[];
  Language: arrValue[];
  "Library & Framework": arrValue[];
}
const iconCss = " mr-1 w-8 h-full flex justify-center items-center";
const stackData: IstackValue = {
  Language: [
    [
      "JavaScript",
      "현재 웹 개발에 주축 언어인 Javascript에 대한 깊은 이해는 개발자가 자신의 생각을 표현하는데 필수라고 생각하여 학습하였습니다.",
      [<BiLogoJavascript className={iconCss} />],
    ],
    [
      "TypeScript",
      "동적으로 타입이 결정되는 Javascript와 달리 정적으로 타입을 지정 함으로써 예기치 못한 에러를 방지할 수 있다고 생각하여 학습하였습니다.",
      [<BiLogoTypescript className={iconCss} />],
    ],
  ],
  "Library & Framework": [
    [
      "React.js",
      "Virtual DOM을 통해 실제 렌더링 자원을 아낄 수 있다는 점과 컴포넌트 기반의 코드 작성을 통해 유지보수에 용이하다고 생각하여 학습하였습니다.",
      [<BiLogoReact className={iconCss} />],
    ],
    [
      "Next.js",
      "CSR기반의 React.js에서 상황에 따른 SSR을 적용하여 검색엔진에게 구체적인 정보를 줘서 노출 빈도를 높일 수 있고, 고객 기준에서 보는 페이지가 완성형태로 보여지기 때문에 좋은 UX를 얻어낼 수 있다고 생각하여 학습하였습니다.",
      [<SiNextdotjs className={`${iconCss} ml-1 mr-[6px]`} />],
    ],
    [
      "Redux",
      "컴포넌트 기반에서의 Props Drilling 문제를 해결하기 위해 전역 상태관리 방법을 적용하기 위해 학습하였습니다.",
      [<BiLogoRedux className={iconCss} />],
    ],
    [
      "Styled-Component, Tailwind CSS",
      "Javscript파일 내부에 CSS 코드가 존재하며, 컴포넌트 별 스타일 로드가 가능하므로, 클린하고 유지보수에 수월하다고 생각하여 학습하였습니다.",
    ],
  ],
};
export { stackData };
