import { IPost } from './Types';

export interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (post: IPost) => void;
  initialContent?: string;
} 