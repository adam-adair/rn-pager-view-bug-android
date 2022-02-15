import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function App() {
  const pagerRef = React.useRef<PagerView>(null);
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} ref={pagerRef}>
        <View style={styles.page} key="0">
          <Text>Page 0</Text>
          <TextInput style={styles.textInput} placeholder="placeholder text" />
          <Button
            title="Forward - setPage(1)"
            onPress={() => pagerRef.current?.setPage(1)}
          />
        </View>
        <View style={styles.page} key="1">
          <Text>Page 1</Text>
          <TextInput style={styles.textInput} placeholder="placeholder text" />
          <Button
            title="Backward - setPage(0)"
            onPress={() => pagerRef.current?.setPage(0)}
          />
                    <Button
            title="Forward - setPage(2)"
            onPress={() => pagerRef.current?.setPage(2)}
          />
        </View>
        <View style={styles.page} key="2">
          <Text>Page 2</Text>
          <TextInput style={styles.textInput} placeholder="placeholder text" />
          <Button
            title="Backward - setPage(1)"
            onPress={() => pagerRef.current?.setPage(1)}
          />
                    <Button
            title="Forward - setPage(3)"
            onPress={() => pagerRef.current?.setPage(3)}
          />
        </View>
        <View style={styles.page} key="3">
          <Text>Page 3</Text>
          <TextInput style={styles.textInput} placeholder="placeholder text" />
          <Button
            title="Backward - setPage(2)"
            onPress={() => pagerRef.current?.setPage(2)}
          />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: '50%',
  },
});
