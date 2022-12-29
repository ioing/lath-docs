import { Application } from 'lath/app/typings/types'

global {
  interface Window extends Window {
    lathApp: Application
  }
}
