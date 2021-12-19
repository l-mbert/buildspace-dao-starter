import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xeb456220F5e18229a7157bddd2185eb881511fE5"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Salt Shaker",
        description: "This NFT will give you access to CodeRantDAO!",
        image: readFileSync("scripts/assets/shakers.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
