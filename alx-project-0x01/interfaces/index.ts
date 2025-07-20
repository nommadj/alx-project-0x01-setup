export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
  initialData?: PostData | null;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
  };
  company: {
    catchPhrase: string;
  };
}

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
  initialData?: UserProps | null;
}
