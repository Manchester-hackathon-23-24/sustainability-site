import { useQuery } from "@tanstack/react-query";

const LoginButton = () => {
    const loginQuery = useQuery({
        queryKey: ["login"],
        queryFn: () => fetch("http://127.0.0.1:5000/login"),
        enabled: false
    });

    return (
        <button onClick={() => loginQuery.refetch()}>
            Login
        </button>
    );
};

export default LoginButton;