
const Loading = () => {
    return (
        <div className="flex flex-col rounded shadow-md min-h-screen bg-success text-success-content">
			<div className="rounded-t">
            
                    <div className="w-80 min-h-screen mx-auto my-12 flex flex-col justify-center items-center">
                    <svg
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						version="1.1"
						viewBox="0 0 14 14"
						className="w-24 h-24 fill-primary py-5 animate-bounce"
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
					<h2 className="text-5xl flex">
						L
						<span className="animate-spin">
                    O
						</span>
						<span className="animate-pulse">a</span>din{" "}
						<span className="animate-bounce">g</span>{" "}
					</h2>
				</div>
                
				
			</div>
		</div>
    );
};

export default Loading;