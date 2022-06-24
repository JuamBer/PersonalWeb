export enum TypeExperience {
  EDUCATION,
  JOB,
  VOLUNTEERING,
  FREELANCER
}

interface Item {
  position?: string;
  startDate: Date;
  endDate: Date | null;
}

export interface Experience {
  type: TypeExperience;
  organization: string;
  items: Item[]
}
