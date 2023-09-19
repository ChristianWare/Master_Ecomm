import { FC } from "react";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero: FC<{ showLink?: boolean }> = (props) => {
  const { showLink } = props;
  return (
    <div>
      <h1>Hero Area here</h1>
      {showLink && <Link href='/'>Find GAmes</Link>}
    </div>
  );
};
export default Hero;
