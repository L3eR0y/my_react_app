import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

class Counter extends React.Component {
  state = {
    count: 0
  }

  onIncreaseProductCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  onDecreaseProductCount() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    })
  }

  render() {
    return (
      <div className='absolute top-5 right-5 border rounded-xl flex overflow-hidden'>
          <div className='w-6 flex justify-center items-center cursor-pointer bg-sky-600 hover:bg-sky-700 text-white' onClick={()=>{ this.onDecreaseProductCount() }}>
            <MdArrowBackIosNew />
          </div>
          <div className='border-x-2 w-10 text-center'>
            { this.state.count }
          </div>
          <div className='w-6 flex justify-center items-center cursor-pointer bg-sky-600 hover:bg-sky-700 text-white' onClick={()=>{ this.onIncreaseProductCount() }}>
            <MdArrowForwardIos />
          </div>
      </div>
    )
  }
}

export default Counter;