import { Card } from "antd";
const { Meta } = Card;
import "./style.css";
import { useToggleContext } from "../../contexts";
const CustomCard = () => {
  const {state}=useToggleContext();
  return (
      <Card
        hoverable
        className="card"
        style={state&&{"backgroundColor":"black"}}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
  );
};
export default CustomCard;
