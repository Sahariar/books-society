const Logo = ({ width, height, color }) => {
	return (
		<>
			<a className="normal-case text-xl">
				<span className="flex items-center gap-2 font-bold text-indigo-900">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						version="1.1"
						viewBox="0 0 14 14"
						className={`w-${width} h-${height} fill-primary`}
					>
						<path
							fill="none"
							stroke="none"
							d="M0 0H14V14H0z"
							visibility="hidden"
						></path>
						<path
							fillOpacity="1"
							stroke="none"
							d="M0 0v10c2 3 5.25 2.04 5.25 4h1V4C6.25 1.017 2 3 0 0zm14 0c-2 3-6.25 1.045-6.25 4v10h1c0-1.98 3.25-1 5.25-4z"
						></path>
					</svg>
					<span className={`${color} logo-title`}>
						Books Society
					</span>
				</span>
			</a>
		</>
	);
};

export default Logo;
