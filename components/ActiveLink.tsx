import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties } from "react";
import { Url } from "next/dist/shared/lib/router/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
