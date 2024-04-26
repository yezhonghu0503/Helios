import type { ReactElement } from 'react'

export default function Editor(): ReactElement {
	return (
		<div className='h-[100vh] w-[250px] bg-[rgb(38,38,36)]'>
			<div className='h-[100px] w-[100%] border-b-[1px] border-neutral-700 p-2 text-neutral-400'>
				Frame
				<div className=' text-sm'>Size</div>
			</div>
		</div>
	)
}
