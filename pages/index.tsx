import { PostCard, Hashtag, Page } from "components";
import { Fragment } from "react";

export default function Home() {
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
  ];

  return (
    <Page
      right={
        <Fragment>
          {tags.map((tag, index) => (
            <div key={index}>
              <Hashtag>{tag}</Hashtag>
            </div>
          ))}
        </Fragment>
      }
    >
      <div>
        <PostCard
          date="1"
          starred
          tagList={["karantin", "corona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="sas"
          views={23}
        />
        <PostCard
          date="1"
          starred
          tagList={["karantin", "corona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="sas"
          views={23}
        />
        <PostCard
          date="1"
          starred
          tagList={["karantin", "corona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="sas"
          views={23}
        />
        <PostCard
          date="1"
          starred
          tagList={["karantin", "corona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="sas"
          views={23}
        />
        <PostCard
          date="1"
          starred
          tagList={["karantin", "corona"]}
          title="Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma"
          user="sas"
          views={23}
        />
      </div>
    </Page>
  );
}
