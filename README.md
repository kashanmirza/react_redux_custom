# React Redux Boilerplate
> It's how _I_ like it, fork before using it.

### Setup
```bash
  # clone the repository
  λ git clone https://github.com/mir-nawaz/react-redux.git
  # change the current directory
  λ cd react-redux
  # install all dependencies
  λ npm install
  # run the project
  λ npm run start
```

### Structure
```bash
.
├── config
├── public
├── README.md
├── scripts
├── src
│   ├── App.js
│   ├── assets
│   │   ├── css
│   │   └── images
│   ├── components
│   │   ├── main
│   │   └── menu
│   ├── constants
│   ├── index.js
│   ├── redux
│   │   ├── actions
│   │   ├── reducers
│   │   └── store
│   ├── registerServiceWorker.js
│   └── utils
└── webpack.config.js

```

### Scripts

- `npm run start` - builds the redux app in development mode
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run build` - serves the files in the `build_webpack/` folder

### License
MIT