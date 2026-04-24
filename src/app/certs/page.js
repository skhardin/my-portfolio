import CertCard from '@/components/CertCard';

export default function Certs() {
    return (
        <div id="certs" className="min-h-screen">
            <div className="bg-white shadow-lg px-15 py-15">
                <h1 className="text-4xl font-bold">Certifications</h1>
            </div>
            <CertCard title="AWS Certified Cloud Practitioner" date="January 2023" credlyUrl="" />
            <CertCard title="Microsoft Certified: Azure Fundamentals" date="December 2023" credlyUrl="" />
            <CertCard title="Microsoft Certified: Azure Fundamentals" date="April 2026" credlyUrl="" />
        </div>
    );
}