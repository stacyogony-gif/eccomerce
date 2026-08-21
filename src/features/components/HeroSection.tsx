'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <div className="mb-8 flex lg:justify-start justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-primary/50 transition-all">
                  New Fall Collection just dropped.{' '}
                  <Link href="/product" className="font-semibold text-primary">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Shop now <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">
                  Every step. Every second.
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                  Discover footwear and watches made for people who don't settle — premium quality, honest prices, delivered to your door.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                  <Link
                    href="/product"
                    className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                  >
                    Shop Collection
                  </Link>
                  <Link href="/company" className="text-sm/6 font-semibold text-foreground hover:text-primary transition-colors">
                    Our Story <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <p className="mt-4 text-xs text-muted-foreground text-center lg:text-left">
                  Free shipping on orders over $75 · 30-day returns
                </p>
              </div>
            </div>

            {/* Right: product images */}
            <div className="relative">
              {/* Background ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Sneaker Image Card */}
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:ring-indigo-500/50 hover:shadow-indigo-500/20">
                  <Image
                    src="/images/sandals.jpg"
                    alt="Premium sneaker product shot"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Footwear Collection
                    </span>
                  </div>
                </div>

                {/* Watch Image Card */}
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl mt-8 transition-all duration-500 hover:scale-[1.03] hover:ring-purple-500/50 hover:shadow-purple-500/20">
                  <Image
                    src="/images/watch.jpg"
                    alt="Premium watch product shot"
                    fill
                    // className="object-cover transition-transform duration-700 group-hover:scale-110"
                    // priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-900/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Luxury Timepieces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}