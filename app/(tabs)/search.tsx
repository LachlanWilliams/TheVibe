import { YStack, Theme } from 'tamagui';

import CatagoryList from '~/components/catagory-list';
import SearchBar from '~/components/search-bar';

export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <SearchBar />
      <CatagoryList />
    </Theme>
  );
}
