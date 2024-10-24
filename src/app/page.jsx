import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  console.log(getAllProducts);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {getAllProducts && getAllProducts.data && getAllProducts.data.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {getAllProducts.data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

