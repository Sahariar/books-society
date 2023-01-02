import Image from "next/image";
import Link from "next/link";
import fetaure from "../../public/feaTURE.png";

const FeatureSide = () => {
	return (
		<div className="min-h-screen p-5 bg-white border-l-2">
			<h2 className="uppercase text-2xl text-center my-5">Featured Books</h2>
			<Image src={fetaure} className="w-full" alt="info" />
			<h3 className="uppercase text-xl text-center my-5">
				How to kill your family
			</h3>
			<div>
				<p className="text-sm font-semibold my-3">
					I have killed several people (some brutally, others calmly) and yet I
					currently languish in jail for a murder I did not commit.When I think
					about what I actually did, I feel somewhat sad that nobody will ever
					know about the complex operation that I undertook. Getting away with
					it is highly preferable, of course,{" "}
				</p>
                <button className="btn btn-primary btn-block">
                    <Link href={`/books/63b26764f388c893a41b7686`}>Read More</Link> 
                    </button>
			</div>
		</div>
	);
};

export default FeatureSide;
