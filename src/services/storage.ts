import { StorageKeys } from "@/enums/storage-keys";
import { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  appStorage = AsyncStorage;

  async getItem(key: string) {
    try {
      const item = await this.appStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item with key ${key} from storage`, error);
      return null;
    }
  }

  async setItem<T>(key: string, value: T) {
    try {
      await this.appStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item with key ${key} in storage`, error);
      throw error;
    }
  }

  async getUser() {
    try {
      const user = await this.appStorage.getItem(StorageKeys.USER);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error getting user from storage", error);
      return null;
    }
  }

  async setUser(user: User) {
    try {
      await this.appStorage.setItem(StorageKeys.USER, JSON.stringify(user));
    } catch (error) {
      console.error("Error setting user in storage", error);
      throw error;
    }
  }
}

export const storage = new Storage();
