import React from 'react';
import { cn } from '@/lib/utils';

export default function CroppedWord({ word, className, wordClassName }) {
	return (
		<div
			aria-hidden="true"
			className={cn('pointer-events-none select-none overflow-hidden', className)}
		>
			<span
				className={cn(
					'block whitespace-nowrap font-display text-[clamp(7rem,24vw,22rem)] font-semibold uppercase leading-[0.78] tracking-tight text-white/[0.045]',
					wordClassName
				)}
			>
				{word}
			</span>
		</div>
	);
}
