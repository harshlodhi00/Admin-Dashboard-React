import ChartBox from "../../Components/ChartBox/ChartBox";
import TopBox from "../../Components/TopBox/TopBox";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">box4</div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">
        <ChartBox />
      </div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
};

export default Home;
