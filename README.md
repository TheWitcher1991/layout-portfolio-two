# My personal website [![Build Status](https://travis-ci.org/mono/website.svg)](https://travis-ci.org/mono/website)

This repository contains the files used to create [My personal](http://).

The site uses a preprocessor - [sass]([http://](https://sass-lang.com)), to write high-quality css code.
[sass]([http://](https://babeljs.io)) is also used to convert *ES6-7* to *ES5*.

## Installation

You will need [Node.js](https://nodejs.org) installed on your computer to download this repository.

```bash
$ git clone https://github.com/TheWitcher1991/my-website
$ cd my-website
$ npm install 
```

If you don't wish to clone, you can [download the source code](https://github.com/TheWitcher1991/my-website/archive/master.zip).

## Repository structure

the webpack(4.35.2) was used to generate

* `build` - the output of the generated site is stored here
* `src` - contains the source code of the site
* `views` - contains the main html file of the site