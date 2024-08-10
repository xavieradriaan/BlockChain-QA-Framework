// test/testSimpleStorage.js
const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
    it("debería almacenar el valor 89", async () => {
        const simpleStorageInstance = await SimpleStorage.deployed();

        // Establecer el valor de 89
        await simpleStorageInstance.set(89, { from: accounts[0] });

        // Obtener el valor almacenado
        const storedData = await simpleStorageInstance.get.call();

        assert.equal(storedData, 89, "El valor 89 no fue almacenado.");
    });
});