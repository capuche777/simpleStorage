import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set = async (key: string, value: any): Promise<string> => {
      await Storage.set({
        key,
        value: JSON.stringify(value)
      });
      return 'Dato guardado';
  }

  get = async (key: string): Promise<void> => {
    const item = await Storage.get({ key });
    return JSON.parse(item.value);
  }

  remove = async (key: string): Promise<void> => {
    await Storage.remove({ key });
  }
}
