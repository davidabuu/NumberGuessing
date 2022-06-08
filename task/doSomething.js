const { task } = require('hardhat/config');

task('Is-Ready', 'Print Somethinf').setAction(async (taskArgs, hre) => {
  const isReady = await hre.ethers.provider._ready();
  console.log(isReady);
});
