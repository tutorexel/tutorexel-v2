"use client";

import { useEffect } from "react";

/**
 * Behaviour for the Exam Prep and city pages (ported 1:1 from the design HTML):
 * - live city clock          [data-tz]
 * - year tabs                .ytab  (NAPLAN, ICAS, OC, Selective, Scholarship)
 * - sample question cards    .qcard
 * - year filter chips        .ychip (Exam Prep hub)
 * - city search + area tabs  #cq, .atab (city hub)
 * Markup is server-rendered; this only attaches listeners and cleans up on unmount.
 */
export default function ExamPrepInteractions() {
  useEffect(() => {
    const ac = new AbortController();
    const opt = { signal: ac.signal };
    const timers: number[] = [];

    // City clock
    document.querySelectorAll<HTMLElement>("[data-tz]").forEach((el) => {
      const f = () => {
        try {
          el.textContent = new Intl.DateTimeFormat("en", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: el.dataset.tz,
          }).format(new Date());
        } catch {}
      };
      f();
      timers.push(window.setInterval(f, 30000));
    });

    // Year tabs
    const yt = Array.from(document.querySelectorAll<HTMLElement>(".ytab"));
    const sel = (t: HTMLElement) => {
      yt.forEach((x) => {
        const on = x === t;
        x.setAttribute("aria-selected", String(on));
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.getAttribute("aria-controls") || "");
        if (panel) panel.hidden = !on;
      });
    };
    yt.forEach((t, i) => {
      t.addEventListener("click", () => sel(t), opt);
      t.addEventListener(
        "keydown",
        (ev) => {
          const d = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
          if (d) {
            const n = yt[(i + d + yt.length) % yt.length];
            n.focus();
            sel(n);
          }
        },
        opt,
      );
    });

    // Sample question cards
    document.querySelectorAll<HTMLElement>(".qcard").forEach((q) => {
      const bs = Array.from(q.querySelectorAll<HTMLButtonElement>(".qopt"));
      const w = q.querySelector<HTMLElement>(".q-why");
      bs.forEach((b) =>
        b.addEventListener(
          "click",
          () => {
            if (q.dataset.done) return;
            q.dataset.done = "1";
            bs.forEach((x) => {
              x.disabled = true;
              if (x.dataset.ok === "1") x.classList.add("ok");
            });
            if (b.dataset.ok !== "1") b.classList.add("no");
            if (w) w.hidden = false;
          },
          opt,
        ),
      );
    });

    // Exam Prep hub: year chips
    const ex = Array.from(document.querySelectorAll<HTMLElement>(".exam"));
    const ch = Array.from(document.querySelectorAll<HTMLElement>(".ychip"));
    const es = document.getElementById("eStatus");
    ch.forEach((c) =>
      c.addEventListener(
        "click",
        () => {
          const y = c.dataset.y || "all";
          ch.forEach((x) => x.setAttribute("aria-pressed", String(x === c)));
          let n = 0;
          ex.forEach((e) => {
            const on = y === "all" || (e.dataset.y || "").split(" ").includes(y);
            e.classList.toggle("dim", !on);
            if (on) n++;
          });
          if (es)
            es.textContent =
              y === "all"
                ? "Choose a year level to see which tests apply."
                : n + (n === 1 ? " test applies" : " tests apply") + " in Year " + y + ".";
        },
        opt,
      ),
    );

    // City hub: search + area tabs
    const q = document.getElementById("cq") as HTMLInputElement | null;
    if (q) {
      const cards = Array.from(document.querySelectorAll<HTMLElement>("#cities a.city"));
      const tabs = Array.from(document.querySelectorAll<HTMLElement>(".atab"));
      const st = document.getElementById("cStatus");
      const em = document.getElementById("cEmpty");
      let area = "all";
      const run = () => {
        const v = q.value.trim().toLowerCase();
        let n = 0;
        cards.forEach((c) => {
          const ok =
            (area === "all" || c.dataset.area === area) && (!v || (c.dataset.name || "").includes(v));
          c.hidden = !ok;
          if (ok) n++;
        });
        if (st) st.textContent = n + (n === 1 ? " city" : " cities");
        if (em) em.hidden = n > 0;
      };
      q.addEventListener("input", run, opt);
      tabs.forEach((t) =>
        t.addEventListener(
          "click",
          () => {
            area = t.dataset.a || "all";
            tabs.forEach((x) => x.setAttribute("aria-pressed", String(x === t)));
            run();
          },
          opt,
        ),
      );
    }

    return () => {
      ac.abort();
      timers.forEach((id) => window.clearInterval(id));
    };
  }, []);

  return null;
}
