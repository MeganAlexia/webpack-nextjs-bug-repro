const fs = require("fs");
const path = require("path");
const { stringsSet } = require("../loader/test-loader");

const PATH_ROOT = path.resolve(__dirname, "../..");

class TestPlugin {
  constructor({}) {
    this.outputPath = PATH_ROOT;
  }

  async writeFile() {
    let s = "";
    for (const item of stringsSet) {
      s = s.concat(`, ${item}`);
    }

    await fs.promises.writeFile(
      path.join(path.join(this.outputPath, `build/testing`), "test.txt"),
      s,
      {
        encoding: "utf8",
      }
    );
  }

  async createFolder(folderPath) {
    await fs.promises.mkdir(folderPath, { recursive: true });
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise(TestPlugin.name, (compilation) => {
      return this.createFolder(path.join(this.outputPath, `build/testing`))
        .then(() => this.writeFile())
        .catch((error) => {
          compilation.errors.push(error);
        });
    });
  }
}

module.exports = {
  TestPlugin,
};
