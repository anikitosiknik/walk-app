export interface GetUsersResponseInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersStateInterface {
  users: User[];
  currentUserId?: number | null;
  pageInfo: {
    current: number;
    pageSize: number;
    numberOfPages: number;
  };
}

export interface RouteInterface {
  date: Date;
  polyline: [number, number][];
}