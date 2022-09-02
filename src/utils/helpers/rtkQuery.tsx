import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { BaseExceptionVM } from "src/models";

export const rtkQueryException = (error: FetchBaseQueryError | SerializedError | undefined): BaseExceptionVM | null => {
    if (
        isFetchBaseQuery(error) &&
        isBaseException(error.data)
    ) {
        return error.data;
    }

    if (isSerializedError(error)) {
        return {
            reason: error.message || "",
            status: error.stack || "",
            statusCode: Number(error.code),
        }
    }

    return null;
}

function isSerializedError(error: any): error is SerializedError {
    return Boolean(
        typeof (error as SerializedError)?.message &&
        typeof (error as SerializedError)?.code !== 'undefined' &&
        typeof (error as SerializedError)?.name !== 'undefined' &&
        typeof (error as SerializedError)?.stack !== 'undefined'
    )
}

function isFetchBaseQuery(error: any): error is FetchBaseQueryError {
    return Boolean(
        (error as FetchBaseQueryError)?.data
    )
}

function isBaseException(error: any): error is BaseExceptionVM {
    return Boolean(
        typeof (error as BaseExceptionVM)?.reason !== 'undefined' &&
        typeof (error as BaseExceptionVM)?.status !== 'undefined' &&
        typeof (error as BaseExceptionVM)?.statusCode !== 'undefined'
    )
}