import React from 'react'

const HotNews = () => {
  return (
    <div className='mt-5 text-center'>
        <h1 className='font-bold text-2xl'>Hot News</h1>
        <div className='flex gap-5 justify-center mt-10'>
            <img src="./assets/election.jpg" alt="" height={100} width={200}/>
            <div className='w-96'>
                <p>
                    Former U.S. President Donald Trump would veto legislation establishing a federal abortion ban, says Vance
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default HotNews