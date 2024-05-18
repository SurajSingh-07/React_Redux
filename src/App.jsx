import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "./store/reducers/counterSlice";

function App() {

  const {value} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className="w-[80%] mx-auto bg-red-500 p-5 mt-5 ">
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-white text-xl">Count : {value} </h1>
        </div>
        <div className="flex justify-center gap-5 mt-5">
          <button onClick={() => dispatch(increment())} className="text-white font-medium py-1 px-3 rounded bg-transparent border-2 border-red-900">
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className="text-white font-medium py-1 px-3 rounded bg-transparent border-2 border-red-900">
            Decrement
          </button>
          <button onClick={() => dispatch(incrementAsync(2))} className="text-white font-medium py-1 px-3 rounded bg-transparent border-2 border-red-900">
            Increment By No.
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
