import { gql, useQuery } from "@apollo/client";

import GetExchangeRates from "./GetExchangeRates.gql";

export function ExchangeRates() {
  const { loading, error, data } = useQuery(gql(GetExchangeRates));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
