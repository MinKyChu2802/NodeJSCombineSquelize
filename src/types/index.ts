export type Model = {
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserModel = Model & {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
};

export type ReviewModel = Model & {
  id: string;
  rating: string;
  description: string;
  userId?: string | null;
};
