"use client";

import { useStocks } from "@/app/hooks/use-stocks";
import RankingCard from "../ranking-card/ranking-card";

export function Rankings() {
  const { data, error, isLoading } = useStocks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data, "data");

  console.log(data, error, isLoading, "data");
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-2xl">Stocks Raking</h2>

      <div className="flex gap-5 justify-center items-center">
        <RankingCard
          title="Biggest Market Value"
          items={data?.slice(0, 5)}
          action={{
            label: "See all",
            onClick: () => console.log("See all"),
          }}
        />
        <RankingCard
          title="Biggest Dividend Yeld"
          items={data?.slice(0, 5)}
          action={{
            label: "See all",
            onClick: () => console.log("See all"),
          }}
        />{" "}
        <RankingCard
          title="Biggest Revenue"
          items={data?.slice(0, 5)}
          action={{
            label: "See all",
            onClick: () => console.log("See all"),
          }}
        />{" "}
      </div>
    </section>
  );
}
