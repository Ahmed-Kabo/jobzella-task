import { Paragraph } from "../../Helper/Helper";
import Group from "../Groups/Group";

const Groups = () => {
  return (
    <>
      <Paragraph
        fz=".85rem"
        m="0 0 1rem 0"
        tt="uppercase"
        color="var(--darkColor)"
      >
        Groups
      </Paragraph>
      <Group />
    </>
  );
};

export default Groups;
