import { NextPage } from "next";
import styles from "./CategorySlug.module.css";
import { getCategoryGames } from "@/libs/apis";
import GameCard from "@/components/GameCard/GameCard";

interface GameCategoryProps {
  params: { slug: string };
}

// This is the individual category/Slug Page
export const revalidate = 60 // revalidate this page every 60 seconds
const CategoriesSlugPage = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const games = await getCategoryGames(slug);
  console.log(games);

  return (
    <main className={styles.container}>
      <h1>{slug} Category</h1>
      <p>A short subtitle that provides more contenxt about the game.</p>
      <section>
        <h2>All {slug} games</h2>
        <h3>Collection of games</h3>
        {games.map((game) => (
          <GameCard
            key={game._id}
            gameName={game.name}
            imageUrl={game.images[0].url}
            price={game.price}
            slug={game.slug.current}
          />
        ))}
      </section>
    </main>
  );
};
export default CategoriesSlugPage;
