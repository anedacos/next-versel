import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className={"title"}>
        {/* Ir a <a href='/about'> About</a> */}
        Ir a <Link href="">About</Link>
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
