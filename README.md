# 🕰️ Human Hours

**“Time designed for living.”**  
A dynamic, data-driven PSA platform exploring the cost of overwork—and the alternatives that heal us.

## 🌐 About

Human Hours is a public-facing resource hub that tracks the cultural, economic, and psychological impact of overwork (karoshi), while advocating for sustainable and human-centered working lives.

We blend fresh statistical updates, policy news, and personal stories with practical tools for balance and recovery—without jargon, without paywalls, and without moralizing.

---

## 🎯 Mission

To provide a living platform that:
- Updates dynamically with new karoshi statistics, case studies, and news
- Offers accessible mental health and work-life resources
- Shares actionable, non-performative habits for sustainable productivity
- Undercuts corporate wellness fluff with data-backed, worker-first design

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 15 (App Router)** | React framework with SSR, ISR, SEO support |
| **Tailwind CSS v4** | Utility-first styling, responsive and themeable |
| **TypeScript** | Strongly-typed, maintainable JS |
| **Vercel** | Hosting + scheduled serverless functions |
| **Recharts / Nivo** | Dynamic, accessible charts |
| **Headless CMS (Sanity / Contentlayer)** | Markdown or CMS-fed content updates |
| **NewsAPI / RSS + ILO/OECD/MHLW APIs** | Real-time news and labour stats feeds |

---

## 🧭 Site Architecture
/
├── stats/ → auto-refreshing dashboards
├── news/ → rolling curated headlines (cron-updated)
├── stories/ → personal testimonies, MDX or CMS-driven
├── balance/ → habit tools, disconnect templates, micro actions
├── manifesto/ → 10 principles for sustainable living
├── resources/ → mental health, legal rights, employer kits
└── api/cron/ → scheduled updates (data fetch & revalidate)


---

## ✍️ Core Principles

1. Life is not an output metric.  
2. Rest is a right, not a reward.  
3. Burnout is structural—not personal failure.  
4. Better work beats more work.  
5. Mental clarity > productivity hacks.

_Read the full [Manifesto](./app/manifesto/page.tsx)._

---

## 📈 Roadmap

- [x] Scaffold site with App Router + Tailwind
- [ ] Auto-fetch MHLW, ILO, OECD work-related stats
- [ ] Revalidate stat pages daily (Vercel cron)
- [ ] Story studio with MDX & open submission
- [ ] Resource directory (AU/JP/global)
- [ ] “Manifesto” with shareable micro-actions
- [ ] News feed via NewsAPI / GoogleNews RSS
- [ ] Add personal calculator (overtime risk, sleep debt)
- [ ] Future You self-message feature

---

## 🧠 Why “Human Hours”?

Inspired by the Japanese concept of **karoshi (過労死)**—death by overwork—Human Hours explores what it means to be a functional, empathetic, *present* human in a time that often forgets we're more than units of productivity.

---

## 🤝 Contribute

Whether you’re a writer, developer, designer, or someone with a story to tell—join the mission.  
Submit pull requests, open issues, or contact: `staff@deepnet.com.au`

---

## 🪧 License

MIT — Public education, not profit.
