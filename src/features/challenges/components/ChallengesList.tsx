import Challenge from "./Challenge";

const ChallengesList = () => {
    return (
        <div className="flex space-x-4 w-full">
            <Challenge
                id="1"
                title="Challenge name"
                description="Challenge description"
                image="https://picsum.photos/300/300"
                isDonation={true}
            />
            <Challenge
                id="2"
                title="Challenge name"
                description="Challenge description"
                image="https://picsum.photos/300/300"
                isDonation={true}
            />
        </div>
    );
};

export default ChallengesList;