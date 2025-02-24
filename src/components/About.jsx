import Image from '../images/github-ss.jpeg'
import file from '../images/Resume.pdf'

export default function Example() {
	return (
		<div className='overflow-hidden bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:pt-4 lg:pr-8'>
						<div className='lg:max-w-lg'>
							<h2 className='text-base/7 font-semibold mini-text'>About Me</h2>
							<p className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
								Code Addict
							</p>
							<p className='mt-6 text-3xl text-gray-600'>
								Continuous learning and collaboration for impactful and
								innovative solutions
							</p>
							<dl className='mt-5 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none'>
								Aside my expertise in JavaScript, React, and more, I enjoy
								staying up-to-date with the latest industry trends and
								continuously expanding my knowledge. In addition, I believe that
								the best solutions come from diverse perspectives. I am equally
								dedicated to maintaining exceptional quality and
								professionalism.
							</dl>
						</div>
						<button className='btn mt-5.5' onClick={() => window.open(file)}>
							Read Me
						</button>
					</div>
					<img
						alt='github screenshot'
						src={Image}
						width={2432}
						height={1500}
						className='w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
					/>
				</div>
			</div>
		</div>
	)
}
