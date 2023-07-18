export type dataValue = { imgSrc: string; title: string };
interface IprojectData {
  [key: string]: dataValue;
  twitter: dataValue;
  challenge: dataValue;
  stackoverflow: dataValue;
}
export const projectData: IprojectData = {
  twitter: { imgSrc: "/twitterHome.png", title: "SNS 기본 구현하기" },
  challenge: {
    imgSrc: "/challenge/challengeHome.png",
    title: "66일 습관 만들기",
  },
  stackoverflow: {
    imgSrc: "/stackoverflowHome.png",
    title: "Stackoverflow Cloning",
  },
};
