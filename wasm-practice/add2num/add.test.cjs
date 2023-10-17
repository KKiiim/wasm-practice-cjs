const assert = require("assert");
const { getResult } = require("./add.cjs");

const { test, suite } = require("mocha");

async function runTests() {
  suite("add", () => {
    test("add", async () => {
      const result = await getResult();
      assert.strictEqual(result, 8);
    });
  });
}

runTests()
  .then(() => {
    console.log("All tests completed.");
  })
  .catch((error) => {
    console.error("Error running tests:", error);
  });