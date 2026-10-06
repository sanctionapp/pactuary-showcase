export const LINKS = {
  github: "https://github.com/sanctionapp/pactuary-showcase",
  githubProfile: "https://github.com/Burakesnglu",
  linkedin: "https://www.linkedin.com/in/burakesnglu",
  email: "burakesenoglu.dev@gmail.com",
};

export function demoMailto(lang: "en" | "tr"): string {
  const subject = lang === "tr" ? "Pactuary demo talebi" : "Pactuary demo request";
  return `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}`;
}
