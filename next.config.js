
// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
  '@fullcalendar/react',
  '@fullcalendar/interaction',
  '@fullcalendar/timegrid',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/resource-timegrid',
  '@fullcalendar/resource-daygrid'
])

module.exports = withTM({
  // any other general next.js settings
    distDir: "nextjs",
    env: {
      FIREBASE_PROJECT_ID: "barbaard-6a6d9",
    },
    experimental: {
      sprFlushToDisk: false,
    },
})
