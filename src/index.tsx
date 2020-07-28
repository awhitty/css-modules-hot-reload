import * as React from "react";
import { render } from "react-dom";

import * as styles from "./styles.css";

function App() {
  console.log("Oops! Re-rendering...");
  return <div className={styles.App}>Hello world</div>;
}

render(App(), document.getElementById("root"));
