import { Subdomain } from "./subdomain";

export interface Domain {
    id: string;
    domain: string;
    storage: string;
    usedStorage: string;
    domainTag: string;
    availableDomains: number,
    usedDomains: number,
    monthlyVisitorCapacity: number,
    monthlyVisitor: number,
    subdomain: Subdomain[]
}
