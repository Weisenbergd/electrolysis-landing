import Link from "next/link";

const Title = () => {
  return (
    <Link href="/">
      <h1 className="font-light text-xl flex gap-2">
        <span>Lorem</span>
        <span>Electrolysis</span>
      </h1>
    </Link>
  );
};
export default Title;
