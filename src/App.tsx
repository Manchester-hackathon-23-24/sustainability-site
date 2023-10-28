import Navbar from "./components/Navbar";
import ChallengesList from "./features/challenges/components/ChallengesList";
import Dashboard from "./features/admin/routes/Dashboard";
import { Route, Routes } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

const App = () => {
    // const userQuery = useQuery({
    //     queryKey: ["user"],
    //     queryFn: () => fetch("http://127.0.0.1:5000/get_token").then((res) => res.json()),
    //     onSuccess: (data) => {
    //         console.log(data);
    //         localStorage.setItem("token", data.sub);
    //     }
    // });

    return (
        <div className="py-4 bg-slate-300 min-h-screen h-full">
            <div className="container mx-auto text-white">
                <Navbar />
                <main className="container mx-auto mt-4">
                    <Routes>
                        <Route path="/" element={<ChallengesList />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default App;