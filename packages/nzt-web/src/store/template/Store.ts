import RootStore from '@/store/root'
import { makeAutoObservable } from 'mobx'

export class TodoStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}
