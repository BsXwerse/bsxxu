'use client';

import { cm } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import ModelView from './model-view';

//TODO 删除
type CarouselProps = {
	containerWidth: number;
	containerHeight: number;
	imageWidth: number;
	imageHeight: number;
	delay?: number;
	duration?: number;
	containerClassName?: React.ComponentPropsWithoutRef<'div'>['className'];
	dataSource: any[];
};

export default function Carousel({
	containerHeight,
	containerWidth,
	imageHeight,
	imageWidth,
	delay = 3,
	duration = 0.5,
	containerClassName,
	dataSource,
}: CarouselProps) {
	const [index, setIndex] = useState(1);

	const list = useMemo(
		() => [dataSource.at(-1), ...dataSource, dataSource[0], dataSource[1]],
		[dataSource],
	);

	useEffect(() => {
		setTimeout(
			() => setIndex((index + 1) % (list.length - 1) || 1),
			index === list.length - 2 ? duration * 1000 : delay * 1000,
		);
	}, [index, list.length, delay, duration]);

	return (
		<div
			className={cm(
				'flex items-center justify-center overflow-hidden',
				containerClassName,
			)}
			style={{ width: containerWidth, height: containerHeight }}
		>
			<div style={{ width: imageWidth, height: imageHeight }}>
				<div
					className="flex"
					style={{
						width: `${100 * list.length}%`,
						height: imageHeight,
						transform: `translateX(-${(100 / list.length) * index}%)`,
						transition: index === 1 ? '' : 'transform 0.3s',
					}}
				>
					{list.map((work, idx) => {
						if (!work) return;
						return (
							<ModelView
								key={work}
								content={
									<div className="max-h-[90vh] overflow-auto relative scrollbar-thin">
										<Image
											alt={`artwork-${idx}`}
											className="rounded-md"
											src={work.data}
										/>
										{work.pixivUrl && (
											<Link target="_blank" href={work.pixivUrl}>
												<div className="fixed top-5 right-10 rounded bg-bk p-2 font-semibold flex items-center">
													Pixiv
													<MdArrowOutward />
												</div>
											</Link>
										)}
									</div>
								}
							>
								<Image
									alt={`artwork-${idx}`}
									width={imageWidth}
									height={imageHeight}
									className={cm(
										'object-cover rounded-md hover:cursor-pointer',
										{
											['scale-125 shadow-md']: idx === index,
											['transition-all duration-[300]']: index !== 1,
										},
									)}
									src={work.data}
								/>
							</ModelView>
						);
					})}
				</div>
			</div>
		</div>
	);
}
