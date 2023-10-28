const PendingChallenge = (props: IChallenge) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={props.image} alt="Challenge" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default PendingChallenge;