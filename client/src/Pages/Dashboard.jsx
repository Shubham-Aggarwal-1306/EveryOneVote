import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Dashboard() {
    const dispatch = useDispatch();
    const { user, isAuthenticated} = useSelector((state) => state.user);
    return isAuthenticated ? (
        <div>
            Hello, {user?.name}!
            So, you are a {user?.role === "admin" ? "Officer" : "Voter"}.
        </div>
    ) :
    (
        <div>

        </div>
    );
}