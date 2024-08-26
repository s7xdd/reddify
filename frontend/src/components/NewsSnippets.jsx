import React from 'react'

const NewsSnippets = (props) => {
    const {topic, title} = props;
  return (
    <div className='mt-5 text-center'>
        <h1 className='font-bold text-2xl'>{topic}</h1>
        <div className='flex gap-5 justify-center mt-10'>
            <div className='flex flex-col items-center'>
              <img src="./assets/election.jpg" alt="" height={100} width={200}/>
              <div className='w-96'>
                  <p>
                      {title}
                  </p>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col text-start'>
                <p>Yahya Sinwar reportedly hiding in plain sight 'dressed as a woman'</p>
                <span className='text-gray-400 text-sm'>(Aug 26, 2024 - 4:02:09 PM | Comments (462) | Score: 5533)</span>
              </div>

              <div className='flex flex-col text-start'>
                <p>Trump Denies Liability for Sharing AI-Generated Taylor Swift Images: 'I Didn't Create Them'</p>
                <span className='text-gray-400 text-sm'>(Aug 26, 2024 - 12:00:51 PM | Comments (4) | Score: 47)</span>
              </div>

              <div className='flex flex-col text-start'>
                <p>Trump Denies Liability for Sharing AI-Generated Taylor Swift Images: 'I Didn't Create Them'</p>
                <span className='text-gray-400 text-sm'>(Aug 26, 2024 - 12:00:51 PM | Comments (4) | Score: 47)</span>
              </div>
              
            </div>
            
            
        </div>
    </div>
  )
}

export default NewsSnippets