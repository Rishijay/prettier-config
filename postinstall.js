import chalk from 'chalk';

const log = console.log;

log("")
log("")
log("====================================================");
log(chalk.greenBright(` Prettier config - v${process.env.npm_package_version} installed successfully.!!`));
log("====================================================");
log("")
log(chalk.cyanBright("But it's not done yet.!!"))
log("")
log(chalk.cyanBright('Please add ' + chalk.yellowBright.bold('"prettier": "@rishijay/prettier-config"') + ' in the main scope of package.json to complete the installation.'));
log("")
log(chalk.yellow.underline("Example :-"))
log("")
log(chalk.yellowBright(`{\n  "name": "your-project-name",\n  "version": "x.x.x",\n  `)+ chalk.yellow.underline(`"prettier": "@rishijay/prettier-config"`)+chalk.green.bold(" -> Add this line here")+chalk.yellowBright("\n  // ... \n}"))
log("")
log("")