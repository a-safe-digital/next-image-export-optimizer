import Head from "next/head";
import ExportedImageLegacy from "../../src/legacy/ExportedImage";
import ExportedImage from "../../src/ExportedImage";

import smallImage from "../public/images/chris-zhang-Jq8-3Bmh1pQ-unsplash_small.jpg";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Image-Export-Optimizer</title>
        <meta
          name="description"
          content="Example of @a-safe-digital/next-image-export-optimizer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next-Image-Export-Optimizer</h1>
        <h2>Optimized example - Legacy</h2>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "200px",
            marginBottom: "3rem",
          }}
        >
          <ExportedImageLegacy
            src="images/chris-zhang-Jq8-3Bmh1pQ-unsplash_small.jpg"
            layout="fill"
            id="test_image"
            objectFit="cover"
            priority={true}
            alt={"test_image"}
          />
        </div>
        <h2>Optimized example</h2>

        <div
          style={{
            marginBottom: "3rem",
            position: "relative",
            width: "50%",
            height: "200px",
          }}
        >
          <ExportedImage
            src={smallImage}
            fill
            style={{ objectFit: "cover" }}
            id="test_image_future"
            alt={"test_image"}
          />
        </div>
      </main>
    </div>
  );
}
