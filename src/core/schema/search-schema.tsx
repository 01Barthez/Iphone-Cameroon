"use client"

import { z } from "zod"

// searchSchema
export const searchSchema = z.object({
  text: z.string().min(1).max(20, {
    message: "Your text is too long"
  }),
})
