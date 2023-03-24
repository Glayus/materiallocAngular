export interface requestStatus {
    status: string[]
}

export interface ReducedRequest {

    id: number,
    date: Date,
    beginTime: Date,
    endTime: Date,
    neededCapacity: number,
    currentStatus: requestStatus,
    madeBy: string,
    roomNumber: number

}