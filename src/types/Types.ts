export interface IPost {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    username: string;
    profileImageUrl: string;
  };
  createdAt: string;
  likesCount: number;
  retweetsCount: number;
  commentsCount: number;
  image?: string;
} 