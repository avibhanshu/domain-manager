import { Subdomain } from "./subdomain";

export interface Domain {
    id: number;
    domain: string;
    storage: string;
    usedStorage: string;
    domainTag?: string;
    status?: string;
    availableDomains?: number,
    usedDomains?: number,
    monthlyVisitorCapacity: number,
    monthlyVisitor: number,
    subdomain: Subdomain[]
}
