import { Page, PostCard } from "components";
import Hashtag from "components/Hashtag";
import Text from "components/Text";
import posts from "../../../posts";

const Home = () => {
  const tags = [
    "corona",
    "virus",
    "coding",
    "technology",
    "blog",
    "qoraqalam",
    "internet",
    "challange",
    "development",
    "software",
    "corona",
    "virus",
    "coding",
    "technology",
    "blog",
    "qoraqalam",
    "internet",
    "challange",
    "development",
    "software",
  ];

  return (
    <Page
      right={
        <div className="sticky">
          <p className="mb-10">
            <Text size="22">Heshteglar</Text>
          </p>
          {tags.map((tag, index) => (
            <div key={index}>
              <Hashtag>{tag}</Hashtag>
            </div>
          ))}
        </div>
      }
    >
      <div>
        {posts.map(({ ...postProps }, index) => (
          <div key={index} className="mb-20">
            <PostCard id={index} {...postProps} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Home;
