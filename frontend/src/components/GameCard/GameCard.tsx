import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./GameCard.module.css";
import { createNoopTrackerScope } from "sanity";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price?: number;
  description?: string;
}

const GameCard: FC<GameCardProps> = (props) => {
  const { gameName, imageUrl, slug, price, description } = props;

  return (
    <div>
      <Link href={`/games/${slug}`} className={styles.container}>
        <Image src={imageUrl} alt={gameName} width={200} height={200} />
        <h3 className={styles.gameName}>{gameName}</h3>
        {price && <h3 className={styles.price}>${price}</h3>}
      </Link>
      {description && <p>{description}</p>}
    </div>
  );
};
export default GameCard;
