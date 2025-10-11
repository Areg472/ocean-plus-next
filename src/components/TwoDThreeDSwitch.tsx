"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { motion } from "motion/react";

export default function TwoDThreeDSwitch({
  isChecked = false,
  handleSwitchChange,
}) {
  return (
    <>
      <Label htmlFor="iframe-switch" className="mb-1 text-sm font-medium">
        2D
      </Label>
      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
        <Switch
          id="iframe-switch"
          checked={isChecked}
          onCheckedChange={handleSwitchChange}
        />
      </motion.div>
      <Label htmlFor="iframe-switch" className="mb-1 text-sm font-medium">
        3D
      </Label>
    </>
  );
}
