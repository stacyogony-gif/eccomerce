import { CheckCircleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Built for scale.',
        description:
            'Our infrastructure handles millions of requests without breaking a sweat, so you never have to worry about growth.',
    },
    {
        name: 'Security first.',
        description:
            'End-to-end encryption and SOC 2 compliance baked in from day one, not bolted on as an afterthought.',
    },
    {
        name: 'Always-on support.',
        description:
            'Real engineers, available around the clock, who actually know your stack and care about your outcome.',
    },
    {
        name: 'Transparent pricing.',
        description:
            'No hidden fees, no surprise overages. What you see is what you pay, every single month.',
    },
]

export default function WhyUsSection() {
    return (
        <div className="relative isolate overflow-hidden bg-background text-foreground py-24 sm:py-32">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-primary">Why choose us</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
                        Everything you need, nothing you don't
                    </p>
                    <p className="mt-6 text-lg/8 text-muted-foreground">
                        We obsess over the details so you don't have to. Here's why teams trust us to power
                        their most important work.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-foreground">
                                    <CheckCircleIcon
                                        aria-hidden="true"
                                        className="absolute top-1 left-0 size-5 text-primary"
                                    />
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline text-muted-foreground">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}