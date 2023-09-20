import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import GameCard from "@/components/GameCard/GameCard";
import { getCategories, getGames } from "@/libs/apis";

export const revalidate = 60 // revalidate this page every 60 seconds
export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();
  const isTrendingGames = games?.filter((game) => game.isTrending);
  const isFeaturedGames = games?.find((game) => game.isFeatured);
  console.log(isFeaturedGames)

  return (
    <main>
      {/* <Hero showLink /> */}
      <h2>Trending</h2>
      <div className={styles.cardFlex}>
        {isTrendingGames.map((game) => (
          <GameCard
            key={game._id}
            gameName={game.name}
            imageUrl={game.images[0].url}
            slug={game.slug.current}
            price={game.price}
          />
        ))}
        {/* {games.map((game) => (
          <GameCard
            key={game._id}
            gameName={game.name}
            imageUrl={game.images[0].url}
            slug={game.slug.current}
            price={game.price}
          />
        ))} */}
      </div>
      {/* {categories.map((x) => (
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
      ))} */}

      {isFeaturedGames && (
        <div>
          <h2>Featured</h2>
          <GameCard
            key={isFeaturedGames._id}
            gameName={isFeaturedGames.name}
            imageUrl={isFeaturedGames.images[0].url}
            slug={isFeaturedGames.slug.current}
            price={isFeaturedGames.price}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}

// const games = [
//   {
//     id: 1,
//     price: 12,
//     name: "Call of Duty: Modern Warfare",
//     slug: "call-of-duty",
//     image:
//       "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FsbCUyMG9mJTIwRHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 2,
//     price: 14,
//     name: "Assassin's Creed Valhalla",
//     slug: "assassin-creed",
//     image:
//       "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QXNzYXNzaW4ncyUyMENyZWVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     price: 42,
//     name: "FIFA 23",
//     slug: "fifa-23",
//     image:
//       "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     price: 27,
//     name: "The Legend of Zelda: Breath of the Wild",
//     slug: "the-legend-of-zelda",
//     image:
//       "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
// ];

// const featuredGame = {
//   name: "Eternal Domination",
//   description:
//     "Immerse yourself in a vast fantasy realm where epic battles and strategic conquests await. In 'Eternal Domination,' you'll lead armies, forge alliances, and build your empire from scratch. Command powerful heroes, employ cunning tactics, and unleash your might on the battlefield. Will you rise as the supreme ruler or fall beneath the weight of your ambitions? Join the fray and claim your destiny in this thrilling strategy game.",
//   slug: "eternal-domination",
//   image: "/images/burger.png",
// };
