import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
	{ to: '/#about', label: 'About' },
	{ to: '/#research', label: 'Research' },
	{ to: '/publications', label: 'Publications' },
	{ to: '/certifications', label: 'Certifications' },
	{ to: '/#writing', label: 'Writing' },
	{ to: '/blog', label: 'Blog' },
	{ to: '/#contact', label: 'Contact' },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<div className="border-b border-white/10 bg-background/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
				<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
					<Link
						to="/"
						className="font-display text-lg font-semibold uppercase tracking-wide text-foreground"
						onClick={() => setOpen(false)}
					>
						A. Banga<span className="text-primary">.</span>
					</Link>

					<nav className="hidden items-center gap-8 md:flex">
						{links.map((l) => (
							<Link
								key={l.label}
								to={l.to}
								className={cn(
									'font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-200 hover:text-foreground',
									(l.to === '/blog' && location.pathname.startsWith('/blog')) ||
									(l.to === '/publications' && location.pathname.startsWith('/publications')) ||
									(l.to === '/certifications' && location.pathname.startsWith('/certifications'))
										? 'text-primary'
										: ''
								)}
							>
								{l.label}
							</Link>
						))}
						<a
							href="mailto:hello@abdulbasidbanga.com"
							className="border border-primary/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
						>
							Email me
						</a>
					</nav>

					<button
						type="button"
						aria-label={open ? 'Close menu' : 'Open menu'}
						onClick={() => setOpen((v) => !v)}
						className="flex h-11 w-11 items-center justify-center text-foreground md:hidden"
					>
						{open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
					</button>
				</div>

				{open && (
					<nav className="border-t border-white/10 px-5 pb-6 pt-4 md:hidden">
						<ul className="flex flex-col gap-1">
							{links.map((l) => (
								<li key={l.label}>
									<Link
										to={l.to}
										onClick={() => setOpen(false)}
										className="block py-3 font-display text-2xl font-medium uppercase tracking-wide text-foreground"
									>
										{l.label}
									</Link>
								</li>
							))}
							<li className="pt-3">
								<a
									href="mailto:hello@abdulbasidbanga.com"
									className="inline-block border border-primary/60 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary"
								>
									Email me
								</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
