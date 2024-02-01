import LowerFooter from './LowerFooter/LowerFooter.jsx';
import MiddleFooter from './MiddleFooter/MiddleFooter.jsx';
import UpperFooter from './UpperFooter/UpperFooter.jsx';

export default function Footer() {
    return (
        <section id="footer">
			<UpperFooter />
			<MiddleFooter />
			<LowerFooter />
		</section>
    );
}