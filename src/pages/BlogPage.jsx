import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CroppedWord from '@/components/CroppedWord';
import { articles, formatArticleDate } from '@/data/articles';

export default function BlogPage() {
	return (
		<>
			<Helmet>
				<title>Blog & Articles — Dr. Abdulbasid Banga</title>
				<meta
					name="description"
					content="Articles by Dr. Abdulbasid Banga on data analysis, machine learning, cybersecurity, Python, and teaching computing in low-resource settings."
				/>
			</Helmet>

			<section className="relative overflow-hidden pt-16">
				<CroppedWord word="ARCHIVE" className="absolute -left-4 top-20 md:-left-10" />
				<div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 md:px-8 md:pt-28">
					<Reveal>
						<p className="annotation flex items-center gap-3">
							<span className="inline-block h-px w-10 bg-primary" />
							Writing & notes
						</p>
						<h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
							The blog
						</h1>
						<p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
							Essays and tutorials on data, models, security, and teaching — written
							for practitioners who read the footnotes.
						</p>
					</Reveal>

					<ul className="mt-16 divide-y divide-white/10 border-y border-white/10">
						{articles.map((a, i) => (
							<Reveal key={a.slug} delay={i * 0.06}>
								<li>
									<Link
										to={`/blog/${a.slug}`}
										className="group grid gap-3 py-9 md:grid-cols-12 md:items-baseline md:gap-6"
									>
										<span className="font-mono text-[11px] tracking-[0.2em] text-primary md:col-span-1">
											{String(i + 1).padStart(2, '0')}
										</span>
										<span className="annotation md:col-span-3">
											{formatArticleDate(a.date)}
											<br />
											{a.category} · {a.readTime} min
										</span>
										<span className="md:col-span-7">
											<span className="block font-display text-2xl font-medium uppercase tracking-wide transition-colors duration-200 group-hover:text-primary md:text-3xl">
												{a.title}
											</span>
											<span className="mt-2 block max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
												{a.excerpt}
											</span>
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
		</>
	);
}
