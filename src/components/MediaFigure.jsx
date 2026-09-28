import React from 'react';
import { cn } from '@/lib/utils';

export default function MediaFigure({ src, alt, index, caption, className, imgClassName }) {
	return (
		<figure className={className}>
			<div className="panel overflow-hidden">
				<img
					src={src}
					alt={alt}
					loading="lazy"
					className={cn('h-full w-full object-cover', imgClassName)}
				/>
			</div>
			{caption && (
				<figcaption className="mt-3 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
					<span className="text-primary">{index}</span>
					<span>{caption}</span>
				</figcaption>
			)}
		</figure>
	);
}
