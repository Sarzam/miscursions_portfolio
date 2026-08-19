import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ReaderCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        // Always show the latest number first
        const res = await axios.get(`${API}/reader/count`);
        if (!cancelled && Number.isFinite(Number(res.data?.count))) {
          setCount(Number(res.data.count));
        }
      } catch (e) {
        // fall back to a graceful placeholder
        if (!cancelled) setCount(null);
      }
      try {
        // Only count a visit once per browser session
        const hasVisited = sessionStorage.getItem("mc-visited-session");
        if (!hasVisited) {
          sessionStorage.setItem("mc-visited-session", "pending");
          const res2 = await axios.post(`${API}/reader/visit`);
          sessionStorage.setItem("mc-visited-session", "1");
          if (!cancelled && Number.isFinite(Number(res2.data?.count))) {
            setCount(Number(res2.data.count));
          }
        }
      } catch (e) {
        // Permit retrying if the visit request or session storage failed.
        try {
          sessionStorage.removeItem("mc-visited-session");
        } catch (_) {
          // Ignore storage errors.
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex items-center gap-2 text-plum/70 dark:text-cream/70">
      <Eye size={14} />
      <span className="tabular-nums">
        {count == null ? "—" : Number(count).toLocaleString()}
      </span>
      <span>readers so far</span>
    </div>
  );
};

export default ReaderCounter;
