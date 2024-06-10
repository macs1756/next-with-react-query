export interface Imeta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface IacademicPersonnelCard {
  id: number;
  attributes: {
    email: string;
    fullName: string;
    isAffiliated:boolean
  };
}

export interface IacademicPersonnel {
  data: IacademicPersonnelCard[];
  meta: Imeta;
}

export interface IacademicPersonnelSingle {
  data: IacademicPersonnelCard;
}
