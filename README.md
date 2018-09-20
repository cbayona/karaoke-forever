# Karaoke Forever

Host awesome karaoke parties where everyone can find and queue songs from their phone's web browser. Supports [MP3+G](https://en.wikipedia.org/wiki/MP3%2BG) (mp3+cdg) and mp4 video files. No internet connection required.

**Note:** Karaoke Forever does not handle audio *input* since there is a wide variety of possible setups. It's recommended to use a low-latency audio interface with at least two microphones that will be mixed with Karaoke Forever's output.

Please get started with [the documentation](https://www.karaoke-forever.com/docs). Packaged downloads are coming soon.

## Development

Requires [Node.js 10](https://nodejs.org/en/) or later.

1. Clone the project
2. `npm install`
3. `npm run dev` and look for "Web server running at" for the **server URL**

The packaged builds of Karaoke Forever Server use Electron. If you want to play with that side of things:

- `npm run install-app-deps`
- `npm start`

(on Windows you may want to do this first from an admin shell:)

- `npm i --global --production --vs2015 windows-build-tools`

To get back to non-Electron world you may need to:

- `npm rebuild --build-from-source`

## Contributing

Contributions are most welcome!

## Acknowledgements

- [David Zukowski](https://zuko.me): react-redux-starter-kit, which this project began as a fork of (all contributors up until it was detached to its own project are listed on the Contributors page)
- [Luke Tucker](https://github.com/ltucker/): JavaScript/HTML5 canvas CD+Graphics player
- Carter Corker: Technical things
- Stuart Albert: The name (a reference to Duke Nukem Forever, given the *almost* vaporware status)
- B&W mic icon by [Freepik](http://www.freepik.com/) from [flaticon.com](http://www.flaticon.com/)

## License

MIT License

Copyright (c) 2018 Brandon H. Jones
