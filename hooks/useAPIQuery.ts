import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { request } from "api";

type Args<Data, Error> = {
  url: string;
  params: object;
  options?: UseQueryOptions<AxiosResponse<Data>, Error>;
};

const useAPIMutation = <Data = any, Error = any>({
  url,
  params = {},
  options = {},
}: Args<Data, Error>) =>
  useQuery([url, params], () => request.get<Data>(url, { params }), options);

export default useAPIMutation;
