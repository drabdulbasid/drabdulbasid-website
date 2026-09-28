import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Award, Clock, MapPin, FileText } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CroppedWord from '@/components/CroppedWord';
import { cn } from '@/lib/utils';
import {
	publications,
	certifications,
	indexingTiers,
	formatPubDate,
	formatPubDateShort,
	indexingBadge,
} from '@/data/publications';

function authorPositionLabel(p) {
	if (p.totalAuthors === 1) return 'Sole author';
	const ordinals = [
		'First',
		'Second',
		'Third',
		'Fourth',
		'Fifth',
		'Sixth',
		'Seventh',
		'Eighth',
	];
	const ord = ordinals[p.position - 1] || `${p.position}th`;
	return `${ord} of ${p.totalAuthors} authors`;
}

function badgeClass(indexing) {
	const b = indexingBadge(indexing);
	if (b === 'Q1') return 'border-primary/50 text-primary';
	if (b === 'Q2') return 'border-sky-400/40 text-sky-300';
	if (b === 'Q3') return 'border-emerald-400/40 text-emerald-300';
	if (b === 'Q4') return 'border-amber-400/40 text-amber-300';
	if (b === 'Scopus') return 'border-violet-400/40 text-violet-300';
	if (b === 'Conference') return 'border-rose-400/40 text-rose-300';
	if (b === 'National') return 'border-cyan-400/40 text-cyan-300';
	return 'border-white/20 text-muted-foreground';
}

export default function PublicationsPage() {
	const [tier, setTier] = useState('all');

	const filtered = useMemo(() => {
		const list = tier === 'all' ? publications : publications.filter((p) => p.indexing === tier);
		return [...list].sort((a, b) => b.date.localeCompare(a.date));
	}, [tier]);

	// Group filtered publications by year for display.
	const grouped = useMemo(() => {
		const map = new Map();
		for (const p of filtered) {
			if (!map.has(p.year)) map.set(p.year, []);
			map.get(p.year).push(p);
		}
		return [...map.entries()].sort((a, b) => b[0] - a[0]);
	}, [filtered]);

	const counts = useMemo(() => {
		const c = { all: publications.length };
		for (const p of publications) c[p.indexing] = (c[p.indexing] || 0) + 1;
		return c;
	}, []);

	const firstAuthorCount = useMemo(
		() => publications.filter((p) => p.position === 1).length,
		[]
	);
	const q1Count = useMemo(
		() => publications.filter((p) => p.indexing === 'SCIE / ISI Q1').length,
		[]
	);

	return (
		<>
			<Helmet>
				<title>Publications & Certifications — Dr. Abdulbasid Banga</title>
				<meta
					name="description"
					content="Peer-reviewed publications, conference papers, and professional certifications of Dr. Abdulbasid Banga — data analysis, machine learning, cybersecurity, and cryptography research."
				/>
			</Helmet>

			{/* HEADER */}
			<section className="relative overflow-hidden pt-32 md:pt-40">
				<CroppedWord
					word="PAPERS"
					className="absolute -right-4 top-24 md:-right-12"
					wordClassName="translate-y-[10%]"
				/>
				<div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
					<Reveal>
						<p className="annotation flex items-center gap-3">
							<span className="inline-block h-px w-10 bg-primary" />
							Publications &amp; Certifications
						</p>
					</Reveal>
					<Reveal delay={0.1}>
						<h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
							A record of <span className="text-primary">published</span> work
						</h1>
					</Reveal>
					<Reveal delay={0.2}>
						<p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
							{publications.length} peer-reviewed journal articles and conference papers
							across cybersecurity, cryptography, machine learning, and applied computing —
							plus professional training certifications in data mining, ethical hacking,
							and the Internet of Things.
						</p>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
							{[
								{ value: publications.length, label: 'Publications' },
								{ value: firstAuthorCount, label: 'First / sole author' },
								{ value: q1Count, label: 'Q1 journals' },
								{ value: certifications.length, label: 'Certifications' },
							].map((s) => (
								<div key={s.label} className="bg-background px-5 py-6">
									<p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
										{s.value}
									</p>
									<p className="annotation mt-2">{s.label}</p>
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</section>

			{/* PUBLICATIONS */}
			<section id="publications" className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]">
				<div className="mx-auto max-w-6xl px-5 py-24 md:py-32 md:px-8">
					<Reveal>
						<p className="annotation">01 — Publications</p>
						<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
							Peer-reviewed work
						</h2>
					</Reveal>

					{/* Filters */}
					<Reveal delay={0.1}>
						<div className="mt-10 flex flex-wrap gap-2">
							{indexingTiers.map((t) => {
								const count = counts[t.key] || 0;
								if (t.key !== 'all' && count === 0) return null;
								const active = tier === t.key;
								return (
									<button
										key={t.key}
										type="button"
										onClick={() => setTier(t.key)}
										className={cn(
											'inline-flex h-9 items-center gap-2 border px-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-200',
											active
												? 'border-primary bg-primary text-primary-foreground'
												: 'border-white/15 text-muted-foreground hover:border-primary/60 hover:text-foreground'
										)}
									>
										{t.label}
										<span className={cn('tabular-nums', active ? 'opacity-70' : 'opacity-50')}>
											{count}
										</span>
									</button>
								);
							})}
						</div>
					</Reveal>

					{/* List grouped by year */}
					<div className="mt-14 space-y-16">
						{grouped.map(([year, items]) => (
							<div key={year}>
								<Reveal>
									<div className="flex items-baseline gap-4 border-b border-white/10 pb-4">
										<h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-primary">
											{year}
										</h3>
										<span className="annotation">{items.length} {items.length === 1 ? 'paper' : 'papers'}</span>
									</div>
								</Reveal>

								<ol className="mt-2 divide-y divide-white/10">
									{items.map((p, i) => (
										<Reveal key={p.id} delay={Math.min(i * 0.05, 0.3)}>
											<li className="group grid gap-4 py-7 md:grid-cols-12 md:gap-6">
												<div className="md:col-span-2">
													<p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
														{formatPubDateShort(p.date)}
													</p>
													<p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
														{authorPositionLabel(p)}
													</p>
												</div>

												<div className="md:col-span-8">
													<h4 className="font-display text-xl font-medium leading-snug tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary md:text-2xl">
														{p.title}
													</h4>
													<p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
														{p.venue}
														{p.publisher ? <span className="text-muted-foreground/60"> · {p.publisher}</span> : null}
													</p>
													<p className="mt-2 text-xs font-light text-muted-foreground/70">
														{p.authors}
													</p>
													<div className="mt-4 flex flex-wrap items-center gap-3">
														<span
															className={cn(
																'inline-flex items-center border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]',
																badgeClass(p.indexing)
															)}
														>
															{indexingBadge(p.indexing)}
														</span>
														{p.doi && (
															<a
																href={`https://doi.org/${p.doi}`}
																target="_blank"
																rel="noreferrer"
																className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 hover:text-primary"
															>
																DOI: {p.doi}
																<ExternalLink className="h-3 w-3" strokeWidth={1.5} />
															</a>
														)}
													</div>
												</div>

												<div className="flex items-start md:col-span-2 md:justify-end">
													<a
														href={p.link}
														target="_blank"
														rel="noreferrer"
														aria-label={`Open "${p.title}"`}
														className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.96]"
													>
														<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
													</a>
												</div>
											</li>
										</Reveal>
									))}
								</ol>
							</div>
						))}
						{grouped.length === 0 && (
							<p className="py-16 text-center text-sm font-light text-muted-foreground">
								No publications in this category.
							</p>
						)}
					</div>
				</div>
			</section>

			{/* CERTIFICATIONS */}
			<section id="certifications" className="relative overflow-hidden border-t border-white/10">
				<CroppedWord word="CERTS" className="absolute -left-4 bottom-0 md:-left-10" wordClassName="translate-y-[14%]" />
				<div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 md:px-8">
					<Reveal>
						<p className="annotation">02 — Certifications</p>
						<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
							Professional training
						</h2>
						<p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
							Training courses completed through the Computing and Informatics College,
							issued under the Dean&apos;s office.
						</p>
					</Reveal>

					<div className="mt-14 grid gap-6 md:grid-cols-3">
						{certifications.map((c, i) => (
							<Reveal key={c.id} delay={i * 0.1} y={24}>
								<article className="panel flex h-full flex-col p-6">
									<div className="flex items-center justify-between">
										<span className="inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary ring-1 ring-inset ring-primary/30">
											<Award className="h-5 w-5" strokeWidth={1.5} />
										</span>
										<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
											{String(i + 1).padStart(2, '0')}
										</span>
									</div>

									<h3 className="mt-5 font-display text-lg font-medium uppercase leading-snug tracking-wide text-foreground">
										{c.title}
									</h3>

									<dl className="mt-5 space-y-3 text-sm font-light text-muted-foreground">
										<div className="flex items-center gap-2">
											<Clock className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
											<dt className="sr-only">Duration</dt>
											<dd>{c.hours} hours training course</dd>
										</div>
										<div className="flex items-center gap-2">
											<FileText className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
											<dt className="sr-only">Date</dt>
											<dd>{c.date}</dd>
										</div>
										<div className="flex items-start gap-2">
											<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
											<dt className="sr-only">Location</dt>
											<dd>{c.location}</dd>
										</div>
									</dl>

									<div className="mt-auto border-t border-white/10 pt-4">
										<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
											Issued by
										</p>
										<p className="mt-1 text-sm font-light text-foreground">{c.signatory}</p>
										<p className="text-xs font-light text-muted-foreground">{c.role}</p>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* FOOTNOTE / CTA */}
			<section className="border-t border-white/10 bg-white/[0.02]">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
					<p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground">
						Full publication records, citation metrics, and author profiles are available on
						Google Scholar, ORCID, and IEEE Xplore.
					</p>
					<Link
						to="/#contact"
						className="group inline-flex h-12 items-center gap-2 border border-white/15 px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:scale-[0.98]"
					>
						Research collaboration
						<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
					</Link>
				</div>
			</section>
		</>
	);
}
