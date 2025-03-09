// reponse
export interface IUsersResponse {
  users: IUsersColumnsResponse[];
}
export interface IUsersColumnsResponse {
  id: number;
  email: string;
  name: string;
  password: string;
}

export interface IUserByIdResponse {
  id: number;
  email: string;
  name: string;
  password: string;
}

// request

// payload
