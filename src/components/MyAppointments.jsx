import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const MyAppointments = () => {
    const value = useContext(AuthContext);

    return (
        <div>
            My Appointments
            {
                value
            }
        </div>
    );
};

export default MyAppointments;