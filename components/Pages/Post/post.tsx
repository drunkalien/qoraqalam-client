import { Page, Heading, Hashtag } from "components";
import Text from "components/Text";
import { tTag } from "types";
import classes from "./post.module.scss";

const Post = () => {
  const tags: tTag[] = [
    { children: "corona", color: "pink", variant: "filled" },
    { children: "virus", color: "blue", variant: "filled" },
    { children: "nonsense", color: "gray", variant: "transparent" },
  ];

  return (
    <Page>
      <Heading>
        Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma
      </Heading>
      <div className={classes["hashtag-container"]}>
        {tags.map(({ color, children, variant }, index) => (
          <Hashtag key={index} color={color} variant={variant}>
            {children}
          </Hashtag>
        ))}
      </div>
      <div className={classes["paragraph-container"]}>
        <Text lineHeight={"35px"}>
          Milliy gvardiya mashinalari derazalar ostidan o’tib, bizdan uyda
          qolishimizni so’rayotgan vaqtda, internet ham karantinga qanday rioya
          qilish haqida turli xil maslahatlar, ogohlantirishlar va hikoyalarga
          to’la.
        </Text>
        <Text lineHeight={"35px"}>
          Biroq, COVID-19 sochlar orqali yuqishi haqidagi xabarlar kabi ko’plab
          hikoyalar yolg’on. Biz siz uchun O’zbekistondagi karantin qoidalari
          haqida bilishingiz kerak bo’lgan barcha ma’lumotni bir joyga
          to’pladik.
        </Text>
        <Text lineHeight={"35px"}>
          Milliy gvardiya mashinalari derazalar ostidan o’tib, bizdan uyda
          qolishimizni so’rayotgan vaqtda, internet ham karantinga qanday rioya
          qilish haqida turli xil maslahatlar, ogohlantirishlar va hikoyalarga
          to’la.
        </Text>
        <Text lineHeight={"35px"}>
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
