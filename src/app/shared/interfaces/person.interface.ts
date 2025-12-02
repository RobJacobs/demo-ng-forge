export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  occupation?: string;
  quote?: string;
  url?: string;
}

export interface IProfile extends IPerson {
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  address?: {
    name?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
}
