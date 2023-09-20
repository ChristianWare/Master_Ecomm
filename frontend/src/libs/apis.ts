import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Game } from "@/models/games";

// get all categories in the sanity studio
export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug {current},
    image,
    subtitle
  }`;

  const categories: Category[] = await sanityClient.fetch({ query });

  return categories;
};

// get all items in the sanity studio
export const getGames = async (): Promise<Game[]> => {
  const query = `*[_type == "game"] {
    
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref] [0] {
      name,
      slug {
        current
      }
    },
    slug,
    quantity,
    description
  }`;

  const games: Game[] = await sanityClient.fetch({ query });

  return games;
};

// get all items related to a specific category, based on the slug in the URL:
export const getCategoryGames = async (slug: string): Promise<Game[]> => {
  const query = `*[_type == "game" && category->slug.current == "${slug}"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    slug,
    quantity,
    description,
    category->{
      name,
      subtitle
    }
  }`;

  const games: Game[] = await sanityClient.fetch({ query });

  return games;
};
