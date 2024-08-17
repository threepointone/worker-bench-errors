const baseUrl = "http://localhost:8787";

async function run() {
  const details = [];

  for (let i = 0; i < 500; i++) {
    details.push(
      (async () => {
        return await fetch(baseUrl, {
          method: "POST",
        });
      })()
    );
  }

  await Promise.all(details);

  console.log("done");
}

run().catch(console.error);
