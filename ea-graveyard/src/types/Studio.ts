export enum Status {
    CLOSED = 'closed',
    REVIVED = 'revived',
    REDUCED = 'reduced',
}

export interface RawStudioInfo {
    name: string;
    status: string;
    acquiredBy: string | null;
    description: string;
    dateFounded: string;
    dateAcquired: string | null;
    dateClosed: string;
    link: string;
    logo: string;
}

export class StudioObj {
    name: string;
    status: Status;
    acquiredBy: string | null;  // If null, it means studio was never acquired
    description: string;
    dateFounded: Date;
    dateAcquired: Date | null;  // If null, it means studio was never acquired
    dateClosed: Date;
    link: string;
    logo: string;

    key: string;

    constructor(rawData: RawStudioInfo) {
        this.name = rawData.name;
        this.status = rawData.status as Status;
        this.acquiredBy = rawData.acquiredBy ? rawData.acquiredBy : null;
        this.description = rawData.description;
        this.dateFounded = new Date(rawData.dateFounded);
        this.dateAcquired = rawData.dateAcquired ? new Date(rawData.dateAcquired) : null;
        this.dateClosed = new Date(rawData.dateClosed);
        this.link = rawData.link;
        this.logo = rawData.logo;

        this.key = this.name.toLowerCase().replace(/s/g, '');
    }
}