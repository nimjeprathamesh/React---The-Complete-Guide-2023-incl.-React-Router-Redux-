import { membershipData } from '../../Dummy_Data/MembershipData.jsx';
import './Membership.css';
import MembershipContent from './MembershipContent.jsx';

export default function Membership() {
    return (
        <section id="homePageMember">
			<div className="row">
				<h1><b>Our</b> Membership</h1>
			</div>
			<div className="row member-area">
                {membershipData.map((membership, index) => (
                    <MembershipContent key={index} membership={membership} />
                ))}
			</div>
		</section>
    );
}