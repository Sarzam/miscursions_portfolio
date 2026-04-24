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
        if (!cancelled) setCount(res.data.count);
      } catch (e) {
        // fall back to a graceful placeholder
        if (!cancelled) setCount(null);
      }
      try {
        // Only count a visit once per browser session
        if (!sessionStorage.getItem("mc-visited-session")) {
          const res2 = await axios.post(`${API}/reader/visit`);
          sessionStorage.setItem("mc-visited-session", "1");
          if (!cancelled) setCount(res2.data.count);
        }
      } catch (e) {
        // swallow
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
      <span className="tabular-nums">{count?.toLocaleString() ?? "—"}</span>
      <span>readers so far</span>
    </div>
  );
};

export default ReaderCounter;
