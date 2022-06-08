const { ethers, run, network } = require('hardhat');

const deployGame = async () => {
  const numberGuessingGame = await ethers.getContractFactory(
    'NumberGuessingGame'
  );
  const deployGueesingGame = await numberGuessingGame.deploy();
  await deployGueesingGame.deployed();
  //Interact with the contract
  const getManager = await deployGueesingGame.manager();
  if ((network.config.chainId === 4) & process.env.API_URL_KEY) {
    await deployGueesingGame.deployTransaction.wait(2);
    verifyEtherScan(deployGueesingGame.address, []);
    console.log('Yesss')
  }
  console.log(getManager);
};

//Vefify it was deployed to etherscan
const verifyEtherScan = async (contractAddress, args) => {
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
deployGame();
