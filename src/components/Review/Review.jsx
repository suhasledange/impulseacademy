import React from 'react'
import Container from '../Container'
import { review } from '../../constant'
import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div className='w-full bg-white mb-20'>
        <Container>
            <h1 className='text-2xl mb-6 text-text-head font-semibold'>What Our Students Says ?</h1>
            <div className='flex flex-wrap items-center justify-center gap-6'>
                {
                    review.map(r=>(
                        <ReviewCard key={r.id} image={r.image} review={r.review} name={r.name} batch={r.batch}/>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Review
