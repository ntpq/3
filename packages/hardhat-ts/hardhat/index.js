// const { Confirm } = require('enquirer');

// const { grey, yellow, green } = require('chalk');

// task('deploy')
//   //   .addOptionalParam("network", "Network")
//   .setAction(async (taskArgs, hre, runSuper) => {
//     const { network } = taskArgs;
//     console.log(yellow(`Deploying...`));

//     const accounts = await hre.ethers.getSigners();

//     const prompt = new Confirm({
//       name: 'question',
//       message: `Want to continue with deployer ${green(accounts[0].address)}`,
//     });

//     ((await prompt.run()) && (await runSuper(taskArgs))) || console.log(yellow(''));
//   });
