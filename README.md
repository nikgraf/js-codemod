## js-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift).

### Setup & Run

  * `npm install -g jscodeshift`
  * `git clone https://github.com/nikgraf/js-codemod.git`
  * `jscodeshift -t <codemod-script> <file>`
  * Use the `-d` option for a dry-run and use `-p` to print the output
    for comparison

### Development

For development I recommend using the ASTExplorer e.g. [http://astexplorer.net/#/Obk6NXAm1g](http://astexplorer.net/#/Obk6NXAm1g)

Special thanks to [@cpojer](https://github.com/cpojer) for introducing me to codemods and helping out with getting started. Checkout his collection of [codemods](https://github.com/cpojer/js-codemod).
