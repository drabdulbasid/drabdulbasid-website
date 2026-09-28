import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-white/10">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
				<div>
					<p className="font-display text-2xl font-semibold uppercase tracking-wide">
						Dr. Abdulbasid Banga
					</p>
					<p className="annotation mt-3">
						Assistant Professor — Data, ML & Security
					</p>
					<div className="mt-6 flex items-center gap-4">
						{[
							{ href: 'mailto:hello@abdulbasidbanga.com', icon: Mail, label: 'Email' },
							{ href: 'https://github.com', icon: Github, label: 'GitHub' },
							{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
							{ href: 'https://scholar.google.com', icon: GraduationCap, label: 'Google Scholar' },
						].map(({ href, icon: Icon, label }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel="noreferrer"
								className="flex h-11 w-11 items-center justify-center border border-white/10 text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
							>
								<Icon className="h-4 w-4" strokeWidth={1.5} />
							</a>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-2 md:items-end">
					<nav className="flex flex-wrap gap-x-6 gap-y-2">
						{[
							{ to: '/#about', label: 'About' },
							{ to: '/#research', label: 'Research' },
							{ to: '/publications', label: 'Publications' },
							{ to: '/certifications', label: 'Certifications' },
							{ to: '/blog', label: 'Blog' },
							{ to: '/#contact', label: 'Contact' },
						].map((l) => (
							<Link
								key={l.label}
								to={l.to}
								className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
							>
								{l.label}
							</Link>
						))}
					</nav>
					<p className="annotation mt-4">© {year} Abdulbasid Banga. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
