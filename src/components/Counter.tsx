import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

class Counter extends React.Component {
  state = {
    count: 0
  }

  onIncreaseProductCountClick(e:any) {
    e.preventDefault()
    this.setState((state: {[key:string]:any})=>({
      count: state.count + 1
    }))
  }

  onDecreaseProductCountClick(e:any) {
    e.preventDefault()
    this.setState((state: {[key:string]:any})=>({
      count: state.count > 0 ? state.count - 1 : 0
    }))
  }

  render() {
    return (
      <div className='absolute top-5 right-5 border rounded-xl flex overflow-hidden'>
          <div className='w-6 flex justify-center items-center cursor-pointer bg-sky-600 hover:bg-sky-700 text-white' 
            onClick={(e)=>{ this.onDecreaseProductCountClick(e) }}>
            <MdArrowBackIosNew />
          </div>
          <div className='border-x-2 w-10 text-center'>
            { this.state.count }
          </div>
          <div className='w-6 flex justify-center items-center cursor-pointer bg-sky-600 hover:bg-sky-700 text-white' 
            onClick={(e)=>{ this.onIncreaseProductCountClick(e) }}>
            <MdArrowForwardIos />
          </div>
      </div>
    )
  }
}

export default Counter;