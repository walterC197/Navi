import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_PREFIX = 'navi.microcar.';

const usePersistentPreference = <T,>(key: string, fallback: T) => {
  const storageKey = `${KEY_PREFIX}${key}`;
  const [value, setValue] = useState<T>(fallback);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(storageKey);
        if (stored && mounted) {
          setValue(JSON.parse(stored));
        }
      } catch {
        // noop; fallback already set
      } finally {
        if (mounted) {
          setHydrated(true);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [storageKey]);

  const updateValue = useCallback(
    async (next: T) => {
      setValue(next);
      try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore write errors for now
      }
    },
    [storageKey]
  );

  return { value, setValue: updateValue, hydrated };
};

export default usePersistentPreference;
