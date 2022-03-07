import { useQuery } from "@apollo/client";
import { Fragment } from "react";

import getExchangeRates from "./get-exchange-rates.gql";

interface Rates {
  currency: string;
  rate: number;
}

export function ExchangeRates() {
  const { loading, error, data } =
    useQuery<{ rates: Rates[] }>(getExchangeRates);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.rates.map(({ currency, rate }) => (
        <Fragment key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </Fragment>
      ))}
    </>
  );
}
