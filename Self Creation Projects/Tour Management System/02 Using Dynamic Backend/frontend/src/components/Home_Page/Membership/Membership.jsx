import useHttp from '../../../hooks/useHttp.jsx';
import Error from '../../UI/Error/Error.jsx';
import './Membership.css';
import MembershipContent from './MembershipContent.jsx';

const requestConfig = {};

export default function Membership() {
    const {
        data: membershipData,
        isLoading,
        error
    } = useHttp('http://localhost:3000/memberships', requestConfig, []);

    return (
        <section id="homePageMember">
			<div className="row">
				<h1><b>Our</b> Membership</h1>
			</div>
			<div className="row member-area">
                {isLoading && (<p className="center">Fetching memberships...</p>)}
                {!membershipData && (<Error message='No memberships found.' />)}
                {error && (<Error message='Failed to fetch memberships.' />)}
                {!error && (
                    membershipData.map((membership, index) => (
                        <MembershipContent
                            key={index}
                            imgSrc={`http://localhost:3000/${membership.image}`}
                            type={membership.type}
                            location={membership.location}
                            price={membership.price}
                        />
                    )
                ))}
			</div>
		</section>
    );
}