import { YStack, ScrollView, Theme } from 'tamagui';

import CustomProductCard from '~/components/custom-product-card';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <ScrollView>
        <YStack>
          <CustomProductCard
            name="shirt 1"
            imageLink="https://m.media-amazon.com/images/I/71wAR5-lggL._AC_UY1100_.jpg"
          />
          <CustomProductCard
            name="poopoo shirt"
            imageLink="data:image/jpeg;base64,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"
          />
          <CustomProductCard
            name="checked shirt"
            imageLink="https://m.media-amazon.com/images/I/71wAR5-lggL._AC_UY1100_.jpg"
          />
        </YStack>
      </ScrollView>
    </Theme>
  );
}
