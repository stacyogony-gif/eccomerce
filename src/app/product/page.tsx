"use client";
import { Product, products } from "@/products";

import { useMemo, useState ,useEffect} from "react";
import ProductCard from "@/features/components/ProductCard";

const Products = () => {
  const [product, setProducts] = useState<Product[]>(products);

  useEffect(() => {
    setProducts(products);
  }, []);

  const prices = products.map((product: Product) => product.price);

  const availableTypes = useMemo<string[]>(
    () => Array.from(new Set(products.map((product: Product) => product.category))),
    [],
  );

  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const [price, setPrice] = useState(maxPrice);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProducts = useMemo(
    () =>
      products.filter((product: Product) => {
        const matchesPrice = product.price <= price;
        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(product.category);

        return matchesPrice && matchesType;
      }),
    [price, selectedTypes],
  );

  return (
    <section className="w-full bg-[#f5f7fb] px-3 py-4 flex flex-row gap-4">
      <div className="filter">
        <div className="container">
          {/* filter feature */}
          <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
          <div className="max-w-md rounded-lg border p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">Price Slider</span>
              <span className="text-sm text-gray-600">Ksh. {price}</span>
            </div>

            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />

            <div className="mb-3 justify-between">
              <span className="text-md font-medium ">Type</span>

              <form action="">
                <div className="mt-3 space-y-2">
                  {availableTypes.map((type) => {
                    const id = `type-${type}`;
                    return (
                      <div
                        key={type}
                        className="form-group flex items-center justify-between gap-3"
                      >
                        <label htmlFor={id} className="capitalize">
                          {type}
                        </label>
                        <input
                          type="checkbox"
                          name={type}
                          id={id}
                          checked={selectedTypes.includes(type)}
                          onChange={(e) => {
                            setSelectedTypes((current) =>
                              e.target.checked
                                ? [...current, type]
                                : current.filter((item) => item !== type),
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length}{" "}
              products
            </div>
          </div>
        </div>
      </div>

      {/* product display */}

      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-black">All Products</h1>
            <p className="text-sm text-gray-500">
              Browse the complete collection
            </p>
          </div>
        </div>

        <div
          id="all-products"
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-medium text-black">
                No products found
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
      
    </section>
  );
};

export default Products;