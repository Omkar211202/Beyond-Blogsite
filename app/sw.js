// eslint-disable-next-line no-undef
importScripts('https://cdn.brevo.com/js/sdk-loader.js')
// eslint-disable-next-line no-undef
Brevo.push([
  'init',
  {
    client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
  },
])
