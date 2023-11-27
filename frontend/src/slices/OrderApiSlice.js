import {apiSlice} from "./apiSlice";
const ORDER_URL = `${process.env.REACT_APP_BACKEND_URL}/api/order`;

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: (vendorID) => `${ORDER_URL}/item-selection/${vendorID}`,
        }),
    })
});

export const { useGetAllItemsQuery } = orderApiSlice;