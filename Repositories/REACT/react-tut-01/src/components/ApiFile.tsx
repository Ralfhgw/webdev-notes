import { useState, useEffect } from "react";
import { useKeyPress } from "./KeyEvent";
import './ApiFile.css'

function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Laden");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setData(null);
        setError((error as Error).message);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// https://jsonplaceholder.typicode.com/posts
function Posts() {
  const [url, setUrl] = useState<string>("");
  const [triggerUrl, setTriggerUrl] = useState<string>("");
  let { data, loading, error } = useApi<any[]>(triggerUrl);
  const enterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (enterPressed) {
      console.log("Enter wurde gedrueckt!");
      setTriggerUrl(url);
    }
  }, [enterPressed]);

  return (
    <div>
      <input
        id="input-url"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="API-URL eigeben"
      />

      {loading && <p>Lade ...</p>}
      {error && <p>Fehler: {error}</p>}

      {data && (
        <ul>
          {Array.isArray(data) ? (
            data
              .slice(0, 5)
              .map((item, i) => <li key={i}><span>{JSON.stringify(item)}</span></li>)
          ) : (
            <li>{JSON.stringify(data)}</li>
          )}
        </ul>
      )}
    </div>
  );
}

export { Posts };
