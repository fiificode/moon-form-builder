import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const collections = [
  {
    name: "Step 1",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Step 2",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Step 3",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background image and overlap */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <div className="relative -mt-6 py-32">
          <h1 className="text-4xl font-bold font-headingFont tracking-tight sm:text-5xl md:text-6xl">
            Generate Forms and Surveys with AI
          </h1>
          <p className="text-center px-8 text-foreground flex items-center justify-center w-full">
            Create amazing forms in seconds with just a single click. Moon AI
            makes creating forms as easy in 3 steps.
          </p>
          <div className="mt-4 sm:mt-6 w-full font-bold">
            <Button className="w-1/2 lg:w-[30%]">
              <Sparkles className="mr-2 h-4 w-4 text-lime-300" />
              Create AI Form
            </Button>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="relative -mt-96 sm:mt-0 mb-4"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      alt={collection.imageAlt}
                      src={collection.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                  <div>
                    <h3 className="mt-1 font-semibold font-headingFont text-white">
                      <a href={collection.href}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
