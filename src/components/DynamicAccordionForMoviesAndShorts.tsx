"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function DynamicAccordionForMoviesAndShorts({
  year = "",
  creator = "",
  genres = "",
}) {
  return (
    <Accordion type="single" collapsible>
      <motion.div
        whileHover={{ scale: 1.045 }}
        transition={{ ease: ["circInOut"] }}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Who is the creator of this movie?</AccordionTrigger>
          <AccordionContent className="accord">
            Created by {creator}
          </AccordionContent>
        </AccordionItem>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.045 }}
        transition={{ ease: ["circInOut"] }}
      >
        <AccordionItem value="item-2">
          <AccordionTrigger>When was it released?</AccordionTrigger>
          <AccordionContent className="accord">
            It was released in {year}
          </AccordionContent>
        </AccordionItem>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.045 }}
        transition={{ ease: ["circInOut"] }}
      >
        {genres && (
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the genres?</AccordionTrigger>
            <AccordionContent className="accord">
              The genres are: {genres}
            </AccordionContent>
          </AccordionItem>
        )}
      </motion.div>
    </Accordion>
  );
}
