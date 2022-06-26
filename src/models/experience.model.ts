export enum TypeExperience {
  EDUCATION = 'EDUCATION',
  JOB = 'JOB',
  VOLUNTEERING = 'VOLUNTEERING',
  FREELANCER = 'FREELANCER'
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
