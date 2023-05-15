import { MypPolarArea } from "./components/MypPolarArea";
import { MyBar } from "./components/MyBar";
import { MyLine } from "./components/MyLine";
import { MyStacked } from "./components/MyStacked";
import { MyArea } from "./components/MyArea";

function App() {
  return (
    <div className="container ">
      <h3 className="text-center">
        Chart.js charts wrapped with react-chartjs-2
      </h3>
      <MyLine />
      <MyBar />
      <MypPolarArea />
      <MyStacked />
      <MyArea />
    </div>
  );
}

export default App;
