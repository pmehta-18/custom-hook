import './toast.css';

export function Toast({error, setError}) {
    return (
        <div className="toast-container" onClick={() => setError(null)}>
            {error}
        </div>
    )
}