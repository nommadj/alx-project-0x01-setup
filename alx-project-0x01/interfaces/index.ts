export interface PostProps {
  post: PostData;
}

export interface PostData {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
}

export interface UserModalProps {
  user: UserProps;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
