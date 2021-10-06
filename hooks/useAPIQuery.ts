import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { request } from "api";
import QueryURLs from "types/QueryURLs";

type Args<Data, Error> = {
  url: QueryURLs;
  params?: object;
  options?: UseQueryOptions<AxiosResponse<Data>, Error>;
};

const useAPIQuery = <Data = any, Error = any>({ url, params = {}, options = {} }: Args<Data, Error>) =>
  useQuery([url, params], () => request.get<Data>(url, { params }), options);

export default useAPIQuery;
