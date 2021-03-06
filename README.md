# Layout-website [![Build Status](https://travis-ci.org/mono/website.svg)](https://travis-ci.org/mono/website)

This repository contains the files used to create [My personal website](https://thewitcher1991.github.io/layout-portfolio-two/app/).

The site uses a preprocessor - [sass](http://https://sass-lang.com)(3.5.5), to write high-quality css code.
[Babel](https://babeljs.io/)(7.5.0) is also used to convert *ES6-10* to *ES5*.

## Installation

You will need [Node.js](https://nodejs.org) installed on your computer to download this repository.

```bash
$ git clone https://github.com/TheWitcher1991/layout-portfolio-two
$ cd myWebsite
$ npm install | yarn
```

If you don't wish to clone, you can [download the source code](https://github.com/TheWitcher1991/layout-portfolio-two/archive/master.zip).

## Repository structure

the webpack(4.35.2) was used to generate

* `build` - the output of the generated site is stored here
* `src` - contains the source code of the site
* `views` - contains the main html file of the site
