const intro: string = `소가 되새김질을 하는 이유는 입에 들어온 음식을 잘게 분해해서 소화가 잘되게 하기 위함입니다.br
새롭게 알게된 지식이 있다면, 왜 필요한가에 대해서 생각하고 가능하다면 비슷하게 직접 구현해 봄으로써 되새김질을 시도하였고,br
되새김질을 할 수 있는 건강한 몸을 위해 끊임 없이 자바스크립트 언어 반복 학습 및 알고리즘 및 자료구조 문제 풀이를 진행하고 있습니다.`;
const color: string[] = [
  "text-blueColor",
  "text-redColor",
  "text-greyColor",
  "text-wineColor",
  "text-greenColor",
];
const regexp: RegExp = new RegExp(/^https?/, "i");
const profileData: [string, string, boolean][] = [
  ["class", color[0], false],
  [" Hasuhwan", color[1], false],
  [" extends", color[0], false],
  [" Developer", color[1], false],
  ["{", color[2], true],
  ["\u00A0\u00A0constructor", color[1], false],
  ["(){", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0super", color[0], false],
  ["();", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0bitrh: ", color[3], false],
  ["1995-02-15", color[4], false],
  [";", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0name: ", color[3], false],
  ["하수환", color[4], false],
  [";", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0github: ", color[3], false],
  ["https://github.com/hasuhwan", color[4], false],
  [";", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0notion: ", color[3], false],
  [
    "https://hasuhwan.notion.site/Notion-dbf047ec4aac4837b6c9afb4d7dd0420",
    color[4],
    false,
  ],
  [";", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0email: ", color[3], false],
  ["hapung215@gmail.com", color[4], false],
  [";", color[2], true],
  ["\u00A0\u00A0\u00A0\u00A0phone: ", color[3], false],
  ["010-3060-8791", color[4], false],
  [";", color[2], true],
  ["\u00A0\u00A0}", color[2], true],
  ["\u00A0\u00A0...", color[2], true],
  ["}", color[2], true],
];

export { intro, profileData, regexp };
