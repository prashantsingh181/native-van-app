import { storage } from "@/services/storage";
import { useEffect, useRef, useState } from "react";

export const useStorage = <T>(
  key: string,
  defaultInitialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(defaultInitialValue);

  const initialized = useRef(false);

  // setting initial value from storage
  useEffect(() => {
    const initializeState = async () => {
      const initialValue = await storage.getItem(key);
      setState(initialValue === null ? defaultInitialValue : initialValue);
      initialized.current = true;
    };
    initializeState();
  }, [defaultInitialValue, key]);

  useEffect(() => {
    if (!initialized.current) return;
    const saveState = async () => {
      try {
        await storage.setItem(key, state);
      } catch (error) {
        console.error(`Error saving state with key ${key} to storage`, error);
      }
    };
    saveState();
  }, [state, key]);

  return [state, setState];
};
