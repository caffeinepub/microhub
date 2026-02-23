import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    name: string;
    email: string;
    contactNumber: string;
    brandName: string;
    budgetRange: string;
}
export interface backendInterface {
    getLeads(): Promise<Array<Lead>>;
    submitLead(name: string, brandName: string, budgetRange: string, contactNumber: string, email: string): Promise<void>;
}
