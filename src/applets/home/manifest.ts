export default {
  config: {
    level: 1,
    title: 'Lath',
    free: false,
    defaultSlideViewApplets: [
      {
        id: "directory",
        activate: "instant" as "instant"
      },
      {
        id: "api",
        activate: "lazy" as "lazy"
      }
    ],
    color: 'inherit',
    background: true
  }
}
