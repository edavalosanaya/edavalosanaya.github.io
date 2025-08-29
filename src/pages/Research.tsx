import { NavBar } from "@/components/ui/nav-bar";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";

// Helper to build URLs that respect Vite's base (works on GitHub Pages)
// const asset = (p: string) => new URL(p.replace(/^\//, ""), import.meta.env.BASE_URL).toString();

// ---- Data you can customize -------------------------------------------------
const PROFILE = {
  name: "Eduardo Davalos",
  title: "Assistant Professor – AIED, HCI, LLMs",
  headshot: "eduardo_davalos.webp", // place under docs/public/profiles/
  bio: [
    "I am an Assistant Professor working at the intersection of AI in Education (AIED), Human–Computer Interaction (HCI), and Large Language Models (LLMs). My research develops privacy‑preserving, browser‑native sensing and modeling techniques that translate into scalable learning technologies.",
    "I developed WebEyeTrack, a head‑pose‑aware, deep‑learning gaze estimation framework for the browser, and collaborate widely across cognitive science, learning analytics, and computer vision.",
  ],
  interests: [
    "LLMs in Education",
    "Human‑AI Interaction",
    "Gaze Estimation",
    "On‑device ML",
    "Learning Analytics",
  ],
  cvPdf: "cv.pdf", // place under docs/public/
};

type Pub = {
  title: string;
  authors: string;
  venue?: string;
  year?: string | number;
  links?: { label: string; href: string }[];
};

const PUBLICATIONS: Pub[] = [
  {
    title:
      "WEBEYETRACK: Scalable Eye‑Tracking for the Browser via On‑Device Few‑Shot Personalization",
    authors:
      "E. Davalos, Y. Zhang, N. Srivastava, Y. Thatigotla, J. A. Salas, S. McFadden, S.-J. Cho, A. Goodwin, A. TS, G. Biswas",
    venue: "arXiv",
    year: 2025,
    links: [
      { label: "Website", href: "https://redforestai.github.io/WebEyeTrack/" },
      { label: "Paper", href: "https://arxiv.org/abs/2508.19544" },
      { label: "Code", href: "https://github.com/RedForestAi/WebEyeTrack" },
    ],
  },
  // Add more entries here
];

const CONTACT = {
  university: "Trinity University",
  dept: "Computer Science",
  addressLines: [
    "One Trinity Place",
    "San Antonio, TX 78212",
  ],
  office: "CSCI, Room 270B",
  email: "davalosedu515@trinity.edu",
};

// Teaching grouped by term; add/swap terms as needed
const TEACHING: Record<string, { code: string; name: string; href?: string }[]> = {
  "Fall 2025": [
    { code: "CS 3xxx", name: "Human–AI Interaction", href: "https://example.com/syllabus" },
    { code: "CS 3xxx", name: "Applied LLMs" },
  ],
  "Spring 2025": [
    { code: "CS 3xxx", name: "AI for Learning Sciences" },
  ],
};
// ----------------------------------------------------------------------------

export function ResearchPage() {
  // const headshotUrl = asset(PROFILE.headshot);
  // const cvUrl = asset(PROFILE.cvPdf);
  const headshotUrl = PROFILE.headshot;
  const cvUrl = PROFILE.cvPdf;

  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            {/* Header / Hero */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img
                src={headshotUrl}
                alt={`${PROFILE.name} headshot`}
                className="h-28 w-28 rounded-full object-cover border"
                loading="eager"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {PROFILE.name}
                </h1>
                <p className="mt-1 text-muted-foreground">{PROFILE.title}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <Button asChild size="sm" variant="outline">
                    <a href={cvUrl} target="_blank" rel="noreferrer noopener">
                      View CV (PDF)
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://www.github.com/edavalosanaya/" target="_blank" rel="noreferrer noopener">
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://scholar.google.com/citations?user=example" target="_blank" rel="noreferrer noopener">
                      Google Scholar
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://www.researchgate.net/profile/Eduardo-Davalos-Anaya?ev=hdr_xprf" target="_blank" rel="noreferrer noopener">
                      ResearchGate
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://orcid.org/0000-0001-7190-7273" target="_blank" rel="noreferrer noopener">
                      ORCID
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Bio */}
            <section aria-labelledby="bio-heading" className="space-y-4">
              <h2 id="bio-heading" className="text-xl font-semibold tracking-tight">
                Bio
              </h2>
              {PROFILE.bio.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </section>

            <Separator className="my-6" />

            {/* Interests */}
            <section aria-labelledby="interests-heading">
              <h2 id="interests-heading" className="text-xl font-semibold tracking-tight">
                Research Interests
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROFILE.interests.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <Separator className="my-6" />

            {/* Publications */}
            <section aria-labelledby="pubs-heading" className="space-y-4">
              <h2 id="pubs-heading" className="text-xl font-semibold tracking-tight">
                Selected Publications
              </h2>
              <ul className="space-y-4">
                {PUBLICATIONS.map((pub, i) => (
                  <li key={i} className="rounded-lg border p-4">
                    <h3 className="font-semibold leading-snug">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                      {pub.venue && (
                        <span className="rounded border bg-muted px-2 py-0.5 text-muted-foreground">
                          {pub.venue} {pub.year ? `• ${pub.year}` : ""}
                        </span>
                      )}
                      {pub.links?.map((l) => (
                        <Button key={l.href} size="sm" variant="outline" asChild>
                          <a href={l.href} target="_blank" rel="noreferrer noopener">
                            {l.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
            <section aria-labelledby="contact-heading" className="rounded-lg border p-4">
              <h2 id="contact-heading" className="text-lg font-semibold tracking-tight">
                Contact
              </h2>
              <div className="mt-3 text-sm">
                <p className="font-medium">{CONTACT.university}</p>
                <p className="text-muted-foreground">{CONTACT.dept}</p>
                <div className="mt-2 space-y-0.5">
                  {CONTACT.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p>
                    <span className="text-muted-foreground">Office:</span> {CONTACT.office}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span>{" "}
                    <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="teaching-heading" className="rounded-lg border p-4">
              <h2 id="teaching-heading" className="text-lg font-semibold tracking-tight">
                Teaching
              </h2>
              <div className="mt-3 space-y-4 text-sm">
                {Object.entries(TEACHING).map(([term, courses]) => (
                  <div key={term}>
                    <p className="font-medium">{term}</p>
                    <ul className="mt-1 space-y-1">
                      {courses.map((c) => (
                        <li key={c.code + c.name} className="flex items-start justify-between gap-2">
                          <span>
                            <span className="font-medium">{c.code}</span>{" "}
                            {c.name}
                          </span>
                          {c.href ? (
                            <a className="underline text-blue-600" href={c.href} target="_blank" rel="noreferrer noopener">
                              syllabus
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
