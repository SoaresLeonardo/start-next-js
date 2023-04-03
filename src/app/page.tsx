import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const revalidate = 30;

export default async function Home() {
  const response = await fetch("", {
    // next: {
    //   revalidate: 30,
    // },
    cache: "force-cache", // no store
  });
  const user = await response.json();
  return (
    <>
      <div>
        <h1>Home</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </>
  );
}
