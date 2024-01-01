import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={
        "flex h-svh w-full flex-col items-center justify-center gap-2 font-mono"
      }
    >
      <p className={"font-bold"}>404</p>
      <p className={"mt-4 font-bold tracking-wide"}>Page Not Found.</p>
      <p className="max-w-[320px] "></p>
      <div
        data-note={"delete this div"}
        className={
          "flex flex-col items-center gap-2 text-wrap text-xs text-zinc-600 dark:text-zinc-300"
        }
      >
        <span>description is missing</span>
        <span>"app/not-found-tsx"</span>
      </div>
      <Link
        href={"/"}
        className={
          "mt-4 rounded border-2 border-zinc-950/10 bg-zinc-100 p-2 text-xs dark:border-zinc-50/10 dark:bg-zinc-800 dark:text-zinc-50"
        }
      >
        Back To Home.
      </Link>
    </div>
  );
}
