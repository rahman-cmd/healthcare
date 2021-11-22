import React from 'react';

import doctor1 from '../../../images/doctor/doctor-1.jpg';
import doctor2 from '../../../images/doctor/doctor-2.jpg'
import doctor3 from '../../../images/doctor/doctor-3.jpg'
import doctor4 from '../../../images/doctor/doctor-4.jpg'
import Expert from '../Expert/Expert';

const doctor = [
    {
        img: doctor1,
        name: 'Richard Seth',
        expertize: 'DMC-'
    },
    {
        img: doctor2,
        name: 'John Anderson',
        expertize: 'DMC, MSC-'
    },
    {
        img: doctor3,
        name: 'John Deo',
        expertize: 'Denturist'
    },
    {
        img: doctor4,
        name: 'Naina Shah',
        expertize: 'Dental Care Cordinator'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Highly Qualified Dentists</h2>
            <p>We have built our dentistry over the strong pillars of 22 MDS surgeons. Our team has expert professionals who are immensely experienced for several years.</p>
            <div className="row">
                {
                    doctor.map(doctor => <Expert
                        key={doctor.name}
                        expert={doctor}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;