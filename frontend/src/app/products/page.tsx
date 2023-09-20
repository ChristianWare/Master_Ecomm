import { getCategories } from "@/libs/apis";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductsPage.module.css";

export const revalidate = 30; // revalidate this page every 60 seconds
const ProductsPage = async () => {
  const categories = await getCategories();
  return (
    <div>
      <h1>All Categories Listed Here</h1>
      <div className={styles.row}>
        {categories.map((x) => (
          <div key={x._id}>
            <Link href={`products/${x.slug.current}`}>
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
    </div>
  );
};
export default ProductsPage;
