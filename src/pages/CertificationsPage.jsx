import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Clock, MapPin, FileText, Building2, Download } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CroppedWord from '@/components/CroppedWord';
import { certifications } from '@/data/publications';

const totalHours = certifications.reduce((sum, c) => sum + c.hours, 0);

export default function CertificationsPage() {
	return (
		<>
			<Helmet>
				<title>Certifications — Dr. Abdulbasid Banga</title>
				<meta
					name="description"
					content="Professional training certifications of Dr. Abdulbasid Banga — data mining with Weka, ethical hacking, and Internet of Things (IoT) programming with Arduino."
				/>
			</Helmet>

			{/* HEADER */}
			<section className="relative overflow-hidden pt-32 md:pt-40">
				<CroppedWord
					word="CERTS"
					className="absolute -right-4 top-24 md:-right-12"
					wordClassName="translate-y-[10%]"
				/>
				<div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
					<Reveal>
						<p className="annotation flex items-center gap-3">
							<span className="inline-block h-px w-10 bg-primary" />
							Certifications
						</p>
					</Reveal>
					<Reveal delay={0.1}>
						<h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
							Professional <span className="text-primary">training</span> credentials
						</h1>
					</Reveal>
					<Reveal delay={0.2}>
						<p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
							{certifications.length} training certifications completed through the Computing
							and Informatics College — covering data mining, ethical hacking, and the
							Internet of Things, issued under the Dean&apos;s office.
						</p>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
							{[
								{ value: certifications.length, label: 'Certifications' },
								{ value: totalHours, label: 'Training hours' },
								{ value: '2020', label: 'Year completed' },
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

			{/* CERTIFICATIONS LIST */}
			<section id="certifications" className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]">
				<div className="mx-auto max-w-6xl px-5 py-24 md:py-32 md:px-8">
					<Reveal>
						<p className="annotation">01 — Credentials</p>
						<h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none tracking-tight md:text-5xl">
							Completed training
						</h2>
						<p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
							Each certification was issued by the Computing and Informatics College and
							signed by the Dean, documenting hands-on training in the listed discipline.
						</p>
					</Reveal>

					<ol className="mt-14 space-y-6">
						{certifications.map((c, i) => (
							<Reveal key={c.id} delay={i * 0.1} y={24}>
								<li className="panel grid gap-6 p-6 md:grid-cols-12 md:gap-8 md:p-8">
									<div className="md:col-span-1">
										<span className="inline-flex h-12 w-12 items-center justify-center bg-primary/10 text-primary ring-1 ring-inset ring-primary/30">
											<Award className="h-6 w-6" strokeWidth={1.5} />
										</span>
									</div>

									<div className="md:col-span-7">
										<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
											Certificate {String(i + 1).padStart(2, '0')}
										</p>
										<h3 className="mt-3 font-display text-2xl font-medium uppercase leading-snug tracking-wide text-foreground md:text-3xl">
											{c.title}
										</h3>
										<dl className="mt-6 grid gap-4 sm:grid-cols-2">
											<div className="flex items-center gap-2.5">
												<Clock className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
												<dt className="sr-only">Duration</dt>
												<dd className="text-sm font-light text-muted-foreground">
													{c.hours} hours training course
												</dd>
											</div>
											<div className="flex items-center gap-2.5">
												<FileText className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
												<dt className="sr-only">Date</dt>
												<dd className="text-sm font-light text-muted-foreground">{c.date}</dd>
											</div>
											<div className="flex items-center gap-2.5">
												<MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
												<dt className="sr-only">Location</dt>
												<dd className="text-sm font-light text-muted-foreground">{c.location}</dd>
											</div>
											<div className="flex items-center gap-2.5">
												<Building2 className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
												<dt className="sr-only">Issuer</dt>
												<dd className="text-sm font-light text-muted-foreground">{c.issuer}</dd>
											</div>
										</dl>
									</div>

									<div className="flex flex-col justify-center border-t border-white/10 pt-5 md:col-span-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
										<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
											Issued by
										</p>
										<p className="mt-2 font-display text-lg font-medium text-foreground">
											{c.signatory}
										</p>
										<p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
											{c.role}
										</p>
										<a
											href={c.downloadUrl}
											download
											target="_blank"
											rel="noreferrer"
											className="group mt-5 inline-flex min-h-11 w-fit items-center gap-2 border border-primary/40 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary transition-colors duration-200 hover:border-primary hover:bg-primary/10 active:scale-[0.98]"
										>
											<Download className="h-4 w-4" strokeWidth={1.5} />
											Download certificate
										</a>
									</div>
								</li>
							</Reveal>
						))}
					</ol>
				</div>
			</section>

			{/* FOOTNOTE / CTA */}
			<section className="border-t border-white/10">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
					<p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground">
						Looking for peer-reviewed work? Browse the full publications record — journal
						articles, conference papers, and indexing details.
					</p>
					<Link
						to="/publications"
						className="group inline-flex h-12 items-center gap-2 border border-white/15 px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:scale-[0.98]"
					>
						View publications
						<ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
					</Link>
				</div>
			</section>
		</>
	);
}
