export type PROJECT = {
  pageId: string;
  cover: string;
  title: string;
  description: string;
  githubUrl: string;
  youtubeUrl: string;
  blogUrl: string;
  workPeriod: {
    start: string;
    end: string;
  };
  tags: string[];
  pageTitle: string;
  slug: string;
}
