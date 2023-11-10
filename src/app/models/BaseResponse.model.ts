export interface BaseResponse<T>{
    data:T;
    paging:{
        page:number;
        pageSize:number;
        pageCount:number;
        totalCount:number;
    }
}