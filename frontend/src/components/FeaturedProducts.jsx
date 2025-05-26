import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Categories Section - Reduced to 4 items but same card size */}
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#b361ed] mb-4">
              Explore Our Categories
            </h1>
            <p className="text-xl text-[#b2b2ce]">
              Discover the latest trends in eco-friendly fashion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryItem
                category={category}
                key={category.name}
                className="w-full h-full" // Maintain original dimensions
              />
            ))}
          </div>
        </div>

        {/* Featured Products Section - Same card size, fewer per row */}
        {!isLoading && products.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-[#b361ed] mb-4">
                Featured Products
              </h1>
              <p className="text-xl text-[#b2b2ce]">
                Handpicked selections just for you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedProducts
                featuredProducts={products.slice(0, 3)} // Show only 3 featured products
                cardClassName="w-full h-full" // Maintain original card size
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
