import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MediaFigure from '@/components/MediaFigure';
import { getArticle, formatArticleDate } from '@/data/articles';

export default function ArticlePage() {
	const { slug } = useParams();
	const article = getArticle(slug);

	if (!article) return <Navigate to="/blog" replace />;

	return (
		<>
			<Helmet>
				<title>{article.title} — Dr. Abdulbasid Banga</title>
				<meta name="description" content={article.excerpt} />
			</Helmet>

			<article className="pt-16">
				<div className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:pt-24">
					<Reveal>
						<Link
							to="/blog"
							className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-200 hover:text-primary"
						>
							<ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={1.5} />
							All articles
						</Link>

						<p className="annotation mt-10">
							{formatArticleDate(article.date)} — {article.category} · {article.readTime} min read
						</p>
						<h1 className="mt-5 font-display text-4xl font-semibold uppercase leading-[0.98] tracking-tight md:text-6xl">
							{article.title}
						</h1>
						<p className="mt-6 border-l-2 border-primary pl-5 text-lg font-light leading-relaxed text-muted-foreground">
							{article.excerpt}
						</p>
					</Reveal>

					{article.image && (
						<Reveal delay={0.15} y={28}>
							<MediaFigure
								src={article.image}
								alt={article.title}
								index="FIG. 01"
								caption={article.caption}
								className="mt-12"
								imgClassName="aspect-[3/2]"
							/>
						</Reveal>
					)}

					<Reveal delay={0.2}>
						<div className="mt-12 space-y-7">
							{article.body.map((block, i) => {
								if (block.type === 'h2') {
									return (
										<h2
											key={i}
											className="pt-4 font-display text-2xl font-semibold uppercase tracking-wide text-foreground md:text-3xl"
										>
											{block.text}
										</h2>
									);
								}
								if (block.type === 'quote') {
									return (
										<blockquote
											key={i}
											className="border-l-2 border-primary py-1 pl-6 font-display text-xl font-medium uppercase leading-snug tracking-wide text-foreground md:text-2xl"
										>
											{block.text}
										</blockquote>
									);
								}
								return (
									<p key={i} className="text-base font-light leading-[1.85] text-foreground/85">
										{block.text}
									</p>
								);
							})}
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="panel mt-16 flex flex-col gap-4 p-7 md:flex-row md:items-center md:justify-between">
							<div>
								<p className="annotation">Written by</p>
								<p className="mt-2 font-display text-xl font-semibold uppercase tracking-wide">
									Dr. Abdulbasid Banga
								</p>
								<p className="mt-1 text-sm font-light text-muted-foreground">
									Assistant Professor — Data, ML & Security
								</p>
							</div>
							<a
								href="mailto:hello@abdulbasidbanga.com"
								className="inline-flex h-11 items-center justify-center border border-primary/60 px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
							>
								Reply by email
							</a>
						</div>
					</Reveal>
				</div>
			</article>
		</>
	);
}
