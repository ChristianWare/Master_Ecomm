import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import GameCard from "@/components/GameCard/GameCard";
import { getCategories, getGames } from "@/libs/apis";

export const revalidate = 10; // revalidate this page every 60 seconds
export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();
  console.log(categories)


  return (
    <main>
      {/* <Hero showLink /> */}
      <h2>All Games</h2>
      {/* Only some products will be listed here, the rest will be on the produc pages.  */}
      <div className={styles.cardFlex}>
        {games.map((game) => (
          <GameCard
            key={game._id}
            gameName={game.name}
            imageUrl={game.images[0].url}
            slug={game.slug.current}
            price={game.price}
          />
        ))}
      </div>
      {categories.map((x) => (
        <div key={x._id}>
          <Image
            src={x.image}
            alt={x.name}
            width={300}
            height={300}
            className={styles.img}
          />
          <p>{x.name}</p>
        </div>
      ))}
      <Footer />
    </main>
  );
}
