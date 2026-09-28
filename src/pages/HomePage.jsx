import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import MediaFigure from '@/components/MediaFigure';
import CroppedWord from '@/components/CroppedWord';
import { articles, formatArticleDate } from '@/data/articles';

const PORTRAIT =
	'https://horizons-cdn.hostinger.com/ffa3bbed-bc7c-47eb-9526-492d36b64b80/whatsapp-image-2026-02-11-at-7.05.52-pm-0oOBH.jpeg';

const stats = [
	{ value: 9, suffix: '+', label: 'Years teaching & research' },
	{ value: 24, suffix: '', label: 'Peer-reviewed publications' },
	{ value: 31, suffix: '', label: 'Applied projects delivered' },
	{ value: 400, suffix: '+', label: 'Students mentored' },
];

const expertise = [
	{
		index: '01',
		title: 'Data Analysis',
		text: 'Statistical modelling, data auditing, and reproducible analysis pipelines that survive scrutiny.',
	},
	{
		index: '02',
		title: 'Machine Learning',
		text: 'Applied ML for classification, anomaly detection, and decision support in resource-constrained settings.',
	},
	{
		index: '03',
		title: 'Cybersecurity',
		text: 'Intrusion detection, behavioural analytics, and security telemetry treated as a data problem.',
	},
	{
		index: '04',
		title: 'Python Development',
		text: 'Research-grade tooling in Python — from quick experiments to maintained open-source libraries.',
	},
];

const projects = [
	{
		index: '01',
		title: 'PySentinel',
		subtitle: 'ML-assisted intrusion detection toolkit',
		description:
			'An open-source Python toolkit that turns raw authentication and network logs into behavioural features, then flags compromised accounts with isolation forests. Deployed in two university networks.',
		tags: ['Python', 'scikit-learn', 'Security'],
		image: 'https://images.unsplash.com/photo-1591206246224-04b4624adef4?w=1280&h=832&fit=crop&q=80',
		caption: 'PySentinel dashboard during a live red-team exercise',
	},
	{
		index: '02',
		title: 'GraphSentry',
		subtitle: 'Anomaly detection for financial networks',
		description:
			'Graph-based fraud detection that models transactions as a network and surfaces suspicious clusters for human review. Published at a peer-reviewed security venue; reduced manual review load by 40%.',
		tags: ['Graph ML', 'Fraud', 'Research'],
		image: 'https://images.unsplash.com/photo-1699100329878-7f28bb780787?w=1280&h=832&fit=crop&q=80',
		caption: 'Transaction graph clustered by behavioural similarity',
	},
	{
		index: '03',
		title: 'LearnSight',
		subtitle: 'Learning analytics for large classrooms',
		description:
			'A lightweight analytics pipeline that helps lecturers spot students at risk of falling behind weeks before exams — designed to run offline on modest hardware.',
		tags: ['Education', 'Pandas', 'Dashboards'],
		image: 'https://images.unsplash.com/photo-1673898162925-292824ca9119?w=1280&h=832&fit=crop&q=80',
		caption: 'Annotated cohort analysis from a 300-student course',
	},
	{
		index: '04',
		title: 'HausaNLP',
		subtitle: 'Corpus & benchmarks for a low-resource language',
		description:
			'A community effort to build clean, documented text corpora and baseline benchmarks for Hausa — so language technology is not reserved for English-speaking data.',
		tags: ['NLP', 'Open Data', 'Community'],
		image: null,
		caption: null,
	},
];

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title>Dr. Abdulbasid Banga — Assistant Professor, Data & Machine Learning</title>
				<meta
					name="description"
					content="Portfolio and blog of Dr. Abdulbasid Banga, Assistant Professor specializing in data analysis, machine learning, cybersecurity, and Python development."
				/>
			</Helmet>

			{/* HERO */}
			<section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
				<CroppedWord
					word="BANGA"
					className="absolute -right-6 bottom-0 md:-right-16"
					wordClassName="translate-y-[12%]"
				/>
				<div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
					<div className="md:col-span-7 md:pt-10">
						<Reveal>
							<p className="annotation flex items-center gap-3">
								<span className="inline-block h-px w-10 bg-primary" />
								Assistant Professor — Computer Science
							</p>
						</Reveal>
						<Reveal delay={0.1}>
							<h1 className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
								Dr. Abdul
								<br />
								basid <span className="text-primary">Banga</span>
							</h1>
						</Reveal>
						<Reveal delay={0.2}>
							<p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
								I work where data analysis, machine learning, and cybersecurity meet —
								building honest models, secure systems, and the Python tools that tie
								them together. I also teach the next generation to do the same.
							</p>
						</Reveal>
						<Reveal delay={0.3}>
							<div className="mt-10 flex flex-wrap items-center gap-4">
								<a
									href="#research"
									className="group inline-flex h-12 items-center gap-2 bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
								>
									View research
									<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
								</a>
								<Link
									to="/blog"
									className="inline-flex h-12 items-center gap-2 border border-white/15 px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:scale-[0.98]"
								>
									Read the blog
								</Link>
							</div>
						</Reveal>
					</div>

					<div className="md:col-span-5 md:pl-6 md:pt-24">
						<Reveal delay={0.35} y={32}>
							<MediaFigure
								src={PORTRAIT}
								alt="Portrait of Dr. Abdulbasid Banga"
								index="FIG. 01"
								caption="Dr. A. Banga — Faculty of Computing"
								imgClassName="aspect-[3/4] grayscale-[0.15]"
							/>
						</Reveal>
					</div>
				</div>
			</section>

			{/* STATS BAND */}
			<section className="border-y border-white/10 bg-white/[0.02]">
				<div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-5 md:grid-cols-4 md:px-8">
					{stats.map((s, i) => (
						<Reveal key={s.label} delay={i * 0.08} className="px-4 py-10 md:px-8">
							<p className="font-display text-4xl font-semibold text-foreground md:text-5xl">
								<CountUp value={s.value} suffix={s.suffix} />
							</p>
							<p className="annotation mt-3">{s.label}</p>
						</Reveal>
					))}
				</div>
			</section>

			{/* ABOUT */}
			<section id="about" className="relative overflow-hidden">
				<div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-12 md:py-32 md:px-8">
					<div className="md:col-span-5">
						<Reveal>
							<p className="annotation">01 — About</p>
							<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
								A researcher who
								<br />
								still ships code
							</h2>
						</Reveal>
						<Reveal delay={0.15}>
							<div className="mt-10 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
								<p>
									Dr. Abdulbasid Banga is an Assistant Professor of Computer Science
									currently working at Prince Musaid Bin Abdulrahman University,
									KSA, where he has served for the last 13 years. His work sits at
									the intersection of data analysis, machine learning, and
									cybersecurity. His research asks a simple question with complicated
									answers: how do we build systems we can actually trust with real
									decisions?
								</p>
								<p>
									He has published widely on anomaly detection, applied machine
									learning, and security analytics, and he maintains open-source
									Python tooling used by research labs and security teams alike. In
									the classroom, he is known for courses that treat constraints —
									limited compute, messy data, intermittent power — as part of the
									curriculum rather than obstacles to it.
								</p>
								<p>
									He supervises undergraduate and postgraduate research, consults on
									data and security projects, and writes regularly about the craft
									of honest, reproducible computational work.
								</p>
							</div>
						</Reveal>
					</div>

					<div className="md:col-span-6 md:col-start-7 md:pt-16">
						<ul className="divide-y divide-white/10 border-y border-white/10">
							{expertise.map((e, i) => (
								<Reveal key={e.index} delay={i * 0.08}>
									<li className="group flex gap-6 py-7">
										<span className="font-mono text-[11px] tracking-[0.2em] text-primary">
											{e.index}
										</span>
										<div>
											<h3 className="font-display text-2xl font-medium uppercase tracking-wide transition-colors duration-200 group-hover:text-primary">
												{e.title}
											</h3>
											<p className="mt-2 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
												{e.text}
											</p>
										</div>
									</li>
								</Reveal>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* RESEARCH / PROJECTS */}
			<section id="research" className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]">
				<CroppedWord word="RESEARCH" className="absolute -left-4 top-6 md:-left-10" />
				<div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 md:px-8">
					<Reveal>
						<p className="annotation">02 — Selected work</p>
						<h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
							Research & projects
						</h2>
					</Reveal>

					<div className="mt-16 space-y-20">
						{projects.map((p, i) => (
							<article
								key={p.index}
								className="grid items-start gap-8 md:grid-cols-12"
							>
								{p.image && (
									<Reveal
										delay={0.15}
										y={32}
										className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2 md:col-start-8' : ''}`}
									>
										<MediaFigure
											src={p.image}
											alt={p.title}
											index={`FIG. ${p.index}`}
											caption={p.caption}
											imgClassName="aspect-[3/2]"
										/>
									</Reveal>
								)}
								<Reveal
									className={`${p.image ? 'md:col-span-6' : 'md:col-span-8'} ${
										i % 2 === 1 && p.image ? 'md:order-1' : p.image ? 'md:col-start-7' : ''
									} ${!p.image ? 'md:col-start-3' : ''} md:pt-4`}
								>
									<p className="font-mono text-[11px] tracking-[0.2em] text-primary">
										{p.index} / {p.subtitle}
									</p>
									<h3 className="mt-3 font-display text-3xl font-semibold uppercase tracking-wide md:text-4xl">
										{p.title}
									</h3>
									<p className="mt-4 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
										{p.description}
									</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{p.tags.map((t) => (
											<span
												key={t}
												className="panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
											>
												{t}
											</span>
										))}
									</div>
								</Reveal>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* WRITING */}
			<section id="writing" className="border-t border-white/10">
				<div className="mx-auto max-w-6xl px-5 py-24 md:py-32 md:px-8">
					<Reveal>
						<div className="flex flex-wrap items-end justify-between gap-6">
							<div>
								<p className="annotation">03 — Writing</p>
								<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
									Latest articles
								</h2>
							</div>
							<Link
								to="/blog"
								className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
							>
								All articles
								<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
							</Link>
						</div>
					</Reveal>

					<ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
						{articles.slice(0, 3).map((a, i) => (
							<Reveal key={a.slug} delay={i * 0.08}>
								<li>
									<Link
										to={`/blog/${a.slug}`}
										className="group grid gap-3 py-8 transition-colors duration-200 md:grid-cols-12 md:items-baseline md:gap-6"
									>
										<span className="font-mono text-[11px] tracking-[0.2em] text-primary md:col-span-1">
											{String(i + 1).padStart(2, '0')}
										</span>
										<span className="annotation md:col-span-3">
											{formatArticleDate(a.date)} — {a.category}
										</span>
										<span className="font-display text-2xl font-medium uppercase tracking-wide transition-colors duration-200 group-hover:text-primary md:col-span-7">
											{a.title}
										</span>
										<span className="hidden justify-self-end md:col-span-1 md:block">
											<ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" strokeWidth={1.5} />
										</span>
									</Link>
								</li>
							</Reveal>
						))}
					</ul>
				</div>
			</section>

			{/* CONTACT */}
			<section id="contact" className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]">
				<CroppedWord word="CONTACT" className="absolute -right-4 bottom-0 md:-right-12" wordClassName="translate-y-[14%]" />
				<div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:py-32 md:px-8">
					<div className="md:col-span-7">
						<Reveal>
							<p className="annotation">04 — Contact</p>
							<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">
								Let’s work on
								<br />
								something <span className="text-primary">honest</span>
							</h2>
							<p className="mt-8 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
								Open to research collaboration, supervision inquiries, consulting on
								data and security projects, and invited talks. Email is the fastest
								way to reach me — I read everything, usually within two working days.
							</p>
						</Reveal>
						<Reveal delay={0.15}>
							<a
								href="mailto:hello@abdulbasidbanga.com"
								className="group mt-10 inline-flex h-12 items-center gap-3 bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
							>
								<Mail className="h-4 w-4" strokeWidth={1.5} />
								hello@abdulbasidbanga.com
							</a>
						</Reveal>
					</div>

					<div className="md:col-span-4 md:col-start-9 md:pt-10">
						<Reveal delay={0.2}>
							<dl className="space-y-8">
								<div>
									<dt className="annotation">Office</dt>
									<dd className="mt-2 flex items-start gap-2 text-sm font-light leading-relaxed text-foreground">
										<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
										Department of Computer Science,
										<br />
										Faculty of Computing
									</dd>
								</div>
								<div>
									<dt className="annotation">Office hours</dt>
									<dd className="mt-2 text-sm font-light leading-relaxed text-foreground">
										Tue & Thu, 14:00 – 16:00
										<br />
										or by appointment
									</dd>
								</div>
								<div>
									<dt className="annotation">Elsewhere</dt>
									<dd className="mt-3 flex flex-col gap-2">
										{[
											{ href: 'https://scholar.google.com', label: 'Google Scholar' },
											{ href: 'https://github.com', label: 'GitHub' },
											{ href: 'https://linkedin.com', label: 'LinkedIn' },
											{ href: 'https://orcid.org', label: 'ORCID' },
										].map((l) => (
											<a
												key={l.label}
												href={l.href}
												target="_blank"
												rel="noreferrer"
												className="group inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors duration-200 hover:text-primary"
											>
												{l.label}
												<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
											</a>
										))}
									</dd>
								</div>
							</dl>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	);
}
