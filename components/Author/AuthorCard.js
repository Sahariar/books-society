import Link from "next/link";


const AuthorCard = ({authorData}) => {
    const { _id ,author_name,author_img} = authorData;

    return (
        <div className="card bg-base-100 border-2 hover:shadow-xl my-10">
        <figure className="bg-secondary/10 p-10">
            <img src={author_img} alt={author_name} className="h-60" />
        </figure>
        <div className="card-body">
            <h2 className="card-title capitalize">{author_name}</h2>

           
            <div className="card-actions">
                <button className="btn btn-primary btn-block">
                    <Link href={`/author/${_id}`}>Read More</Link> 
                    </button>
            </div>
        </div>
    </div>
    );
};

export default AuthorCard;