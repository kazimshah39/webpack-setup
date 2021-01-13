1)
npm run dev

## It will run webpack dev server and
bundled file will not save in memory.

2)
npm run build

## Bundled file will save in the memory without
running any server

3)
## install webpack, webpack-cli and webpack-dev-server
## globally on android, otherwise add
## them to dependencies like below

"dependencies": {
"webpack": "^x.y.z",
"webpack-cli": "^x.y.z",
"webpack-dev-server": "^x.y.z"
}

4)