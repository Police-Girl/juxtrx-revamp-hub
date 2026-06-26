import { Navigate } from 'react-router-dom';

/** Legacy route — redirects to systems & operations */
const ServicePharmacy = () => <Navigate to="/services/systems" replace />;

export default ServicePharmacy;
