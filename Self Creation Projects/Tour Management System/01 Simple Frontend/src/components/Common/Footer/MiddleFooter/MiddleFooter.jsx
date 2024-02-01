import './MiddleFooter.css';
import DescriptionArea from './MiddleFooterArea/DescriptionArea.jsx';
import DestinationsArea from './MiddleFooterArea/DestinationsArea.jsx';
import PackagesArea from './MiddleFooterArea/PackagesArea.jsx';
import QuickLinks from './MiddleFooterArea/QuickLinks.jsx';

export default function MiddleFooter() {
    return (
        <div className="row middlefooter">
            <DescriptionArea />
            <QuickLinks />
            <PackagesArea />
            <DestinationsArea />
        </div>
    );
}