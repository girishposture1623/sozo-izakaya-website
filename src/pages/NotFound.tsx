import Button from "../components/Button";
import { EnsoMark } from "../components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[75vh] flex-col items-center justify-center py-32 text-center">
      <EnsoMark className="h-16 w-16 text-aka" />
      <p className="eyebrow mt-8 flex items-center gap-3 text-aka">
        <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
        404 · 迷子
        <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
      </p>
      <h1 className="mt-5 font-display text-5xl font-medium text-cream sm:text-6xl">
        This table doesn't exist.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/60">
        The page you're looking for has wandered off into the lanes of
        Versova. Let's get you back to the good stuff.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button to="/">Back Home</Button>
        <Button to="/menu" variant="outline">
          View the Menu
        </Button>
      </div>
    </section>
  );
}
