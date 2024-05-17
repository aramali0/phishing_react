import React, { useState } from 'react';

const Url = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.example.com/check-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data.isPhishing);
    } catch (err) {
      setError('Une erreur s\'est produite lors de la vérification de l\'URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl mb-6">Vérificateur d'URL de Phishing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Entrez l'URL à vérifier"
          required
          className="p-2 mb-4 w-80 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`p-2 w-40 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
        >
          {loading ? 'Vérification en cours...' : 'Vérifier URL'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result !== null && (
        <p className={`mt-4 ${result ? 'text-red-500' : 'text-green-500'}`}>
          L'URL {url} est {result ? 'une URL de phishing.' : 'sûre.'}
        </p>
      )}
    </div>
  );
};

export default Url;
