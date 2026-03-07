export enum Contract {
    FULL_TIME = "FULL_TIME",
    FREELANCE = "FREELANCE",
    ALL = "ALL",
}

export enum JobType {
    ALL = "ALL",
    ONSITE = "ONSITE",
    REMOTE = "REMOTE",
}

export interface Availibility {
    id: number;
    userId: number;
    acceptJob: boolean;
    jobContract: Contract;
    jobType: JobType;
    jobLocation: string;
    createdAt: string;
    updatedAt: string;
}