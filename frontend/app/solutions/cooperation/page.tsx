import {fetchPostBySlug, fetchPostsBy, OrderEnum, PostObjectsConnectionOrderbyEnum,} from "@nago/graphql";
import Hero from "@nago/components/hero";
import Container from "@nago/components/container";
import {Image} from "@nago/components/Image";
import {ExploreSection} from "@nago/components/explore_section";
import {SolutionSection} from "@nago/components/solution_section";
import {ApplicationSection} from "@nago/components/application_section";
import {NewsSection} from "@nago/components/news_section";


export default async function ContactUsPage() {
  // const page = await fetchPageBySlug();
  const explore = await fetchPostBySlug("explore");
  const solutions = await fetchPostsBy({
    categoryName: "解决方案",
    tag: "hero1",
    orderby: [
      {field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC},
    ],
  });
  const applications1 = await fetchPostsBy(
    {
      categoryName: "应用领域",
      tag: "application_hero_1",
      orderby: [
        {field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC},
      ],
    },
    2,
  );
  const applications2 = await fetchPostsBy(
    {
      categoryName: "应用领域",
      tag: "application_hero_2",
      orderby: [
        {field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC},
      ],
    },
    5,
  );
  const news = await fetchPostsBy(
    {
      categoryName: "news",
      tag: "news_hero",
      orderby: [
        {field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC},
      ],
    },
    5,
  );
  const heros = await fetchPostsBy(
    {
      categoryName: "news",
      tag: "home_hero",
      orderby: [
        {field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC},
      ],
    },
    5,
  );

  // const {content} = page;
  return (
    <div className="flex flex-col">
           
    </div>
  );
} 