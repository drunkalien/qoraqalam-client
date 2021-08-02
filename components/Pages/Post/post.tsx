import { Page, Heading, Hashtag } from "components";
import Text from "components/Text";
import classes from "./post.module.scss";

const Post = () => {
  const tags = ["corona", "virus"];

  return (
    <Page>
      <Heading>
        Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma
      </Heading>
      <div className={classes["hashtag-container"]}>
        {tags.map((tag, index) => (
          <Hashtag key={index} color="pink" variant="filled">
            {tag}
          </Hashtag>
        ))}
      </div>
      <div className={classes["paragraph-container"]}>
        <Text>
          Milliy gvardiya mashinalari derazalar ostidan o’tib, bizdan uyda
          qolishimizni so’rayotgan vaqtda, internet ham karantinga qanday rioya
          qilish haqida turli xil maslahatlar, ogohlantirishlar va hikoyalarga
          to’la.
        </Text>
        <Text>
          Biroq, COVID-19 sochlar orqali yuqishi haqidagi xabarlar kabi ko’plab
          hikoyalar yolg’on. Biz siz uchun O’zbekistondagi karantin qoidalari
          haqida bilishingiz kerak bo’lgan barcha ma’lumotni bir joyga
          to’pladik.
        </Text>
      </div>
    </Page>
  );
};

export default Post;
