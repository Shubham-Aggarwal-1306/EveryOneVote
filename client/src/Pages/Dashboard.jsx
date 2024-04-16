import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Dashboard() {
    const dispatch = useDispatch();
    const { user, isAuthenticated} = useSelector((state) => state.user);
    return isAuthenticated ? (
        user?.role === "user" ? (
            <div>
                <h1>Welcome, {user?.name}</h1>
                <h2>Voter Dashboard</h2>
            </div>
        ) : (
            <div>
                <h1>Welcome, {user?.name}</h1>
                <h2>Officer Dashboard</h2>
            </div>
        )
    ) :
    (
        <div>
            
        </div>
    );
}