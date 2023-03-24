import { requestStatus } from "./ReducedRequest";

export interface status {
    createdAt: Date,
    id: number,

}

export interface Requests {


    id: number,

    beginAt: Date,
    endAt: Date,
    neededCapacity: number,
    justification: string,
    additionalNotes: string,
    statusHistory: string,
    currentStatus: requestStatus,
    madeBy: string,
    roomNumber: number
}