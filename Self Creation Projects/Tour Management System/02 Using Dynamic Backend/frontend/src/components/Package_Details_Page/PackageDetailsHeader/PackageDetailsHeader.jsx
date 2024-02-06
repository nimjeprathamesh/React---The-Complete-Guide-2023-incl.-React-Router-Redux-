import React from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import './PackageDetailsHeader.css';

const requestConfig = {};

export default function PackageDetailsHeader() {
    const { id } = useParams();
    const {
        data: packagesData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/packages', requestConfig, []);

    const selectedPackage = packagesData.find((packages) => packages.id === id);

    if (!selectedPackage) {
        return <div>Destination not found</div>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(http://localhost:3000/${selectedPackage.image})`,
    };

    return (
        <section id="packageDetailsHeader" style={backgroundImageStyle}>
            <header className="bottom-header">
                <div className="container">
                    <div className="row">
                        {isLoading && (<p className="center">Fetching tour packages...</p>)}
                        {error && (<Error message='Failed to fetch package image.' />)}
                        {!error && (<h1>{selectedPackage.title}</h1>)}
                    </div>
                </div>
            </header>
        </section>
    );
}