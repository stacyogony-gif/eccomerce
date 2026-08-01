import type { Metadata } from "next";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  HeartIcon,
  TrophyIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About Our Company | Maisy Store",
  description:
    "Learn more about Maisy Store, our mission, core values, leadership team, and commitment to delivering extraordinary shopping experiences.",
};

const stats = [
  { id: 1, name: "Happy Customers", value: "50,000+", icon: UserGroupIcon },
  { id: 2, name: "Premium Products", value: "1,200+", icon: SparklesIcon },
  { id: 3, name: "Global Delivery", value: "45+ Countries", icon: GlobeAltIcon },
  { id: 4, name: "Customer Satisfaction", value: "99.4%", icon: TrophyIcon },
];

const values = [
  {
    name: "Customer-Centric Focus",
    description:
      "Every product we curate and feature we build starts with our customers in mind. We prioritize seamless shopping and unmatched support.",
    icon: HeartIcon,
  },
  {
    name: "Uncompromised Quality",
    description:
      "We source only top-tier items from trusted global manufacturers, ensuring long-lasting performance and value in every order.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Sustainable Innovation",
    description:
      "We continuously optimize our supply chain and packaging solutions to minimize environmental impact without sacrificing speed.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Worldwide Reach",
    description:
      "Connecting quality-driven products with discerning buyers globally, backed by reliable order tracking and door-to-door delivery.",
    icon: GlobeAltIcon,
  },
];

const team = [
  {
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in e-commerce innovation and global retail strategy.",
    image: "SJ",
  },
  {
    name: "David Chen",
    role: "Head of Product & Design",
    bio: "Passionate about crafting intuitive customer experiences and premium digital UI.",
    image: "DC",
  },
  {
    name: "Elena Rostova",
    role: "VP of Global Supply Chain",
    bio: "Expert in logistics, quality assurance, and sustainable sourcing across 40+ countries.",
    image: "ER",
  },
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    bio: "Architecting ultra-fast, secure, and resilient shopping infrastructure for millions.",
    image: "MV",
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-x-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
            <BuildingOffice2Icon className="size-4" /> About Maisy Store
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl text-white">
            Redefining Online Shopping Through Quality & Innovation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Founded with a vision to make premium lifestyle and tech products accessible worldwide, Maisy Store combines cutting-edge ecommerce technology with unmatched customer satisfaction.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/product"
              className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors flex items-center gap-2"
            >
              Explore Products <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-800 bg-gray-900/50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col items-center gap-y-2 p-4">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <stat.icon className="size-6" />
                </div>
                <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="text-sm leading-6 text-gray-400">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Story & Driven Purpose
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-300">
                Maisy Store began as a small passion project driven by a simple realization: online shoppers deserved better product curation, faster fulfillment, and transparent service.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-300">
                Over the years, we have grown into a multi-category store serving tens of thousands of happy customers around the world. Despite our growth, our foundational ethos remains unchanged — putting customer joy and quality first.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="rounded-lg bg-gray-800 p-4 border border-gray-700/50 flex-1">
                  <h3 className="font-semibold text-indigo-400 text-lg">Our Mission</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    To connect customers with exceptional products effortlessly, transparently, and sustainably.
                  </p>
                </div>
                <div className="rounded-lg bg-gray-800 p-4 border border-gray-700/50 flex-1">
                  <h3 className="font-semibold text-indigo-400 text-lg">Our Vision</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    To build global trust as the most dependable and customer-focused online store.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-tr from-indigo-900/40 via-gray-800 to-gray-900 p-8 ring-1 ring-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Why Customers Love Maisy Store</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">✓</span>
                  <span>Curated collection of verified, top-rated merchandise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">✓</span>
                  <span>End-to-end encrypted transactions & hassle-free returns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">✓</span>
                  <span>Real human support team ready to assist 24 hours a day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">✓</span>
                  <span>Rapid dispatch and real-time package tracking.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-800/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Pillars</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Values That Guide Everything We Build
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="flex flex-col rounded-xl bg-gray-900 p-6 ring-1 ring-gray-800 hover:ring-indigo-500/50 transition-all duration-300 shadow-md"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                      <value.icon className="size-5" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-sm leading-6 text-gray-400">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Our People</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet the Leadership Behind Maisy Store
            </p>
            <p className="mt-4 text-base leading-7 text-gray-400">
              A diverse team of engineers, designers, and e-commerce specialists working together to give you the best experience possible.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {team.map((person) => (
              <li
                key={person.name}
                className="rounded-2xl bg-gray-800/60 p-6 border border-gray-700/50 flex flex-col items-center text-center hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-xl font-bold text-white shadow-lg mb-4">
                  {person.image}
                </div>
                <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-sm font-medium leading-6 text-indigo-400">{person.role}</p>
                <p className="mt-3 text-xs leading-5 text-gray-400">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-indigo-950/60 py-16 sm:py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Experience Better Shopping?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-300">
            Browse through our wide range of products or get in touch with our support team to learn more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              href="/product"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
            >
              Contact Support &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
