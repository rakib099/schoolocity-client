import React, { useEffect, useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('https://schoolocity-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));

    }, [])

    return (
        <div className='side-bar text-center pt-4'>
            <h4 className='mb-3'>Available Classes</h4>
            {
                categories.map(ct => <Link
                    to={`/classes/${ct.id}`}
                    key={ct.id}>
                    <p>{ct.title}</p>
                </Link>)
            }
        </div>
    );
};

export default SideBar;