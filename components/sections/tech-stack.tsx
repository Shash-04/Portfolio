"use client";

import { Card } from "@/components/ui/card";
import { Marquee } from "../magicui/marquee";

const icons = [
  { src: "https://skillicons.dev/icons?i=react", alt: "React logo" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB logo" },
  { src: "https://skillicons.dev/icons?i=express", alt: "Express logo" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js logo" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js logo" },
  { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap logo" },
  { src: "https://skillicons.dev/icons?i=html", alt: "HTML5 logo" },
  { src: "https://skillicons.dev/icons?i=css", alt: "CSS3 logo" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS logo" },
  { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript logo" },
  { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript logo" },
  { src: "https://skillicons.dev/icons?i=java", alt: "Java logo" },
  { src: "https://skillicons.dev/icons?i=prisma", alt: "Prisma logo" },
  { src: "https://skillicons.dev/icons?i=cpp", alt: "C++ logo" },
  { src: "https://skillicons.dev/icons?i=gmail", alt: "Gmail logo" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git logo" },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL logo" },
  { src: "https://skillicons.dev/icons?i=firebase", alt: "Firebase logo" },
  { src: "https://skillicons.dev/icons?i=vite", alt: "Vite logo" },
  { src: "https://skillicons.dev/icons?i=discord", alt: "Discord logo" },
  { src: "https://skillicons.dev/icons?i=npm", alt: "NPM logo" },
  { src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/youtube/default.svg", alt: "YouTube logo" },
  { src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/discord/default.svg", alt: "Discord logo" },
  { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code logo" },
  { src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg", alt: "Telegram logo" },
  { src: "https://skillicons.dev/icons?i=windows", alt: "Windows logo" },
  { src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg", alt: "LinkedIn logo" },
  { src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/visualstudio/default.svg", alt: "Visual Studio logo" },
  {
    img: "Instagram logo",
    src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg",
    alt: "Instagram logo"
  },
  {
    img: "Gmail logo",
    src: "https://skillicons.dev/icons?i=gmail",
    alt: "Gmail logo"
  },
  {
    img: "WhatsApp logo",
    src: "https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg",
    alt: "WhatsApp logo"
  },
  {
    img: "GitHub logo",
    src: "https://skillicons.dev/icons?i=github",
    alt: "GitHub logo"
  },
  {
    img: "LinkedIn logo",
    src: "https://skillicons.dev/icons?i=linkedin",
    alt: "LinkedIn logo"
  },
  {
    img: "Instagram logo",
    src: "https://skillicons.dev/icons?i=instagram",
    alt: "Instagram logo"
  }
];

export function TechStack() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-5xl font-bold mb-10">Tech Stack</h1>
      </div>
      <Marquee pauseOnHover className="[--duration:100s]" repeat={2}>
        {icons.map((icon, index) => (
          <Card key={index} className="flex flex-col bg-white items-center justify-center h-24 w-24 shadow-md hover:shadow-lg transition-shadow">
            <div
              className="h-12 w-12 flex items-center justify-center"
            >
              <img
                src={icon.src}
                alt={icon.alt || icon.img || `Tech icon ${index}`}
                className="max-h-full max-w-full object-contain "
              />
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
}