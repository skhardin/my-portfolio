export default function CertCard({ title, date, credlyUrl }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Issued {date}</p>
            <a href={credlyUrl} target="_blank" rel="noopener noreferrer">
                View Certificate
            </a>
        </div>
    );
}