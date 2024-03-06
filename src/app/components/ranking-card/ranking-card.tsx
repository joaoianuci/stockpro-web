import { TriangleIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface RankingCardProps {
  title: string;
  items: {
    symbol: string;
    img: string;
    name: string;
    value: string;
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
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {items.map((item) => (
            <li
              key={item.symbol}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2">
                <Image src={item.img} alt={item.name} width={24} height={24} />
                <span>{item.symbol}</span>
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={action?.onClick}>
          {action?.label}
        </Button>
      </CardFooter>
    </Card>
  );
}
