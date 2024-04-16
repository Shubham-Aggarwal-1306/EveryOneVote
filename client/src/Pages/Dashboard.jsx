import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Dashboard() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    return (
        <div>
            Hello, {user.name}!
            So, you are a {user.role === "admin" ? "Officer" : "Voter"}.
        </div>
    );
}