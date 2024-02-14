import React, { useEffect, useState } from 'react';
import { ScrollView, YStack } from 'tamagui';

import CustomProductCard from '~/components/custom-product-card';
import { fetchProducts, Product } from '~/utils/supabase';

const ScrollProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        let errorMessage = 'Error fetching Products';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <YStack>
        {products.map((product, index) => (
          <CustomProductCard
            key={index}
            name={product.name}
            imageLink={product.link}
            price={product.price}
          />
        ))}
      </YStack>
    </ScrollView>
  );
};

export default ScrollProducts;
