export interface ISocialProfile {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
}

export interface ICareer {
  aboutMe?: [{ index: number; title: string }];
  education?: [
    {
      institution: string;
      title: string;
      location: string;
      startYear: number;
      endYear: number;
      result?: number;
      description?: string;
    }
  ];
  experience?: [
    {
      institution: string;
      title: string;
      location: string;
      startYear: number;
      endYear: number;
      result?: number;
      description?: string;
    }
  ];
  skills?: [{ index: number; title: string }];
  certifications?: [
    { index: number; title: string; year: number; credential: string }
  ];
}

export type profileUpdate = {
  userId: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  profileImage?: string;
  phone?: string;
  email: string;
  birthDate?: string;
  country?: string;
  address?: string;
  city?: string;
  zipCode?: number;
  socialProfile?: ISocialProfile;
  career?: ICareer;
};
