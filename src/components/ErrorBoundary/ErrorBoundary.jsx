import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div style={{ padding: "20px", color: "red" }}>
      <pre style={{ color: "black", background: "#f4f4f4", padding: "15px" }}>
        {error.statusText || error.message || String(error)}
      </pre>
      {error.stack && (
        <pre style={{ fontSize: "12px", background: "#eee", padding: "10px" }}>
          {error.stack}
        </pre>
      )}
    </div>
  );
}
