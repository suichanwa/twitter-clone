import { IPost } from "./Types";

export type CreatePostModalProps = {
    open: boolean;
    onClose: () => void;
    onSubmit: (post: IPost) => void;
};