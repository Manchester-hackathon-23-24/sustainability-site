import PendingChallenge from "../components/PendingChallenge";

const Dashboard = () => {
    return (
        <div className="flex flex-col space-y-4">
            <PendingChallenge 
                id="1"
                title="Challenge name"
                description="Challenge description"
                image="https://picsum.photos/300/300"
                isDonation={true}
            />
        </div>
    );
};

export default Dashboard;