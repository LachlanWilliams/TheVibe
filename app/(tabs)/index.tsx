import { YStack, ScrollView, Theme } from 'tamagui';

import CustomProductCard from '~/components/custom-product-card';
import ScrollProducts from '~/components/scroll-products';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <ScrollProducts />
    </Theme>
  );
}
