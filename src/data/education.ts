export interface EducationInfo {
  imgSrc: string;
  name: string;
  from: string;
  duration: string;
  description: string;
  mdFilePath: string;
}

export const EDUCATIONS: EducationInfo[] = [
  {
    imgSrc: "/assets/icon/jg.png",
    name: "SW사관학교 정글",
    from: "카이스트, 크래프톤",
    duration: "2023.08 - 2024.01 (6개월)",
    description: "유행하는 언어나 기술에 대한 활용 능력보다 기초 능력과 학습 태도를 갖추는 것에 집중하는 교육 과정입니다. 4년간의 카이스트 전산학 과정을 압축하여  6개월간 기숙 훈련으로 밀도 있게 학습했습니다.",
    mdFilePath: "",
  },
]

