"use client";

import {
  Home,
  TvMinimalPlay,
  Film,
  SquareUser,
  MessageSquareCode,
  SquareActivity,
  ShieldEllipsis,
  Video,
  Clapperboard,
  SquareCode,
  HandCoins,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { movies } from "@/data/movies";
import { shorts } from "@/data/shorts";

const originals = shorts
  .filter((short) => short.title === "The Random Green Blah Blah Thing")
  .map((short) => ({
    title: short.title,
    url: short.id,
    icon: Star,
  }));

const items = movies.map((movie) => ({
  title: movie.title,
  url: movie.id,
  icon: TvMinimalPlay,
}));

const header = [
  {
    title: "Homepage",
    url: "/",
    icon: Home,
  },
  {
    title: "Movies",
    url: "/movies",
    icon: Film,
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    icon: SquareUser,
  },
  {
    title: "About Us",
    url: "/about-us",
    icon: SquareCode,
  },
  {
    title: "Support Us",
    url: "https://link.oceanbluestream.com/patreon",
    icon: HandCoins,
  },
];

const footer = [
  {
    title: "Discord",
    url: "https://oceanbluestream.com/discord/",
    icon: MessageSquareCode,
  },

  {
    title: "Status Page",
    url: "https://status.oceanbluestream.com/",
    icon: SquareActivity,
  },

  {
    title: "BetterStack",
    url: "https://uptime.betterstack.com",
    icon: ShieldEllipsis,
  },

  {
    title: "Ocean Blue Studios",
    url: "https://link.oceanbluestream.com/oceanbluepictures",
    icon: Video,
  },
];

const shortItems = shorts
  .filter((short) => short.title !== "The Random Green Blah Blah Thing")
  .map((short) => ({
    title: short.title,
    url: short.id,
    icon: Clapperboard,
  }));

export function AppSidebar() {
  const scrollRef = useRef(null);
  const [watchedItems, setWatchedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const updateWatchedItems = () => {
      const watched = new Set<string>();

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && localStorage.getItem(key) === "watched") {
          const id =
            key.startsWith("movie_") || key.startsWith("short_") ? key : key;
          watched.add(id);
        }
      }

      setWatchedItems(watched);
    };

    updateWatchedItems();

    window.addEventListener("watchedStatusChanged", updateWatchedItems);

    return () => {
      window.removeEventListener("watchedStatusChanged", updateWatchedItems);
    };
  }, []);

  const isWatched = (id: string, type: "movie" | "short") => {
    const cookieName = type === "movie" ? `movie_${id}` : `short_${id}`;
    return watchedItems.has(cookieName);
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          {header.map((header) => (
            <motion.div key={header.title} whileHover={{ scale: 1.05 }}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={header.url}
                    target={header.url.startsWith("http") ? "_blank" : ""}
                  >
                    <header.icon />
                    <span>{header.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>
        <SidebarGroupLabel>The Content</SidebarGroupLabel>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>O+ Originals</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {originals.map((originals) => (
                <motion.div
                  key={originals.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href={`/shorts/${originals.url}`}>
                        <originals.icon />
                        <span
                          className={
                            isWatched(originals.url, "short")
                              ? "line-through"
                              : undefined
                          }
                        >
                          {originals.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Movies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href={`/movies/${item.url}`}>
                        <item.icon />
                        <span
                          className={
                            isWatched(item.url, "movie")
                              ? "line-through"
                              : undefined
                          }
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Shorts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {shortItems.map((shortItem) => (
                <motion.div
                  key={shortItem.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href={`/shorts/${shortItem.url}`}>
                        <shortItem.icon />
                        <span
                          className={
                            isWatched(shortItem.url, "short")
                              ? "line-through"
                              : undefined
                          }
                        >
                          {shortItem.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroupLabel>Footer</SidebarGroupLabel>
        <SidebarMenu>
          {footer.map((footer) => (
            <motion.div key={footer.title} whileHover={{ scale: 1.05 }}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={footer.url} target={"_blank"}>
                    <footer.icon />
                    <span>{footer.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
