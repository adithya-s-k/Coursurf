import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Card = () => {
    const price = 500;
    return (
        <div className='card'>
            <div className="top">
                <img className='w-full card-img' height='30%' src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/a1/fd9a9b0f404af6842d49aad8cf141a/Andrew-WA-Thompson-699-1-.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&fit=fill&q=50' alt='course-img' />
            </div>
            <div className="bottom">
                <h2 className='title'>Applied Data Science with Python Specialization</h2>

                <Text noOfLines={5} className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit eaque rem doloribus deserunt commodi. Aliquid temporibus, tenetur necessitatibus exercitationem, eum nisi perspiciatis dicta laborum nemo magnam asperiores porro ipsam?</Text>


                <div className='feature'>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nam dolor. Cumque distinctio est esse dolorem sit omnis ipsam eligendi animi nesciunt! Totam recusandae, natus ex perferendis ratione eum repellat hic maiores! Accusantium labore, molestias tempore quae consectetur et temporibus? */}
                </div>
                <div className='btns'>
                    <span className='price'>{price == 0 ? 'Free' : price + 'INR'}</span>
                    <a href='https://in.coursera.org/specializations/data-science-python' className='site-btn'>Go to course</a>
                </div>
            </div>
        </div>
    )
}

export default Card