import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <div className="col text-center mx-auto pt-5 pb-5">
        <h1>
          <strong>{count}</strong>
        </h1>
        <h2>Website rating</h2>
        <div className="btn-group btn-group-lg">
          <button
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
          >
            Like
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setCount(count - 1)}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};
