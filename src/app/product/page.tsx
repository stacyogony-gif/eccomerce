"use client";
import { Product, products } from "@/products";

import { useMemo, useState ,useEffect} from "react";
import ProductCard from "@/features/components/ProductCard";
import { ProductGallery } from "@/features/components/ProductGallery";

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
    <section className="w-full min-h-screen bg-background text-foreground px-4 py-8 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
      <div className="filter w-full md:w-72 shrink-0">
        <div className="sticky top-24 space-y-4">
          {/* filter feature */}
          <h2 className="text-xl font-bold text-foreground">Filter Products</h2>
          <div className="rounded-2xl border border-border bg-card text-card-foreground p-5 shadow-sm space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Price Limit</span>
                <span className="text-sm font-bold text-primary">Ksh. {price}</span>
              </div>

              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
            </div>

            <div className="border-t border-border pt-4">
              <span className="text-sm font-semibold text-foreground block mb-3">Categories</span>

              <form action="">
                <div className="space-y-2.5">
                  {availableTypes.map((type) => {
                    const id = `type-${type}`;
                    return (
                      <div
                        key={type}
                        className="form-group flex items-center justify-between text-sm hover:text-primary transition-colors cursor-pointer"
                      >
                        <label htmlFor={id} className="capitalize text-muted-foreground cursor-pointer select-none">
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
                          className="h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                        />
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>

            <div className="pt-2 text-xs text-muted-foreground border-t border-border">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        </div>
      </div>

      {/* product display */}

      <div className="grow">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">All Products</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Browse the complete collection
            </p>
          </div>
        </div>

        <div
          id="all-products"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-card border border-border">
              <p className="text-lg font-semibold text-foreground">
                No products found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
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