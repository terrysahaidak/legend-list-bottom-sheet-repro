import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {LegendList} from '@legendapp/list';
import React from 'react';

import {Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const data = Array.from({length: 100}).map((_, index) => ({
  id: String(index),
  value: index,
}));

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheet style={{flex: 1}} snapPoints={[500]}>
        <LegendList
          style={{flex: 1}}
          data={data}
          renderScrollComponent={({ref, ...props}) => (
            <BottomSheetScrollView style={{flex: 1}} ref={ref} {...props} />
          )}
          estimatedItemSize={60}
          renderItem={({item}) => (
            <View
              style={{
                height: 60,
                borderBottomColor: 'red',
                borderBottomWidth: 1,
              }}>
              <Text>{item.id}</Text>
            </View>
          )}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default App;
