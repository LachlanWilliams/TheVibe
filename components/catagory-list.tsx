import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, YStack, ListItem } from 'tamagui';

const catagoryList = () => {
  return (
    <ScrollView>
      <YStack>
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Stars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Planet" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Space" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Rocks" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Mars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Stars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Planet" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Space" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Rocks" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Mars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Stars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Planet" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Space" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Rocks" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Mars" subTitle="Subtitle" />
        <ListItem hoverTheme pressTheme title="Moon" subTitle="Subtitle" />
      </YStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    marginTop: 5,
    height: 46,
  },
});

export default catagoryList;
