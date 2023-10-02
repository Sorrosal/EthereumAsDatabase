const { expect } = require("chai");

describe("Contador", function () {
  it("Devolver contador", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Contador");

    const contador = await hardhatToken.getContador();
    console.log(contador);
    expect(await hardhatToken.getContador()).to.above(0);
  });
});