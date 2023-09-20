import { getCategories } from "@/libs/apis";
import Image from "next/image";
import Link from "next/link";
import styles from "./categories.module.css";

export const revalidate = 60; // revalidate this page every 60 seconds
export default async function categoriesPage() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <main className={styles.container}>
      <h1>All Categories Listed Here</h1>
      <p>
        this is where all of the categories you created in the sanity studio
        will appear. The goal is to be able to select a category and be taken to
        that specific page with all of the products that correspond to that
        category.
      </p>
      <div className={styles.row}>
        {categories.map((x) => (
          <div key={x._id}>
            <Link href={`categories/${x.slug.current}`}>
              <h3>{x.name}</h3>
              <Image
                src={x.image}
                alt={x.name}
                width={400}
                height={400}
                className={styles.img}
              />
            </Link>
            {/* <strong>{x.subtitle}</strong> */}
          </div>
        ))}
      </div>
    </main>
  );
}
