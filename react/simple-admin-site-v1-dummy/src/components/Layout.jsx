import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export function Layout({ children }) {
    const user = useContext(UserContext);

    if (!user.isAllowed) {
        return <Navigate to="/login" />
    }

    return (
        <div className="deneme">
            <Outlet>
                {children}
            </Outlet>

        </div>
    )
}