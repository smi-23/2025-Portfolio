// // 타입 에러를 해결하지 못해 현재 사용하지 못함
export interface PROJECT {
  id: string;
  cover: null | {
    external: {
      url: string;
    };
    type: "external";
  } | null;
  properties: {
    Title: {
      title: {
        text: {
          content: string;
        };
      }[];
    };
    Description: {
      rich_text: {
        text: {
          content: string;
        };
      }[];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
    Github: {
      url: string;
    };
    Tag: {
      multi_select: {
        name: string;
      }[];
    };
    ID: {
      unique_id: {
        number: number;
      };
    };
  };
}
