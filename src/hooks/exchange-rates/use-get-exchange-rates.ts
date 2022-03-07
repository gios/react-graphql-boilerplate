import { useQuery } from "@apollo/client";

import getExchangeRates from "./graphql/get-exchange-rates.gql";

interface Rates {
  currency: string;
  rate: number;
}

export function useGetExchangeRates() {
  return useQuery<{ rates: Rates[] }>(getExchangeRates);
}
