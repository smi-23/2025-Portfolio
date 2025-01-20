// // 전에 쓰던 타입
// export interface PROJECT {
//   id: string;
//   cover: null | {
//     external: {
//       url: string;
//     };
//     type: "external";
//   } | null;
//   properties: {
//     Title: {
//       title: {
//         text: {
//           content: string;
//         };
//       }[];
//     };
//     Description: {
//       rich_text: {
//         text: {
//           content: string;
//         };
//       }[];
//     };
//     WorkPeriod: {
//       date: {
//         start: string;
//         end: string;
//       };
//     };
//     Github: {
//       url: string;
//     };
//     Tag: {
//       multi_select: {
//         name: string;
//       }[];
//     };
//     ID: {
//       unique_id: {
//         number: number;
//       };
//     };
//   };
// }

export type PROJECT = {
  pageId: string;
  cover: string;
  title: string;
  description: string;
  githubUrl: string;
  youtubeUrl: string;
  bloglUrl: string;
  workPeriod: {
    start: string;
    end: string;
  };
  tags: string[];
  slug: string;
}
