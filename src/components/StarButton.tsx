import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const StarButton = ({ isFavorite, onClick }: any) => {
  const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;
  return <Button icon={Icon} onClick={onClick}></Button>;
};

export default StarButton;
