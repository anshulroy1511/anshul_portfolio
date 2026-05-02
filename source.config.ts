import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const blogs = defineCollections({
  type: "doc",
  dir: "content/blogs",
  schema: frontmatterSchema.extend({
    author: z.string().default("Deepak Jangra"),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
