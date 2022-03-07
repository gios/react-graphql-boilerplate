import { Fragment } from "react";

import { useGetExchangeRates } from "../../hooks/exchange-rates/use-get-exchange-rates";
import { HomeLayout } from "../../layouts/home/home";

export function ExchangeRates() {
  const { loading, error, data } = useGetExchangeRates();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <HomeLayout>
      {data?.rates.map(({ currency, rate }) => (
        <Fragment key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </Fragment>
      ))}
    </HomeLayout>
  );
}
