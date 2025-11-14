import { useEffect, useState } from "react";
import { useKeyPress } from "./KeyEvent";
import './ApiFile.css';

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setError(null);
            setData(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Error during loading');
                return res.json();
            })
            .then((data) => {
                setError(null);
                setData(data);
            })
            .catch((err) => {
                setData(null);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [url]);

    return {data, loading, error};
}

function Posts() {
  const [url, setUrl] = useState("");
  const [triggerUrl, setTriggerUrl] = useState("");
  const [counterLetters, setCounterLetters] = useState(0);

  const enterPressed = useKeyPress('Enter');

  let {data, loading, error} = useApi(triggerUrl);

  useEffect(() => {
    if (enterPressed) {
        setTriggerUrl(url);
    }
  }, [enterPressed]);

  return (
    <>
      <div>
        <p>You have written {counterLetters} letters.</p>
        <input
          id="input-url"
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setCounterLetters(e.target.value.length);
          }}
          placeholder="Enter Api-URL"
        />

        {loading && <p>Loading ...</p>}
        {error && <p>Error: {error}</p>}

        {
            data && (
                <ul>
                    {
                        Array.isArray(data) ? (
                            data.slice(0, 5).map((item, i) => <li key={i}><span>{JSON.stringify(item)}</span></li>)
                        ) : (
                            <li>{JSON.stringify(data)}</li>
                        )
                    }
                </ul>
            )
        }
      </div>
    </>
  );
}

export default Posts;