export enum Status {
  CLOSED = 'closed',
  REVIVED = 'revived',
  DECLINING = 'declining',
}

export interface RawStudioInfo {
  name: string;
  status: string;
  ownedBy: string | null;     // Field to represent companies that were owned but never acquired
  acquiredBy: string | null;
  description: string;
  dateFounded: string;
  dateAcquired: string | null;
  dateClosed: string | null;
  link: string;
  logo: string;               // Not used currently, potentially used in future updates
  searchTags: string[];
}

export class StudioObj {
  name: string;
  status: Status;
  ownedBy: string | null;
  acquiredBy: string | null;  // If null, it means studio was never acquired
  description: string;
  dateFounded: Date;
  dateAcquired: Date | null;  // If null, it means studio was never acquired
  dateClosed: Date | null;
  link: string;
  logo: string;
  searchTags: string[];

  key: string;

  constructor(rawData: RawStudioInfo) {
    this.name = rawData.name;
    this.status = rawData.status as Status;
    this.ownedBy = rawData.acquiredBy ? rawData.acquiredBy : rawData.ownedBy;
    this.acquiredBy = rawData.acquiredBy;
    this.description = rawData.description;
    this.dateFounded = new Date(rawData.dateFounded);
    this.dateAcquired = rawData.dateAcquired ? new Date(rawData.dateAcquired) : null;
    this.dateClosed = rawData.dateClosed ? new Date(rawData.dateClosed) : null;
    this.link = rawData.link;
    this.logo = rawData.logo;
    this.searchTags = rawData.searchTags;

    this.key = this.name.toLowerCase().replace(/s/g, '');
  }
}