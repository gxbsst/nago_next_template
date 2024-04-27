"use client"
import Container from "@nago/components/container";
import SolutionItem from "@nago/components/solution-item";

import {motion, Variants} from 'framer-motion';


const cardVariants: Variants = {
  offscreen: {
    y: 80,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      // bounce: 0.4,
      duration: 2,
      delay: 0.5
    }
  }
};

export function SolutionSection(props: {
  solutions: {
    __typename?: "RootQueryToPostConnection" | undefined;
    edges: Array<{
      __typename?: "RootQueryToPostConnectionEdge";
      node: {
        __typename?: "Post";
        id: string;
        date?: string | null;
        title?: string | null;
        excerpt?: string | null;
        content?: string | null;
        ename?: { __typename?: "Ename"; ename?: string | null } | null;
        featuredImage?: {
          __typename?: "NodeWithFeaturedImageToMediaItemConnectionEdge";
          node: {
            __typename?: "MediaItem";
            altText?: string | null;
            mediaItemUrl?: string | null;
            sourceUrl?: string | null;
            uri?: string | null
          }
        } | null
      }
    }> | undefined
  },
}) {
  const {solutions} = props;

  return <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={cardVariants}
    viewport={{ once: true }}
    className="py-[92px]">
    <Container
      className="px-[112px]"
      title="Nadi-Tech Solutions"
      subtitle="解决方案"
      separator
    >
      <div className="flex gap-3 min-h-[200px] justify-between pt-8">
        {solutions?.edges!.map(
          ({node: {id, title, ename, excerpt, featuredImage}}) => {
            return (
              <SolutionItem
                key={id}
                title={title}
                subtitle={ename?.ename}
                content={excerpt}
                bg={featuredImage?.node.sourceUrl}
              />
            );
          },
        )}
      </div>
    </Container>
  </motion.div>;
}