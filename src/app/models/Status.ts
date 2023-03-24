export interface Status {
    createdAt: Date,
    id: number,
    requestStatus: Status,
    justification: string
}