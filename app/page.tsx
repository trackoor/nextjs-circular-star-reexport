import * as ns from "../lib/m1";

export default function Home() {
  return (
    <p>
      a = {String(ns.a)}, keys = {Object.keys(ns).join(",")}
    </p>
  );
}
