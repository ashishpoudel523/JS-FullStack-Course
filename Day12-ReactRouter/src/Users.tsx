import { useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("id is", searchParams.get("id"));
  console.log("from", searchParams.get("from"));
  return (
    <div>
      <h2>Users Page</h2>

      <button
        onClick={() => {
          setSearchParams({ id: "20", from: "events" });
        }}
      >
        Change Query Params
      </button>
    </div>
  );
}

export { Users };
