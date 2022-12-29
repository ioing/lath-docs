import { AppletManifest } from 'lath/app/typings/types'

export default {
  config: {
    level: 1,
    title: 'Lath',
    free: false,
    defaultSlideViewApplets: [
      {
        id: "directory",
        activate: "instant"
      },
      {
        id: "api",
        activate: "lazy"
      }
    ],
    color: 'inherit',
    background: true
  }
} as AppletManifest
