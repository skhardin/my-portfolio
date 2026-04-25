export default function CertCard({ title, date, credlyUrl }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4">
            <h2>{title}</h2>
            <p>Issued {date}</p>
            <a href={credlyUrl} target="_blank" rel="noopener noreferrer">
                View Certificate
            </a>
        </div>
    );
}