export interface BaseResponseVM<T = any> {
    message: string;
    status: null | string;
    statusCode: number;
    data: T;
}

export interface BaseExceptionVM {
    reason: string;
    status: null | string;
    statusCode: number;
}

export interface BasePaginationRequest {
    size: number;
    page: number;
}