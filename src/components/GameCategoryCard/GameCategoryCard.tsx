import { FC } from "react";
import styles from "./GameCategoryCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface GameCategoryProps {
  categoryImage: string;
  categoryName: string;
  slug: string;
}

const GameCategoryCard: FC<GameCategoryProps> = (props) => {
  const { categoryImage, categoryName, slug } = props;
  return (
    <Link href={`categories/${slug}`}>
      <Image
        src={categoryImage}
        alt={categoryName}
        width={200}
        height={200}
        className={styles.img}
      />
      <h3>{categoryName}</h3>
      <Image
        src=''
        alt='view'
        width={20}
        height={20}
        className={styles.arrow}
      />
    </Link>
  );
};
export default GameCategoryCard;
