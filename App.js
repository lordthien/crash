import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  const [enabled, setEnabled] = useState(
    crashlytics().isCrashlyticsCollectionEnabled,
  );

  async function toggleCrashlytics() {
    await crashlytics()
      .setCrashlyticsCollectionEnabled(!enabled)
      .then(() => setEnabled(crashlytics().isCrashlyticsCollectionEnabled));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Toggle Crashlytics" onPress={toggleCrashlytics} />
      <Button title="Crash" onPress={() => crashlytics().crash()} />
      <Text>Crashlytics is currently {enabled ? 'enabled' : 'disabled'}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
