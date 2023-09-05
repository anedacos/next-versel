import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1 className={"title"}>
          {/* Ir a <a href='/about'> About</a> */}
          Ir a <Link href="">Home</Link>
        </h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/about.tsx</code>
          </p>
        </div>
      </DarkLayout>
    </MainLayout>
  );
}
