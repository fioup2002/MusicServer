const spawn = require("child_process").spawn;
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const dest = "D:/Users/ice.liu/Downloads/upload";
const upload = {
  cmdLine: "",
  nowTime: new Date(),
  table: { S89: "hxfxglobal.com", S86: "hxfx.com", S25: "ihorse100.com", N95: "hx9999.com", B16: "8bx.com", B18: "jtfx.com", S85: "bgcfd.com" },
  project: [],
  init() {
    this.deleteFolder(dest, true);
    // 準備要上線的
    this.addProject("S89", "");
    this.addProject("N95", "");
    this.addProject("B16", "");
    this.addProject("B18", "");
    this.addProject("S85", "");
    this.start();
  },
  start() {
    if (this.project.length != 0) {
      this.gitPull(this.project[0]);
    } else {
      console.log("Done");
    }
  },
  gitPull(project) {
    var source = `D:/htdocs/${project[0]}/master/${project[1]}.${this.table[project[0]]}`;
    // 先git pull
    const cmdArray = ["D:", `cd ${source}`, "git pull"];
    this.cmdLine = "";
    cmdArray.forEach((cmd, i) => {
      this.cmdLine = `${this.cmdLine}${cmd}`;
      if (i < cmdArray.length - 1) {
        this.cmdLine += " && ";
      }
    });
    const child = spawn(this.cmdLine, { shell: true });
    child.on("close", (code) => {
      if (code == 0) {
        this.copyFolderRecursiveSync(source, dest);
        this.zipFolder(project);
      } else {
        console.log(project);
      }
    });
    child.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });
  },
  zipFolder(project) {
    var source = `${dest}/${project[1]}.${this.table[project[0]]}`;
    const archive = archiver("zip");
    const output = fs.createWriteStream(`${source}.zip`);
    archive.on("error", (err) => {
      throw err;
    });
    archive.pipe(output);
    archive.directory(source, false);
    archive.finalize();
    output.on("close", () => {
      this.deleteFolder(`${dest}/${project[1]}.${this.table[project[0]]}`, false);
      this.project.splice(0, 1);
      this.start();
    });
  },
  copyFolderRecursiveSync(source, target) {
    var files = [];
    var targetFolder = path.join(target, path.basename(source));
    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source);
      files.forEach((file) => {
        // 先將git拿掉
        if (file != ".git") {
          var curSource = path.join(source, file);
          if (fs.lstatSync(curSource).isDirectory()) {
            this.copyFolderRecursiveSync(curSource, targetFolder);
          } else {
            this.copyFileSync(curSource, targetFolder);
          }
        }
      });
    }
  },
  copyFileSync(source, target) {
    var lastModifyTime = fs.statSync(source).mtime;
    var reg = new RegExp(".php");
    if (this.nowTime - lastModifyTime <= 60 * 60 * 24 * 15 * 1000 && source.match(reg) == null) {
      this.createFolder(target);
      var targetFile = target;
      if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
          targetFile = path.join(target, path.basename(source));
        }
      }
      fs.writeFileSync(targetFile, fs.readFileSync(source));
    }
  },
  createFolder(source) {
    var array = source.split("\\");
    var str = "";
    array.forEach((text) => {
      str += `${text}\\`;
      if (!fs.existsSync(str)) {
        fs.mkdirSync(str);
      }
    });
  },
  deleteFolder(source, isNeedCreate) {
    fs.rmSync(source, { recursive: true, force: true });
    if (isNeedCreate) {
      fs.mkdirSync(source);
    }
  },
  addProject(type, project) {
    var array = project.split(" ");
    array.forEach((name) => {
      if (name.length != 0) {
        this.project.push([type, name]);
      }
    });
  },
};
upload.init();
