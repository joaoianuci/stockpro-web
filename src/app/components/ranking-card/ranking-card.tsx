import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface RankingCardProps {
  title: string;
  items: {
    change: number;
    close: number;
    logo: string;
    name: string;
    sector: string;
    type: string;
    volume: number;
    stock: string;
  }[];
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function RankingCard({
  title,
  items,
  action,
}: RankingCardProps) {
  return (
    <Card className="w-[33%] min-w-[350px]">
      <CardHeader>
        <CardTitle className="mb-4">{title}</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <ul>
          {items.map((item) => (
            <li
              key={item.stock}
              className="flex items-center justify-between py-2"
            >
              <div className="flex gap-2 justify-start">
                <div className="pt-1">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col gap-1 justify-start">
                  <b className="text-sm">{item.stock}</b>
                  <span className="text-muted-foreground text-xs">
                    {item.name}
                  </span>
                </div>
              </div>
              <span>{item.volume}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={action?.onClick} className="m-auto w-full">
          {action?.label}
        </Button>
      </CardFooter>
    </Card>
  );
}
